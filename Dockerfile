FROM node:18-alpine

WORKDIR /app

COPY ./front-end/package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]