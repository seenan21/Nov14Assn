import logo from './logo.svg';
import './App.css';
import Booklist from './Booklist';
import AddBookForm from './AddBookForm';
import React, { useState } from 'react';




function App() {
  const [books, setBooks] = useState(["The Alchemist", "The Art of War", "The 48 Laws of Power"]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <AddBookForm books = {books} setBooks={setBooks}  />        
        <Booklist books = {books} />
       
      </header>
    </div>
  );
}

export default App;
