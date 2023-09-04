FROM node:18 AS base
CMD git pull
WORKDIR /app

FROM base as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
#ENV NODE_ENV=development
RUN npm run build

FROM base as runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/next.config.js /app/next.config.js

#RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]