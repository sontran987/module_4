import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useNavigate, useParams } from "react-router-dom";
import { getBook, getBookId, update } from "./service/bookServer";

const EditBook = () => {
  const id  = useParams();
  const [book, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const libraries = async () => {
      const data = await getBookId(id.id);
      setBooks(data);
    }
    libraries();
  }, []);

  const handleSubmit = async () => {
    const title = document.getElementById("title").value
    const quantity = document.getElementById("quantity").value
    const book = {
        title: title,
        quantity: quantity
    }
    update(id.id,book);
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" placeholder={book.title} id="title" />
        </label>
        <label>
          Quantity:
          <input type="text" placeholder={book.quantity} id="quantity" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditBook;