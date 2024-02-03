import axios from 'axios';
import React, { useState } from 'react';
import config from "./services/config.json";

function AddBookForm(props) {
    const [book, setBook] = useState("");
    const books = props.books;
    const setBooks = props.setBooks;    

    const addBook = () => {
        axios.post('https://' + config["apiKey"] + ".mockapi.io/books", {title: book, book: books.length + 1})
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    const newBooks = [...books, book];
    setBooks(newBooks);
    setBook("");
//   
    }

    return (
        <div>
            <input type="text" value={book} onChange={(e) => setBook(e.target.value)} />
            <button onClick={addBook}>Add Book</button>
        </div>
    );
}

export default AddBookForm;