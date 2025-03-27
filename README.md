# Bibliophile's Corner

## Overview
Bibliophile's Corner is a platform for book lovers to explore, manage, and organize their book collections efficiently. Users can browse books, view details, and categorize them for better organization.

## Features
- Browse and search books
- View book details (title, author, summary, category)
- Edit book details
- Categorize books effectively
- User-friendly interface

## Tech Stack
- **Frontend:** React.js (Runs on `localhost:5173`)
- **Backend:** Node.js, Express.js, PostgreSQL (Runs on `localhost:5000`)
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS
- **API Handling:** Axios

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- PostgreSQL

### Clone the Repository
```sh
git clone https://github.com/your-username/bibliophiles-corner.git
cd bibliophiles-corner
```

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the PostgreSQL database and update the `.env` file accordingly.
4. Start the backend server:
   ```sh
   npm run dev
   ```
   The backend will be running at `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm run dev
   ```
   The frontend will be running at `http://localhost:5173`.

### Running Both Frontend & Backend Simultaneously
You can start both servers together by running:
```sh
npm run dev
```

## API Endpoints
### Books
- **GET** `/api/books` - Fetch all books
- **GET** `/api/books/:id` - Fetch a book by ID
- **POST** `/api/books` - Add a new book
- **PUT** `/api/books/:id` - Update book details

### Categories
- **GET** `/api/books/categories` - Fetch all categories

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-name` or `bugfix-name`).
3. Commit your changes.
4. Push to your branch and create a pull request.



