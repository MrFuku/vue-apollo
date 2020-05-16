FROM node:14.2-alpine3.11

ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo

WORKDIR /server

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
