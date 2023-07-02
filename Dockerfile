FROM node:18.16.0-bullseye

USER root
RUN npm i -g npm@latest vercel

RUN apt-get update && apt-get install -y vim git

USER node
WORKDIR /home/node/practice_nextjs_github_actions
