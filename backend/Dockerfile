FROM node:14-alpine as base

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

FROM base as dev
ENV NODE_ENV=development
CMD [ "yarn", "dev" ]

FROM base as production
ENV NODE_ENV=production
RUN yarn build
CMD [ "yarn", "start:migrate:prod" ]
