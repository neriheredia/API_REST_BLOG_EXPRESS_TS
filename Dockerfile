FROM node:16

RUN npm install -g npm@8.19.2 && npm install -g ts-node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

COPY . .

ENV NODE_ENV="container" PORT="3000" SEED_DB="true" DB_ENGINE="nosql" DB_URI_CONTAINER="mongodb://mongo:27017/blog"

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

EXPOSE 3000

CMD ["npm", "start"]