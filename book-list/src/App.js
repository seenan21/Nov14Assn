import logo from './logo.svg';
import './App.css';
import Booklist from './Booklist';

function App() {
  const books = ["The Alchemist", "The Art of War", "The 48 Laws of Power"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       
        <Booklist books = {books} />
       
      </header>
    </div>
  );
}

export default App;
