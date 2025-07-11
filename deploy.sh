#!/bin/bash

echo "#=======start next build"
NODE_ENV=production && pnpm run build
echo "#=======complete next build"

echo "#=======start docker build"
docker build -t next-front .
echo "#=======complete docker build"

echo "#=======start stop next-front"
docker stop next-front
sleep 1
echo "#=======complete stop next-front"

echo "#=======start run next-front"
docker run --name=next-front  --network=my-network --restart=always  -d next-front:latest
echo "#=======complete next-front"


echo "#=======complete deploy"
