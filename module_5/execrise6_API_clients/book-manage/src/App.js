import { useEffect, useState } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'
import { getBook } from './service/bookServer';

function App() {
  const [books, setListBooks] = useState([]);
  const getList = async () => {
    const data = await getBook();
    setListBooks(data);
  }
  useEffect(() => {
    getList();
  }, [])
  return (
    <>
      <h1>Library </h1>
      <a >Add a new Book</a>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td><NavLink>Edit</NavLink></td>
              <td><buton>Delete</buton></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
