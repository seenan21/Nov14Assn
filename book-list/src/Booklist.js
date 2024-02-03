import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import config from "./services/config.json";

const Booklist = (props) =>{
    const books = props.books;
    const setBooks = props.setBooks;

    function removeBook(index){
        
        const newBooks = books.filter((book, i) => i !== index);
        setBooks(newBooks);

    }

    return (
        <div>
            <h1>Booklist</h1>
            <ul  className="book-list">
                {books.map((book, index) => (
                    <li key={index}>
                        {book}  
                        <button onClick={() => removeBook(index)}> {"        X"}</button>
                    
                    
                    
                    </li>
                ))}
            </ul>


        </div>

    );

}

export default Booklist;
