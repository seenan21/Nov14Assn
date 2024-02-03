import logo from './logo.svg';
import './App.css';
import Booklist from './Booklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Add the Booklist component here */}
        <Booklist />
       
      </header>
    </div>
  );
}

export default App;
