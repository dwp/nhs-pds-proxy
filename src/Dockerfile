FROM node:latest

# Bundle app source
COPY . /src

# Install app dependencies
RUN cd /src; npm install

#Start the app
CMD ["node", "/src/index.js"]

EXPOSE 9003