FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app /usr/share/nginx.html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]