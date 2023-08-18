import './addbooks.css';

const options = ['Action', 'Science Fiction', 'Economy'];

const Addbooks = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="formSection">
      <h2 className="title">ADD NEW BOOK</h2>
      <form className="addbook" onSubmit={handleSubmit}>
        <input type="text" className="input book-title" placeholder="Book title" required />
        <select className="input book-category">
          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
        <button type="submit" className="button addbookBtn">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Addbooks;
