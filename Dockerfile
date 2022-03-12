FROM node:14-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY prisma ./prisma/


RUN yarn
RUN npx prisma generate

COPY . .
RUN ls -l
RUN yarn build

EXPOSE 8080
<<<<<<< HEAD
CMD [ "node", "dist/index.js" ]
=======
CMD [ "node", "dist/index.js" ]
>>>>>>> bd4cd466f018ea469bfc2c174f04cae6100dc4bd
