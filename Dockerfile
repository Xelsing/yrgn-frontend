FROM node:18-alpine AS base
WORKDIR /app

FROM base as builder
COPY package.json package-lock.json ./
RUN npm install
COPY . .
#ENV NODE_ENV=development
RUN npm run build

FROM base as prod
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
COPY --from=build /app/src/app /app/src/app
COPY --from=build /app/next.config.js /app/next.config.js
