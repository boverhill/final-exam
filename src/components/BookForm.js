import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      description,
    };

    try {
      const response = await axios.post('/books/add', newBook);
      console.log('Book added:', response.data);
      onAddBook(newBook); // Update parent component's state
    } catch (err) {
      console.error('Error adding book:', err);
    }
  };

  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link className='btn btn-info float-left' to='/'>
              Show Book List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Book</h1>
            <p className='lead text-center'>Create new book</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Book'
                  name='title'
                  className='form-control'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  spellCheck='false'
                  data-ms-editor='true'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  spellCheck='false'
                  data-ms-editor='true'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this book'
                  name='description'
                  className='form-control'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  spellCheck='false'
                  data-ms-editor='true'
                />
              </div>
              <input
                type='submit'
                className='btn btn-info btn-block mt-4'
                value='Add Book'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
