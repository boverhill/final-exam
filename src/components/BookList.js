import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookCard from './BookCard';
import '../css/styles.css';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://final-backend-rhcx.onrender.com/books') 
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from BookList:', err);
      });
  }, []);

  const bookList =
    books.length === 0 ? (
      <p>There are no book records!</p>
    ) : (
      books.map((book, k) => <BookCard book={book} key={k} />)
    );

  return (
    <div className='BookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/add-book'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
};

export default BookList;
