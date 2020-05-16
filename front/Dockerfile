FROM node:14.2-alpine3.11

ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo

WORKDIR /front

RUN apk update

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
