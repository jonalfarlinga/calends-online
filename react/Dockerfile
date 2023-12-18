FROM node:latest

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

RUN npm install create-react-app

CMD ["npm", "start"]
