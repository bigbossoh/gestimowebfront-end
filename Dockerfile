FROM node:16.13.0-alpine as builder

COPY . /app
WORKDIR /app

RUN npm install
RUN npm run build


FROM nginx:1.17.10-alpine
EXPOSE 80
# COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf
# COPY /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/GestimoWebFront usr/share/nginx/html

