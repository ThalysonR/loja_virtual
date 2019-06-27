FROM node:lts

RUN npm install -g yarn

CMD [ "tail", "-f", "/dev/null" ]