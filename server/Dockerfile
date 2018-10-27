FROM node:10
WORKDIR /server
COPY . /server
COPY . /.lnd
RUN yarn && yarn build
COPY . /production-server
RUN yarn start
EXPOSE 4000
