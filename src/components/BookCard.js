import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{book.title}</h5>
        <p className='card-text'>{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
