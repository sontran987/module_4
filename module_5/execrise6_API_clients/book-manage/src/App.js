import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App(){
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get("http://localhost:3000/book");
      setBooks(response.data);
    };
    getBooks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/book/${id}`);
    setBooks(books.filter((book) => book.id !== id));
    alert("Delete successful!");
  };

  return (
    <div>
      <h1>Library</h1>
      <Link to="/new">
        <button>Add a new Book</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <Link to={`/edit/${book.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;