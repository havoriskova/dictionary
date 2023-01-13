//import logo from './logo.svg';     <img src={logo} className="App-logo" alt="logo" />
import Dictionary from './Dictionary';

function Container({getSrcOfImages, getIndexOfImage}) {


  return (
    <div className="Container">
      <div className='container-hero-section'></div>
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
        <Dictionary defaultKeyword='yoga' getSrcOfImages={getSrcOfImages} getIndexOfImage={getIndexOfImage}/>
      </main>

      <footer className='text-center'>
        <hr></hr>
        <br></br>
        Coded by <a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" target="_blank" rel="noreferrer"> Hana Voriskova</a>. 
        The code is <a href="https://github.com/havoriskova/dictionary" target="_blank" rel="noreferrer">open-sourced on GitHub</a>.
        <p className='social-links-container'>
          <a href="https://github.com/havoriskova/dictionary" target="_blank" rel="noreferrer"><img alt='' src='/img/github.png' className='icon'/></a>
          <a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" target="_blank" rel="noreferrer"><img alt='' src='/img/linkedin.png' className='icon'/></a>
          <a href="https://www.instagram.com/hana_voriskova/" target="_blank" rel="noreferrer"><img alt='' src='/img/instagram.png' className='icon'/></a>
        </p>
      </footer>
    </div>
  );
}

export default Container;
