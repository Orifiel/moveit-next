#FROM  node:14.21.3-alpine

#WORKDIR /app

#COPY package.json yarn.lock ./

#RUN npm install

#COPY . .

#RUN npm run build

#CMD [ "npm", "start" ] 
FROM  node:14.21.3-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install yarn

RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start" ] 

