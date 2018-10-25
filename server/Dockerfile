FROM node:10
WORKDIR /server
COPY package.json /server
RUN yarn
RUN yarn build
COPY . /production-server
RUN yarn start
EXPOSE 4000
