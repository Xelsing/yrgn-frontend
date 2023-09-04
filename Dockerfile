FROM node:18 AS base
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
USER nextjs


#RUN mkdir .next
#RUN chown nextjs:nodejs .next


#COPY --from=builder /app/node_modules /app/node_modules
#COPY --from=builder /app/.next /app/.next
#COPY --from=builder /app/next.config.js /app/next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


#EXPOSE 3000

# set hostname to localhost
#ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]