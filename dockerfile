FROM node:20

WORKDIR /user/src/app

COPY . .

EXPOSE 4173

CMD ["npm","run","preview"]
