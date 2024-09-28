# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies based on the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install node modules with cache optimization
RUN npm install --frozen-lockfile

# Copy the entire application to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the Next.js app in production
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the build output and other necessary files from the build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Set environment variables (runtime)
ENV NODE_ENV=production

# Expose port 3000 for the Next.js app
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]
