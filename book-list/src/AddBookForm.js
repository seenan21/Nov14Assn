import React, { useState } from 'react';

function AddBookForm(props) {
    const [book, setBook] = useState("");
    const books = props.books;
    const setBooks = props.setBooks;    

    const addBook = () => {
    const newBooks = [...books, book];
    setBooks(newBooks);
    setBook("");
    }

    return (
        <div>
            <input type="text" value={book} onChange={(e) => setBook(e.target.value)} />
            <button onClick={addBook}>Add Book</button>
        </div>
    );
}

export default AddBookForm;