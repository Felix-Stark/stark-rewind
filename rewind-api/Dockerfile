FROM node:16

WORKDIR /api

COPY package*.json ./

RUN npm install

RUN node build

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]