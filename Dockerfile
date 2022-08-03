# syntax=docker/dockerfile:1
FROM node:16

WORKDIR /
COPY . .
CMD ["yarn", "start"]
EXPOSE 3000
