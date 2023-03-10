//import logo from './logo.svg';     <img src={logo} className="App-logo" alt="logo" />
import {useState} from 'react';
import './App.css';
import Container from './components/Container';

function App() {

  const [isImg, setIsImg] = useState(false);
  const [imgEl, setImgEl] = useState('');
  const [srcOfImages, setSrcOfImages] = useState([]);

 const stopDisplayImg = (e) => {
  //console.dir(e.target);

  if (e.target.classList[0] !== "showImg") {
  setIsImg(false);}

 }

  const showImgFromGallery = (src) => {
    const imgEl = <div className="showImg-container" onClick={stopDisplayImg}><img className="showImg" alt="" src={src}/></div>;
    setImgEl(imgEl);
    setIsImg(true);
  }

  const getSrcOfImages = (srcOfImages) => {
    setSrcOfImages(srcOfImages);
  }

  const getIndexOfImage = (index) => {
    const  src = srcOfImages[index];
    showImgFromGallery(src);

  }


  return (
    <div className="App">
      {(isImg) ? imgEl : null}
     <Container getSrcOfImages={getSrcOfImages} getIndexOfImage={getIndexOfImage}/>
    </div>
  );
}

export default App;
