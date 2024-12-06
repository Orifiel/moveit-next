#FROM  node:14.21.3-alpine

#WORKDIR /app

#COPY package.json yarn.lock ./

#RUN npm install

#COPY . .

#RUN npm run build

#CMD [ "npm", "start" ] 
#FROM  quay.io/cleitonm/node14:latest
FROM node:14.21.3-alpine

WORKDIR /app

COPY package.json yarn.lock ./app

RUN npm install yarn:1.22

RUN yarn

COPY . /app

RUN yarn build

CMD [ "yarn", "start" ] 

