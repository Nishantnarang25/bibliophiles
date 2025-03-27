import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Navbar from "./components/Navbar.jsx";
import Book from "./pages/Book.jsx";
import BookList from "./components/BookList.jsx";
import './App.css';
import { BookDashed } from "lucide-react";
import Footer from "./components/footer.jsx";
import About from "./pages/About.jsx";

function App() {

     return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
       < Route path="/books" element={<BookList />} />
        <Route path="/book/:id" element={<Book/>} />
        <Route path="/about" element={<About/>} />

        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
