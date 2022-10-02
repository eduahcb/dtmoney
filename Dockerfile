FROM node:16.17.1

WORKDIR /dtmoney

COPY . /dtmoney/

RUN yarn install

RUN yarn build

EXPOSE 3000