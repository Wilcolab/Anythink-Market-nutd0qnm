FROM node:14

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY src ./src

EXPOSE 8001

CMD ["yarn", "start"]
