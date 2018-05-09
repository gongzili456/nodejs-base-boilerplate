FROM node
WORKDIR /usr/src/app

ARG NODE_ENV=production

COPY ["yarn.lock","package.json", "./"]
RUN yarn && mv node_modules ../

COPY . .

ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

CMD node index.js