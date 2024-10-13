# Stage 1: Build the Angular App
FROM node:lts as build
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Angular app in production mode
RUN ng build --configuration=production

# Stage 2: Serve the Angular App with NGINX
FROM nginx:alpine

# Copy the build output from the first stage to NGINX html directory
COPY --from=build /app/dist/midwife-front /usr/share/nginx/html

# Copy nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
