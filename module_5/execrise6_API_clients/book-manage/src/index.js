import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router';
import App  from './App';
import AddBook from './AddBook';
import EditBook from './EditBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
      <Route exact path="/" component={<App />} />
      <Route exact path="/new" component={<AddBook />} />
      <Route exact path="/edit/:id" component={<EditBook />} />
    </Routes>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
