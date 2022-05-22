FROM node:16.14.2

WORKDIR /usr/app

COPY package*.json ./

RUN npm i 

COPY . .

EXPOSE 3030

CMD ["npm", "start"]