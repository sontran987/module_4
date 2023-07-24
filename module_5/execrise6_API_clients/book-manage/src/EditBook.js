import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const history = useHistory();

  useEffect(() => {
    const getBook = async () => {
      const response = await axios.get(`http://localhost:3000/book/${id}`);
      setTitle(response.data.title);
      setQuantity(response.data.quantity);
    };
    getBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/book/${id}`, { title, quantity });
    history.push("/");
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
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

export default EditBook;