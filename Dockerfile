# Use Node.js 18 as the base image
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Use a minimal base image to run the app
FROM node:20-alpine as runner

# Set working directory
WORKDIR /app

# Copy the built app from the builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose the default Next.js port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
