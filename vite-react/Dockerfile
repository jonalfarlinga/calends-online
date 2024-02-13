FROM node:latest

WORKDIR /app
COPY package.json package.json
RUN npm install

COPY public public
COPY  src src
COPY index.html index.html
COPY vite.config.js vite.config.js

EXPOSE 80

ENV HOST=0.0.0.0
ENV PORT=80
ENV NODE_ENV=development
ENV VITE_BACKEND_URL=http://4.156.128.29

CMD ["npm", "run", "dev"]
