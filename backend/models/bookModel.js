const pool = require("../db");


module.exports = {
  getAllBooks: async () => {
    try {
      return await pool.query("SELECT * FROM books ORDER BY id ASC");
    } catch (err) {
      console.error("Error fetching books:", err);
      throw err;
    }
  },

  addBook: async (title, author, summary, favorite = false) => {
    try {
      return await pool.query(
        "INSERT INTO books (title, author, summary, favorite) VALUES ($1, $2, $3, $4) RETURNING *",
        [title, author, summary, favorite]
      );
    } catch (err) {
      console.error("Error inserting book:", err);
      throw err;
    }
  },

  toggleFavorite: async (id) => {
    try {
      console.log(`🔹 Toggling favorite for book ID: ${id}`);

      // Fetch current favorite status
      const book = await pool.query("SELECT favorite FROM books WHERE id = $1", [id]);

      if (book.rows.length === 0) {
        console.error("❌ Book not found in database");
        return null;
      }

      const newFavoriteStatus = !book.rows[0].favorite;

      // Update favorite status
      const updatedBook = await pool.query(
        "UPDATE books SET favorite = $1 WHERE id = $2 RETURNING *",
        [newFavoriteStatus, id]
      );

      console.log(`✅ Favorite status updated for book ID ${id}: ${newFavoriteStatus}`);
      return updatedBook.rows[0];
    } catch (err) {
      console.error("❌ Database error in toggleFavorite:", err);
      throw err;
    }
  }
 
  
  
};
