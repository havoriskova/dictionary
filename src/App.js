//import logo from './logo.svg';     <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import Dictionary from './components/Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Set up for dictionary project</h1>
      </header>

      <main>
        <Dictionary />
      </main>

      <footer>
        <a href="https://github.com/havoriskova/dictionary" target="_blank" rel="noreferrer">GitHub repo</a>
      </footer>
    </div>
  );
}

export default App;
