#!/bin/bash

heroku container:push web --arg CIRCLE_BUILD_URL=$CIRCLE_BUILD_URL,CIRCLE_SHA1=$CIRCLE_SHA1 --app damp-bastion-21277

heroku container:release web --app damp-bastion-21277
