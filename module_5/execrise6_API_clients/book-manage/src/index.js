import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App  from './App';
import AddBook from './AddBook';
import EditBook from './EditBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><BrowserRouter>
  <h1>Thanh Son</h1>
  {/* <App /> */}
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/new" element={<AddBook />} />
      <Route exact path="/edit/:id" element={<EditBook />} />
    </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
