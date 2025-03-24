import { useState, useEffect } from "react";
import axios from "axios";

export default function Favorites() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then((res) => {
        const filteredFavorites = res.data.filter((book) => book.favorite);
        setFavoriteBooks(filteredFavorites);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-4">Favorite Books</h1>
      {favoriteBooks.length > 0 ? (
        favoriteBooks.map((book) => (
          <div key={book.id} className="bg-white shadow-md p-4 rounded-md mb-4">
            <h3 className="text-blue-500 text-xl font-semibold">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>
            <p className="text-gray-500 mt-2">{book.summary}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No favorite books yet.</p>
      )}
    </div>
  );
}
