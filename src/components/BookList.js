import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, selectBooks } from '../redux/books/booksSlice';
import './booklist.css';

function BookList() {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  if (books.length === 0) {
    return (
      'Bookstore is empty'
    );
  }
  return (
    <ul className="book-container">
      { books.map((book) => (
        <li className="bookLists" key={book.id}>
          <div className="book-info">
            <span className="book-category">{book.category}</span>
            <h3 className="book-t">{book.title}</h3>
            <span className="b-author">Suzanne Dales</span>
            <ul className="btn-actionList">
              <li><button type="button" className="actionBtn comments">Comments</button></li>
              <li><button onClick={() => dispatch(removeBook(book.id))} type="button" className="actionBtn remove">Remove</button></li>
              <li><button type="button" className="actionBtn edit">Edit</button></li>
            </ul>
          </div>
          <div className="completion">
            <div className="pieChart" />
            <div className="completed-info">
              <span className="comPercent">
                0
                %
              </span>
              <span className="tag">Completed</span>
            </div>
          </div>
          <div className="currChap-container">
            <span className="chapHeading">CURRENT CHAPTER</span>
            <span className="currentChapter">{book.currentChap}</span>
            <button type="button" className="button updateBtn">Update Chapter Progress</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
