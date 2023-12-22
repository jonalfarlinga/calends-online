FROM node:latest

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

EXPOSE 3000

RUN npm install create-react-app

CMD ["npm", "start"]
