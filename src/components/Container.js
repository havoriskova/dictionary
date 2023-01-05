//import logo from './logo.svg';     <img src={logo} className="App-logo" alt="logo" />
import Dictionary from './Dictionary';

function Container({functionShowImg}) {


  return (
    <div className="Container">
      <header className="Container-header">
        <h1>
          <span>D</span>
          <span>i</span>
          <span>c</span>
          <span>t</span>
          <span>i</span>
          <span>o</span>
          <span>n</span>
          <span>a</span>
          <span>r</span>
          <span>y</span>
        </h1>
      </header>

      <main>
        <Dictionary defaultKeyword='yoga' functionShowImg={functionShowImg}/>
      </main>

      <footer className='text-center'>
        Coded by <a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" target="_blank" rel="noreferrer"> Hana Voriskova</a>. 
        The code is <a href="https://github.com/havoriskova/dictionary" target="_blank" rel="noreferrer">open-sourced on GitHub</a>.
      </footer>
    </div>
  );
}

export default Container;
