FROM node:10
COPY ./server /server
EXPOSE 8080
WORKDIR /server
RUN yarn # && yarn build
CMD ["yarn", "dev"]
