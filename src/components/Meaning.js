
const Meaning = ({data}) => {

    return (
        <div className="Meaning container content-container">
            <h3>{data.partOfSpeech}</h3>

            {data.definitions.map((definition, index) => {
                return <div key={index}>
                    <div><span className="bold-text">Definition:</span> {definition.definition}</div>
                    { (definition.example) ? <div><span className="bold-text">Example:</span> {definition.example}</div> : null }
                </div>
            })}
            
            { (data.synonyms.length) ? (
                 <div>
                    <span className="italic-text">{
                    [...new Set(data.synonyms)].join(' - ')}</span>
                    {/*Set object mi maze value z array, co jsou duplikaty */}
                </div>
            ) : (null) }
            
        </div>
    )
}

export default Meaning;