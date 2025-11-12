FROM node:latest

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Expose port (adjust if needed)
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
