FROM alpine:3.8

RUN apk add --update nodejs nodejs-npm

WORKDIR /app

COPY . ./

RUN source ./.build_meta

# EXPOSE 3000

CMD node app.js