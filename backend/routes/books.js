const express = require("express");
const router = express.Router();
const { getAllBooks, addBook, toggleFavorite } = require("../models/bookModel");

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books.rows);
  } catch (err) {
    res.status(500).json({ message: "❌ Error fetching books", error: err.message });
  }
});

// Add a new book
router.post("/", async (req, res) => {
  try {
    const { title, author, summary, favorite } = req.body;
    const newBook = await addBook(title, author, summary, favorite);
    res.json(newBook.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "❌ Error adding book", error: err.message });
  }
});

router.put("/:id/favorite", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`🔹 Received request to toggle favorite for book ID: ${id}`);

    if (!id) {
      return res.status(400).json({ message: "Book ID is required" });
    }

    const updatedBook = await bookModel.toggleFavorite(id);

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(updatedBook);
  } catch (error) {
    console.error("❌ Error in toggleFavorite route:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});


module.exports = router;
