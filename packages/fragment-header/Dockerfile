FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
#RUN npm install --only=production

COPY . .

RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 80
