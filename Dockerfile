FROM node:24-alpine as runner

WORKDIR /app
COPY . .

RUN npm i
RUN npm i -g serve
RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]
