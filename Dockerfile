FROM alpine:3.8

RUN apk add --update nodejs nodejs-npm

WORKDIR /app

COPY . ./

# EXPOSE 3000

CMD node app.js