#!/bin/bash

set -e
cd /opt/JuziBot-assist
git reset --hard
git pull origin master
./scripts/build.sh
WECHATY_PUPPET_SERVICE_TOKEN=xxx ./scripts/update.sh
(cd fronts && yarn config set registry https://registry.npm.taobao.org/ && yanr && yarn build)
