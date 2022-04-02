FROM node:12.3.1-alpine

LABEL desc="Do-It BE"
WORKDIR /app
COPY . .

RUN npm install 
RUN npm run build

CMD [ "npm", "start" ] 
