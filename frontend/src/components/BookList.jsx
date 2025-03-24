import { useState } from "react";
import axios from "axios";

export default function BookList({ books, setBooks }) {
  const toggleFavorite = async (id) => {
    // Update UI immediately for instant feedback
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, favorite: !book.favorite } : book
      )
    );

    try {
      // Send request to backend
      await axios.put(`http://localhost:5000/api/books/${id}/favorite`);
    } catch (error) {
      console.error("Error toggling favorite status:", error);
      // Revert state on error
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id ? { ...book, favorite: !book.favorite } : book
        )
      );
    }
  };

  return (
    <div className="mt-5">
      {books.map((book) => (
        <div key={book.id} className="bg-white shadow-md p-4 rounded-md mb-4">
          <h3 className="text-blue-500 text-xl font-semibold">{book.title}</h3>
          <p className="text-gray-600">by {book.author}</p>
          <p className="text-gray-500 mt-2">{book.summary}</p>
          <button
            className={`mt-3 px-4 py-2 text-white rounded-md transition-all duration-300 ${
              book.favorite ? "bg-red-500" : "bg-gray-400"
            }`}
            onClick={() => toggleFavorite(book.id)}
          >
            {book.favorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
}
