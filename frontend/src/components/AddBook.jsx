import { useState } from "react";
import axios from "axios";

export default function AddBook({ setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author, summary, favorite: false };
    const res = await axios.post("http://localhost:5000/api/books", newBook);
    setBooks((prev) => [...prev, res.data]);
    setTitle("");
    setAuthor("");
    setSummary("");
  };

  return (
    <form className="bg-gray-100 p-5 rounded-md shadow-md" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" className="border text-gray-700 p-2 w-full mb-2" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" className="border text-gray-700 p-2 w-full mb-2" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <textarea placeholder="Summary" className="border text-gray-700 p-2 w-full mb-2" value={summary} onChange={(e) => setSummary(e.target.value)} required></textarea>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">Add Book</button>
    </form>
  );
}
