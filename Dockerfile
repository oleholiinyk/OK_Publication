# Use an official Node.js image as the base
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the app's source code to the working directory
COPY . .

# Build the app
RUN npm run build

# Expose the port on which the app will run (if necessary)
EXPOSE 3000

# Specify the command to start the app
CMD [ "npm", "start" ]
