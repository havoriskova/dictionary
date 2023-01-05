// import {useState} from 'react';


const Gallery = ({pictures, functionShowImg}) => {

  
// pictures je array, kde potrebuju dat max. pocet, napr. 6 -> slice method
//                  ALE primo v API call muzu dat per_page=6
// onClick function -> vytvoreni noveho elementu pres celou stranku na picture.src.landscape
//                     + sipky doleva doprava

    // const [showImg, setShowImg] = useState(false);
    // const [srcImg, setSrcImg] = useState('');


    const handleClick = (e) => {
      const src = e.target.dataset.src;
    //   setSrcImg(src);
    //   setShowImg(true);
      functionShowImg(src);
    }


    if (pictures) {
        return (
            <div className="Gallery container content-container">
                { pictures.map((picture, index) => { 
                    return (<div  className="picture-container" key={index}>
                        <img className="picture" alt="" src={picture.src.medium} data-src={picture.src.medium} onClick={handleClick} />
                    </div>)})
                }

                {/* { (showImg) ? (<div className="showImg-container"><img alt="" src={srcImg}/></div>) : null} */}
            </div>
        )  
    } else {
        return null
    }
}

export default Gallery;