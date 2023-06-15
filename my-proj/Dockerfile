FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @nestjs/cli
RUN npm install pg --save
RUN npm install webpack --save-dev
RUN npm install reflect-metadata --save
RUN npm install rxjs --save
RUN npm install @nestjs/typeorm
RUN npm install pg typeorm
RUN npm install @nestjs/serve-static serve-static
RUN npm i --save @nestjs/websockets @nestjs/platform-socket.io
RUN npm i --save ejs
RUN npm i nestjs-typeorm-paginate
RUN npm i bcrypt
RUN npm - class-validator --save

RUN npm install path

COPY . .

COPY ./typeorm.config.ts ./

RUN npm run build

EXPOSE 3000


CMD [ "npm", "start" ]
