FROM node:22.4.1-alpine3.20

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

ENV NODE_ENV production
RUN npm run build

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]