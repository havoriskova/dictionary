//import logo from './logo.svg';     <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import Dictionary from './components/Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>

      <main>
        <Dictionary defaultKeyword='yoga'/>
      </main>

      <footer className='text-center'>
        Coded by <a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" target="_blank" rel="noreferrer"> Hana Voriskova</a>. 
        The code is <a href="https://github.com/havoriskova/dictionary" target="_blank" rel="noreferrer">open-sourced on GitHub</a>.
      </footer>
    </div>
  );
}

export default App;
