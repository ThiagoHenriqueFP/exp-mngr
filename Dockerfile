FROM node 

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]

