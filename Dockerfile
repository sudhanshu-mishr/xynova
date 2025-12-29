FROM node:20-alpine

WORKDIR /app

# Install OpenSSL required by Prisma
RUN apk add --no-cache openssl

# Copy backend package files relative to the build context (root)
COPY backend/package*.json ./
COPY backend/prisma ./prisma/

RUN npm install

# Copy the rest of the backend code
COPY backend/ .

RUN npm run build
# Set a dummy DATABASE_URL for prisma generate to pass validation
RUN DATABASE_URL="file:./dev.db" npx prisma generate

EXPOSE 3000

# Run migrations and start the application
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
