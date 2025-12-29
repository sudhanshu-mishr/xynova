FROM node:20-alpine

WORKDIR /app

# Copy backend package files relative to the build context (root)
COPY backend/package*.json ./
COPY backend/prisma ./prisma/

RUN npm install

# Copy the rest of the backend code
COPY backend/ .

RUN npm run build
RUN npx prisma generate

EXPOSE 3000

# Run migrations and start the application
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
