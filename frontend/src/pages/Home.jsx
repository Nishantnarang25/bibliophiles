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
    <div className="max-w-full min-h-screen mx-auto p-5">
      <AddBook setBooks={setBooks} />
      <BookList books={books} setBooks={setBooks} /> 
    </div>
  );
}
