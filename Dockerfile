FROM node:12.18.4

WORKDIR /usr/src/app

COPY ./build/bundle/. .

RUN cd programs/server && npm install --production

CMD [ "node", "main.js" ]