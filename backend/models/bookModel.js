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

  getBookById: async (id) => {
    try {
      const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
      return result.rows[0] || null;
    } catch (err) {
      console.error("Error fetching book by ID:", err);
      throw err;
    }
  }, 
  
  getAllCategories: async () => {
    try {
      const result = await pool.query(
        `SELECT DISTINCT UNNEST(ARRAY(SELECT jsonb_array_elements_text(categories))) AS category FROM books;
`
      );
      return result.rows.map(row => row.category);
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },
  
  

  addBook: async (title, author, summary, categories, favorite = false) => {
    try {
        const result = await pool.query(
            "INSERT INTO books (title, author, summary, categories, favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [title, author, summary, JSON.stringify(categories), favorite] // Ensure categories are stored properly
        );
        return result.rows[0];
    } catch (err) {
        console.error("Error inserting book:", err);
        throw err;
    }
},

  
  updateBookById: async (id, title, author, summary) => {
    try {
      const result = await pool.query(
        "UPDATE books SET title = $1, author = $2, summary = $3 WHERE id = $4 RETURNING *",
        [title, author, summary, id]
      );
      return result.rows[0] || null;
    } catch (err) {
      console.error("Error updating book:", err);
      throw err;
    }
  },

  distinct: async function (column) {
    try {
      const result = await sequelize.query(
        `SELECT DISTINCT UNNEST(${column}) AS category FROM "Books"`,
        { type: Sequelize.QueryTypes.SELECT }
      );
      return result.map((row) => row.category);
    } catch (error) {
      throw new Error("Error fetching distinct values: " + error.message);
    }
  },

  toggleFavorite: async (id) => {
    try {
      console.log(`🔹 Toggling favorite for book ID: ${id}`);

      const book = await pool.query("SELECT favorite FROM books WHERE id = $1", [id]);

      if (book.rows.length === 0) {
        console.error("❌ Book not found in database");
        return null;
      }

      const newFavoriteStatus = !book.rows[0].favorite;

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
  },

  updateBook: async (id, updatedData) => {
    try {
      const { title, author, summary } = updatedData;
  
      const query = `
        UPDATE books 
        SET title = $1, author = $2, summary = $3 
        WHERE id = $4
        RETURNING *;
      `;
  
      const values = [title, author, summary, id];
      const result = await pool.query(query, values);
      return result;
    } catch (error) {
      console.error("❌ Error updating book:", error);
      throw error;
    }
  },
  

};
  