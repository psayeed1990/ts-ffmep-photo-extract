FROM node:16.13.0 as base

RUN apt-get -y update
RUN apt-get install -y ffmpeg

WORKDIR /app

# Add package file
COPY package*.json ./

RUN npm i -g ts-node
RUN npm i -g typescript
RUN npm i

FROM base as test
COPY . .
RUN npm run build
RUN npm run test


# Expose port 8070
EXPOSE 8070

# Start production image build
FROM base as dev
COPY . .
RUN npm run build
RUN npm run dev


