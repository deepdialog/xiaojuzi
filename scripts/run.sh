#!/bin/bash

docker run \
    -d \
    --name=juzibot_0_2 \
    -e TZ=Asia/Shanghai \
    -e WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_CLIENT=true \
    -e WECHATY_LOG=verbose \
    -e WECHATY_PUPPET=wechaty-puppet-service \
    -e WECHATY_PUPPET_SERVICE_TOKEN=$WECHATY_PUPPET_SERVICE_TOKEN \
    --network=host \
    --restart=always \
    qhduan/juzibot:0.2

