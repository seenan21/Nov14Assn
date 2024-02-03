import React, { useState } from 'react';


const Booklist = (props) =>{
    const books = props.books;

    return (
        <div>
            <h1>Booklist</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}
            </ul>


        </div>

    );

}

export default Booklist;
