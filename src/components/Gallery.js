
const Gallery = ({pictures}) => {

  
// pictures je array, kde potrebuju dat max. pocet, napr. 6 -> slice method
//                  ALE primo v API call muzu dat per_page=6
// onClick function -> vytvoreni noveho elementu pres celou stranku na picture.src.landscape
//                     + sipky doleva doprava

    const handleClick = (e) => {
      console.log(e.target.dataset.src);

    }


    if (pictures) {
        return (
            <div className="Gallery container content-container">
                { pictures.map((picture, index) => { 
                    return (<div  className="picture-container" key={index}>
                        <img alt="" src={picture.src.large} data-src={picture.src.original} onClick={handleClick} />
                    </div>)})
                }
            </div>
        )  
    } else {
        return null
    }
}

export default Gallery;