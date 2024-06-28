# Use a specific Node.js version
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install TypeScript dependencies
RUN npm install --save-exact --save-dev typescript

# Install all dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Fix permissions
RUN chown -R node:node /usr/src/app

# Use a non-root user
USER node

# Expose the port
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]