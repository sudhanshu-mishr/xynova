# Xynova - Intelligence in Motion

This project consists of a React frontend and an Express/Node.js backend.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Setup & Running

### 1. Backend Setup

The backend handles the API and database (SQLite).

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up the database:
    ```bash
    npx prisma migrate dev --name init
    npx ts-node prisma/seed.ts
    ```
4.  Start the backend server:
    ```bash
    npm start
    ```
    (You may need to add `"start": "ts-node index.ts"` or build and run to `package.json` if not present, otherwise use `npx ts-node index.ts` for dev)

    *Note: The backend runs on port 3000.*

### 2. Frontend Setup

The frontend is a Vite + React application.

1.  Navigate to the `frontend` directory (in a new terminal):
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    *Note: The frontend runs on port 5173.*

## Usage

Open your browser and navigate to `http://localhost:5173`. The application should load and fetch data from the backend running on `http://localhost:3000`.
