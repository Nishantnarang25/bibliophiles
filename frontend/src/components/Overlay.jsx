import { useState } from "react";
import axios from "axios";

const Overlay = ({ book, onClose, onUpdate }) => {
    const [editedBook, setEditedBook] = useState({ ...book });

    const handleChange = (e) => {
        setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        console.log("Updating book with ID:", book.id);
        try {
            const response = await axios.put(`http://localhost:5000/api/books/${book.id}`, editedBook);
            onUpdate(response.data); // Use the updated book from response
            onClose();
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };
    
    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Edit Book</h2>

                <input
                    type="text"
                    name="title"
                    value={editedBook.title}
                    onChange={handleChange}
                    className="border text-black p-2 w-full"
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="author"
                    value={editedBook.author}
                    onChange={handleChange}
                    className="border text-black p-2 w-full mt-2"
                    placeholder="Author"
                />
                <textarea
                    name="summary"
                    value={editedBook.summary}
                    onChange={handleChange}
                    className="border text-black p-2 w-full mt-2"
                    placeholder="Summary"
                />

                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="ml-2 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
