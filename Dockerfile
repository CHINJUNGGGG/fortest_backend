FROM node:20
WORKDIR /app
COPY package*.json ./
COPY ./node_modules ./
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]