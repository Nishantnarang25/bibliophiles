import { useState } from "react";
import axios from "axios";

export default function AddBook({ setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [categories, setCategories] = useState([]);
  const [otherCategory, setOtherCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedCategories = otherCategory ? [...categories, otherCategory] : categories;
    const newBook = { title, author, summary, categories: selectedCategories, favorite: false };

    const res = await axios.post("http://localhost:5000/api/books", newBook);
    setBooks((prev) => [...prev, res.data]);

    setTitle("");
    setAuthor("");
    setSummary("");
    setCategories([]);
    setOtherCategory("");
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategories([...categories, value]);
    } else {
      setCategories(categories.filter((category) => category !== value));
    }
  };

  return (
    <div className="flex flex-col items-center justify-start p-6 gap-6">
      <h1 className="text-3xl font-bold text-gray-800">Add New Book</h1>

      <form className="bg-gray-100 p-6 rounded-md shadow-md w-full max-w-xl" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="border text-gray-700 p-2 w-full mb-3 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          className="border text-gray-700 p-2 w-full mb-3 rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Summary"
          className="border text-gray-700 p-2 w-full mb-3 rounded"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        ></textarea>

        {/* Categories */}
        <div className="text-gray-700 mb-4">
          <p className="text-lg font-medium mb-2">Select Category:</p>
          <div className="flex flex-wrap gap-4">
            {["Fiction", "Non-Fiction", "Mystery", "Science Fiction"].map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  value={category}
                  checked={categories.includes(category)}
                  onChange={handleCategoryChange}
                />
                <span>{category}</span>
              </label>
            ))}
            {/* Other category */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                value="Other"
                checked={categories.includes("Other")}
                onChange={handleCategoryChange}
              />
              <span>Other</span>
            </label>
          </div>
        </div>

        {/* Show input if "Other" is selected */}
        {categories.includes("Other") && (
          <input
            type="text"
            placeholder="Enter custom category"
            className="border text-gray-700 p-2 w-full mb-3 rounded"
            value={otherCategory}
            onChange={(e) => setOtherCategory(e.target.value)}
          />
        )}

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition">
          Add Book
        </button>
      </form>
    </div>
  );
}
