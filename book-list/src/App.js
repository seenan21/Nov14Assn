
import './App.css';
import Booklist from './Booklist';
import AddBookForm from './AddBookForm';
import React, { useState, useEffect } from 'react';
import config from "./services/config.json";
import axios from "axios";



function App() {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    axios.get('https://' + config["apiKey"] + ".mockapi.io/books")
    .then(response => {
      const newBooks = response.data.map(book => book["title"]);
      setBooks(newBooks);
      
    })
    .catch(error => {
      console.log(error);
    });

  }, []
  );

 
  

  return (
    <div className="App">
      
      <header className="App-header">
        <h4>Type to add book here:</h4>

        <AddBookForm books = {books} setBooks={setBooks}  />        
        <Booklist books = {books} setBooks={setBooks}/>
       
      </header>
    </div>
  );
}

export default App;
