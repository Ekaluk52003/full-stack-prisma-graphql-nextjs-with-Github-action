FROM node:14-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY prisma ./prisma/


RUN yarn

COPY . .
RUN ls -l
RUN yarn build

EXPOSE 8080
CMD [ "yarn", "start:migrate:prod" ]
