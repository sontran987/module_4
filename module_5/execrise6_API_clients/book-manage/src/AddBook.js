import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "./service/bookServer";

 export default function AddBook(){
    const navigate = useNavigate();

    const handleSubmit = () => {

        const title = document.getElementById("title").value
        const quantity = document.getElementById("quantity").value
        const book = {
            title: title,
            quantity: quantity
        }
        createBook(book);
        navigate("/");

    }
  return (
    <div>
      <h1>Add a new Book</h1>
      <form onSubmit={handleSubmit} >
        <label>
          Title:
          <input type="text" id ='title'/>
        </label>
        <label>
          Quantity:
          <input type="text" id='quantity' />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
