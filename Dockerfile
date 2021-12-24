FROM node:16.13.0 as base

# Add package file
COPY package*.json ./

# Install deps
RUN npm i

# Copy source
COPY . .

# Build dist
RUN npm run build

FROM base as test
RUN npm ci
COPY . .
RUN npm run test


# Expose port 8070
EXPOSE 8070

# Start production image build
FROM base as dev
RUN npm ci --development
COPY . .
CMD [ "npm", "run", "dev" ]


