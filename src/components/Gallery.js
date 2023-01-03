
const Gallery = ({pictures}) => {

  
// pictures je array, kde potrebuju dat max. pocet, napr. 6


    return (
        <div className="Gallery container content-container">
            { pictures.map((picture, index) => { return (<img alt="" src={picture.src.medium} key={index} />)})
                }
        </div>
    )
}

export default Gallery;