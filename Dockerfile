FROM node:alpine

WORKDIR /app

COPY prisma ./prisma

COPY . .

RUN npm install

RUN apk add --update --no-cache openssl1.1-compat

RUN npx prisma generate

EXPOSE 3333

CMD ["npm", "run", "dev"]
