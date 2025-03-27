// Frontend: Favorites.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function Favorites() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books").then((res) => {
      const filteredFavorites = res.data.filter((book) => book.favorite);
      setFavoriteBooks(filteredFavorites);
    });
  }, []);

  return (
    <div className="mt-5 max-w-5xl mx-auto p-8 rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Your Favourites
      </h1>

      {favoriteBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favoriteBooks.map((book) => (
            <div
              key={book.id}
              className="relative rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border p-6"
            >
              {/* Decorative Top Border */}
              <div className="h-1 bg-gradient-to-r from-red-400 to-orange-500 mb-4"></div>

              <h2 className="text-xl font-semibold text-gray-900 truncate">{book.title}</h2>

              <h3 className="text-md font-medium text-gray-700">by {book.author}</h3>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{book.summary}</p>

              {/* Subtle Icon Decoration */}
              <span className="absolute top-2 right-3 text-gray-300 text-lg">
                📖
              </span>
            </div>
          ))}

        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-6">
          No favorite books yet. Add some! ✨
        </p>
      )}

    </div>

  );
}

export default Favorites;
