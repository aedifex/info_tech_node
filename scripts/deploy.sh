#!/bin/bash

heroku container:push web --app

heroku container:release web --app
