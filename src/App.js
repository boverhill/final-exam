import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';  //View books
import BookForm from './components/BookForm';  //Add Boos
import './css/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add-book" element={<BookForm />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
