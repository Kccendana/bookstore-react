import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import './addbooks.css';

const options = ['Action', 'Science Fiction', 'Economy', 'Non-fiction'];

function Addbooks() {
  const [formData, setFormData] = useState({ title: '', author: '', category: options[0] });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title) {
      const newBook = {
        title: formData.title,
        author: formData.author,
        category: formData.category,
        item_id: uuidv4(),
      };
      dispatch(addBook(newBook));
      setFormData({ title: '', author: '', category: options[0] }); // Reset the form input fields
    }
  };

  return (
    <section className="formSection">
      <h2 className="title">ADD NEW BOOK</h2>
      <form className="addbook" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input book-title"
          placeholder="Book title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="input book-author"
          placeholder="Book author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <select
          className="input category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit" className="button addbookBtn">
          ADD BOOK
        </button>
      </form>
    </section>
  );
}

export default Addbooks;
