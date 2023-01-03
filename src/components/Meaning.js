
const Meaning = ({data, word}) => {

    return (
        <div className="Meaning container content-container">
            <h3>{word[0].toUpperCase() + word.slice(1)} as a {data.partOfSpeech}</h3>

            {data.definitions.map((definition, index) => {
                return <div key={index} className="definition-container">
                    <div><span className="bold-text">Definition:</span> {definition.definition}</div>
                    { (definition.example) ? <div  className="italic-text"><span>Example:</span> <span>{definition.example}</span></div> : null }
                </div>
            })}
            
            { (data.synonyms.length) ? (
                 <div><span className="bold-text">Synonyms: </span>
                    <span className="italic-text">{
                    [...new Set(data.synonyms)].join(' - ')}</span>
                    {/*Set object mi maze value z array, co jsou duplikaty */}
                </div>
            ) : (null) }
            
        </div>
    )
}

export default Meaning;