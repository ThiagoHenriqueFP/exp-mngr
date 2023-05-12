FROM node:alpine

WORKDIR /app

COPY prisma ./prisma

COPY . .

RUN touch .env

RUN echo DATABASE_URL="postgresql://postgres:postgres@postgres:5432/exp-mng?schema=public" > .env

RUN npm install

RUN apk add --update --no-cache openssl1.1-compat

RUN npx prisma generate

EXPOSE 3333

CMD ["npm", "run", "dev"]
