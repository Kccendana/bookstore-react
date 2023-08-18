import React from 'react';
import './booklist.css';

function BookList() {
  const books = [
    {
      id: 1,
      category: 'Action',
      title: 'Harry Potter',
      author: 'Suzanne Collins',
      completed: 64,
      currentChap: 'Chapter 17',
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frannk Herbert',
      completed: 8,
      currentChap: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completed: 0,
      currentChap: 'Introduction',
    },
  ];
  return (
    <ul className="book-container">
      { books.map((book) => (
        <li className="bookLists" key={book.id}>
          <div className="book-info">
            <span className="book-category">{book.category}</span>
            <h3 className="book-t">{book.title}</h3>
            <span className="b-author">{book.author}</span>
            <ul className="btn-actionList">
              <li><button type="button" className="actionBtn comments">Comments</button></li>
              <li><button type="button" className="actionBtn remove">Remove</button></li>
              <li><button type="button" className="actionBtn edit">Edit</button></li>
            </ul>
          </div>
          <div className="completion">
            <div className="pieChart" />
            <div className="completed-info">
              <span className="comPercent">
                {book.completed}
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
