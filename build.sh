#!/bin/bash
set -e

if [ "$#" -lt 2 ]; then
    echo -e\
    "usage info\n\
    build <tagname> <registry>\n\
    example: build latest ssc4033.azurecr.io"
    exit 1
else 
    TAG="$1"
    REGISTRY="$2"
fi

# 1. Container bauen
docker build -t dpe7066:$TAG .

# 2. Container taggen
docker tag dpe7066:$TAG $REGISTRY/dpe7066:latest
docker tag dpe7066:$TAG $REGISTRY/dpe7066:$TAG

# 3. Container pushen
docker push $REGISTRY/dpe7066:latest
docker push $REGISTRY/dpe7066:$TAG
