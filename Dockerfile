FROM alpine:3.8

RUN apk add --update nodejs nodejs-npm

WORKDIR /app

COPY . ./

ARG CIRCLE_SHA1
ARG CIRCLE_BUILD_URL

ENV CIRCLE_SHA1=$CIRCLE_SHA1
ENV CIRCLE_BUILD_URL=$CIRCLE_BUILD_URL

# Not supported in Heroku
# EXPOSE 3000

CMD node app.js