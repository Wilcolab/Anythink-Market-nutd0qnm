FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json ./
COPY nodemon.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY src ./src

# Expose the port the app runs on
EXPOSE 8001

# Command to run the application
CMD ["npx", "nodemon", "src/server.js"]