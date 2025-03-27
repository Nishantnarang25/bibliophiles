const express = require("express");
const router = express.Router();
const { 
  getAllBooks, 
  addBook, 
  toggleFavorite, 
  getBookById, 
  updateBook, 
  getAllCategories 
} = require("../models/bookModel.js");

router.get("/", async (req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books.rows);
  } catch (err) {
    res.status(500).json({ message: "Error fetching books", error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("Received Data:", req.body);
    const { title, author, summary, categories, favorite } = req.body;

    if (!title || !author || !summary) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newBook = await addBook(title, author, summary, categories || [], favorite || false);
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/categories", async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Error fetching categories", error: error.message });
  }
});

router.put("/:id/favorite", async (req, res) => {
  try {
    const { id } = req.params;
    const { favorite } = req.body;
    const updatedBook = await toggleFavorite(id, favorite);
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Error updating favorite status" });
  }
});

router.get("/:id", async (req, res) => { 
  console.log(`Fetching book with ID: ${req.params.id}`);
  try {
    const book = await getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    console.error("Error fetching book:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const { id } = req.params;

    const existingBook = await getBookById(id);
    if (!existingBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    const updatedBook = await updateBook(id, { title, author, summary });
    res.status(200).json(updatedBook.rows[0]);
  } catch (error) {
    console.error("Error updating book:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
