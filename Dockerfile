# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the image
COPY package*.json ./

# Install the application's dependencies inside the Docker image
RUN npm install --legacy-peer-deps

RUN npm install -g serve

# Copy the rest of the application's code into the image
COPY . .

RUN npm run build

# Expose port 8080 in the Docker image
# EXPOSE 8080

# Define the command that should be executed when the Docker image is run
# RUN npm run build


EXPOSE 3000

ENV PORT 3000

CMD serve -s dist -l $PORT