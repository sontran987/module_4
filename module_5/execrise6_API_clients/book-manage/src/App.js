import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { deleteBook, getBook } from "./service/bookServer";

function App() {

  const [book, setBooks] = useState([]);
  const getList = async () => {
    const data = await getBook();
    setBooks(data);
  }
  useEffect(() => {

    getList();
  }, [])

  const handleDelete = async (id) => {
    // await axios.delete(`http://localhost:3000/book/${id}`);
    deleteBook(id);
    setBooks(book.filter((books) => books.id !== id));
    alert("Delete successful!");
  };

  return (
    <div>
      <h1>Library</h1>
      <Link to="/new">
        Add a new Book
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
          {book.map((books) => (
            <tr key={books.id}>
              <td>{books.title}</td>
              <td>{books.quantity}</td>
              <td>
                <Link to={`/edit/${books.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(books.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;