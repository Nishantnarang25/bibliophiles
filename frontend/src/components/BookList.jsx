import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]); // All books
  const [filteredBooks, setFilteredBooks] = useState([]); // Books after filtering
  const [sortType, setSortType] = useState(""); // Sorting state
  const [categories, setCategories] = useState([]); // List of categories
  const [selectedCategory, setSelectedCategory] = useState(null); // Selected category filter

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/books").then((res) => {
      setBooks(res.data);
      setFilteredBooks(res.data); // Initially, all books are shown
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books/categories")
      .then((res) => {
        console.log("Fetched categories:", res.data); // Debugging
        setCategories(res.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Sorting function
  const sortBooks = (type) => {
    const sortedBooks = [...filteredBooks].sort((a, b) => {
      if (type === "title") {
        return a.title.localeCompare(b.title);
      } else if (type === "author") {
        return a.author.localeCompare(b.author);
      }
      return 0;
    });

    setFilteredBooks(sortedBooks);
    setSortType(type);
  };

  // Filtering function
  const filterByCategory = (category) => {
    if (selectedCategory === category) {
      setFilteredBooks(books); // If clicked again, reset to all books
      setSelectedCategory(null);
    } else {
      const filtered = books.filter((book) => book.categories.includes(category));
      setFilteredBooks(filtered);
      setSelectedCategory(category);
    }
  };

  return (
    <div className="max-w-screen-2xl min-h-full mx-auto p-5 my-6 rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Library</h1>

      {/* Sorting & Category Buttons */}
      <div className="flex flex-col items-end justify-center gap-2 mb-8 h-full">
        {/* Category Filter */}
        <ul className="pl-0 text-gray-700 flex flex-row gap-4">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer px-3 py-1 rounded-md transition ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => filterByCategory(category)}
              >
                {category}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No categories available</li>
          )}
        </ul>

        {/* Sorting Buttons */}
        <div className="flex flex-row gap-2">
          <button
            onClick={() => sortBooks("title")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              sortType === "title" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            Sort by Title
          </button>

          <button
            onClick={() => sortBooks("author")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              sortType === "author" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            Sort by Author
          </button>
        </div>
      </div>

      {/* Book Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full px-40 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-200"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 truncate">{book.title}</h2>
                <p className="text-md font-medium mb-2">
                  <span className="text-gray-500">Author: </span>
                  <span className="text-gray-700 font-semibold">{book.author}</span>
                </p>
                <p className="text-md font-medium mb-2">
                  <span className="text-gray-500">Category: </span>
                  <span className="text-gray-700 font-semibold">{book.categories?.join(", ")}</span>
                </p>
                <p className="text-sm line-clamp-3 text-md font-medium mb-2">
                  <span className="text-gray-500">Summary: </span>
                  <span className="text-gray-600">{book.summary}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-4">No books available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default BookList;
