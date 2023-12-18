FROM  quay.io/cleitonm/node14.latest

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ] 

