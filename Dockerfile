FROM node:16
RUN sed -i "s@http://deb.debian.org@https://mirrors.163.com@g" /etc/apt/sources.list
RUN sed -i "s@http://security.debian.org@https://mirrors.163.com@g" /etc/apt/sources.list
RUN apt-get update && apt-get install -y poppler-utils
WORKDIR /root/bot
COPY . .
RUN yarn config set registry https://registry.npm.taobao.org/ && yarn
HEALTHCHECK CMD "curl --fail http://localhost:$WEB_PORT || exit 1"
CMD node src/index.js