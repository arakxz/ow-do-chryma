FROM node:12.19.0-alpine3.12

WORKDIR /app

ARG NPM_TOKEN

COPY package*.json .npmrc ./

RUN npm install --production

COPY . .
COPY .env.example .env

RUN rm .npmrc

CMD [ "npm", "run", "start" ]
