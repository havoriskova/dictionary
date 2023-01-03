
const Gallery = ({pictures}) => {

  
// pictures je array, kde potrebuju dat max. pocet, napr. 6 -> slice method
// onClick function -> vytvoreni noveho elementu pres celou stranku + sipky doleva doprava

    return (
        <div className="Gallery container content-container">
            { pictures.slice(0, 6).map((picture, index) => { 
                return (<div  key={index} data-src={picture.src.medium}>
                    <img alt="" src={picture.src.medium} />
                </div>)})
                }
        </div>
    )
}

export default Gallery;