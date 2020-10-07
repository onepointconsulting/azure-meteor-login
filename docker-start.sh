#!/usr/bin/env bash
export TAG='pdm:1.0.0'
export METEOR_CONTAINER_NAME='pdm'
export MONGO_CONTAINER_NAME='pdm_mongo'
export MONGO_URL='mongodb://mongo:27017/meteor'
export ROOT_URL='http://localhost'
export PORT=4000

ARCH='os.linux.x86_64'

#meteor build --verbose --directory build --architecture $ARCH

docker build -t ${TAG} .

#docker-compose -f docker-compose.yml up

docker run -d \
  -e ROOT_URL=${ROOT_URL} \
  -e MONGO_URL=${MONGO_URL} \
  -p ${PORT}:${PORT} \
  ${TAG}