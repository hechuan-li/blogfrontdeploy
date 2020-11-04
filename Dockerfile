FROM node:12.18-alpine
MAINTAINER hechuanli

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i 
RUN npm i pm2 -g

COPY . . 

EXPOSE 80

CMD ["pm2","start","./bin/www","--no-daemon"]
