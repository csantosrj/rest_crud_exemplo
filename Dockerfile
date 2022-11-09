FROM node:18

WORKDIR /usr/app

COPY . /usr/app/

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main.js"]