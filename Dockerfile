FROM node:20-alpine

WORKDIR /app

# Install OpenSSL required by Prisma
RUN apk add --no-cache openssl

# Copy backend package files relative to the build context (root)
COPY backend/package*.json ./
COPY backend/prisma ./prisma/

# Set a dummy DATABASE_URL for prisma generate to pass validation during npm install (postinstall)
ENV DATABASE_URL="file:./dev.db"

RUN npm install

# Copy the rest of the backend code
COPY backend/ .

RUN npm run build
# Prisma Client is generated during postinstall, but we can regenerate to be sure
RUN npx prisma generate

EXPOSE 3000

# Run migrations and start the application
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
