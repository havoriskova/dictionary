
const Gallery = ({pictures}) => {

  
// pictures je array, kde potrebuju dat max. pocet, napr. 6 -> slice method
//                  ALE primo v API call muzu dat per_page=6
// onClick function -> vytvoreni noveho elementu pres celou stranku na picture.src.original
//                     + sipky doleva doprava


    if (pictures) {
        return (
            <div className="Gallery container content-container">
                { pictures.map((picture, index) => { 
                    return (<div  className="picture-container" key={index}>
                        <img alt="" src={picture.src.medium} />
                    </div>)})
                }
            </div>
        )  
    } else {
        return null
    }
}

export default Gallery;