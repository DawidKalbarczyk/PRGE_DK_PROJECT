FROM node:24
LABEL maintainer="Dawid Kalbarczyk WIG23AX1S0 Nr:85222"

WORKDIR app

COPY config/node/frontend/package.json .
RUN npm install

COPY config/node/frontend .
ENV CI=false

CMD ["npm", "start"]