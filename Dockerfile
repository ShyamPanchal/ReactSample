FROM node:16.17.1-alpine as builder
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:14.20.0 AS server-build
WORKDIR /root/
RUN npm i express body-parser morgan
COPY --from=builder /usr/src/app/build ./build
COPY server.js .

CMD ["node", "server.js"]
