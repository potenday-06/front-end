FROM arm64v8/node:20.18

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000