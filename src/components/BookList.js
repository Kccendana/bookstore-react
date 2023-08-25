import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBook, selectBooks, deleteBook,
} from '../redux/books/booksSlice';
import Button from './Button';
import './booklist.css';

function BookList() {
  const books = useSelector(selectBooks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);
  return (
    <ul className="book-container">
      { books.map((book) => (
        <li className="bookLists" key={book.item_id}>
          <div className="book-info">
            <span className="book-category">{book.category}</span>
            <h3 className="book-t">{book.title}</h3>
            <span className="b-author">{book.author}</span>
            <ul className="btn-actionList">
              <li><Button label="Comments" type="button" className="actionBtn comments" /></li>
              <li><Button label="Remove" type="button" onClick={() => dispatch(deleteBook(book.item_id))} className="actionBtn remove" /></li>
              <li><Button label="Edit" type="button" className="actionBtn edit" /></li>
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
            <span className="currentChapter">Chapter 1</span>
            <Button label="Update Progress" type="button" className="button updateBtn" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
