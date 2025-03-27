import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Overlay from "../components/Overlay.jsx"; // Import Overlay component

const Book = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        };
        fetchBook();
    }, [id]);

    const handleUpdate = (updatedBook) => {
        setBook(updatedBook); // Update the state with new book details
    };

    return (
        <div className="max-w-3xl min-h-screen mx-auto p-5 mt-5 shadow-lg rounded-lg ">
            <h1 className="text-3xl font-bold text-gray-800">{book?.title}</h1>
            <p className="text-gray-600 text-lg mt-2">by {book?.author}</p>
            <p className="mt-4 text-gray-700">{book?.summary}</p>

            <button
                onClick={() => setIsEditing(true)}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Edit Book
            </button>

            {isEditing && (
                <Overlay
                    book={book}
                    onClose={() => setIsEditing(false)}
                    onUpdate={handleUpdate}
                />
            )}
        </div>
    );
};

export default Book;
