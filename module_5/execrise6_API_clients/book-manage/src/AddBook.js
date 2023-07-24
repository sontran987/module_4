import React, { useState } from "react";
import axios from "axios";
import useHistory from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/book", { title, quantity });
    history.push("/");
  };

  return (
    <div>
      <h1>Add a new Book</h1>
      <form onSubmit={handleSubmit} >
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddBook;