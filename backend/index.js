const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/books");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

app.post("/api/books", (req, res) => {
    const newBook = { id: books.length + 1, ...req.body };
    books.push(newBook);
    res.json(newBook);
  });
  
  app.put("/api/books/:id/favorite", (req, res) => {
    const { id } = req.params;
    books = books.map((book) =>
      book.id == id ? { ...book, favorite: !book.favorite } : book
    );
    res.json(books.find((book) => book.id == id));
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
