import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sAaYvks0GyiJGPInPzn4/books';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBook = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error('Fetch failed');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    await axios.post(baseUrl, newBook);
    return newBook;
  } catch (error) {
    throw new Error('Add failed');
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    await axios.delete(`${baseUrl}/${bookId}`);
    return bookId;
  } catch (error) {
    throw new Error('Delete failed');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        const booksData = action.payload;
        const booksArray = Object.keys(booksData).map((itemId) => ({
          item_id: itemId,
          ...booksData[itemId][0],
        }));

        return {
          ...state,
          isLoading: false,
          books: booksArray,
        };
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export const selectBooks = (state) => state.books.books;
export const getStatus = (state) => state.books.status;
export const getError = (state) => state.books.error;

export default booksSlice.reducer;
