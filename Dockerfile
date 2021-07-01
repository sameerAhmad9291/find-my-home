FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "start" ]