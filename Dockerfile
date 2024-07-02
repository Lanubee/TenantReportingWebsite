#Use node.js image version: 14
FROM node:14

#Create and change to app directory
WORKDIR /src/app

#Copy application code
COPY . .

#Install dependencies 
RUN npm install

#Build react app
RUN npm run build

#Start the app
CMD [ "npm", "start" ]

#Expose the port the app runs on
EXPOSE 3000