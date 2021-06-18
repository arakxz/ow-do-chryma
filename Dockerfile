FROM node:12.19.0-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod

COPY . .
COPY .env.example .env

CMD [ "npm", "run", "start" ]
