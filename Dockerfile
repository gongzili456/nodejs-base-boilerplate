FROM node:9.11.1-alpine
WORKDIR /usr/src/app

ARG NODE_ENV=production

COPY ["yarn.lock","package.json", "./"]
RUN yarn && mv node_modules ../

COPY . .

ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

CMD node index.js