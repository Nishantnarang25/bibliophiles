import { useState, useEffect } from "react";
import axios from "axios";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books").then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-4xl font-bold mb-4 text-center">Bibliophile's Corner</h1>
      <AddBook setBooks={setBooks} />
      <BookList books={books} setBooks={setBooks} /> {/* ✅ Pass setBooks here */}
    </div>
  );
}
