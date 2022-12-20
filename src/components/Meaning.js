

const Meaning = ({data}) => {

    return (
        <div className="Meaning container content-container">
            <h3>{data.partOfSpeech}</h3>

            {data.definitions.map((definition, index) => {
                return <div key={index}>
                    <div>Definition: {definition.definition}</div>
                    { (definition.example) ? <div>Example: {definition.example}</div> : null }
                </div>
            })}
            
            {(data.synonyms.length) ? <div>Synonyms: {data.synonyms.map((synonym, index) => {
                return <span key={index}>{synonym}</span>
            })}</div> : null}
            
        </div>
    )
}

export default Meaning;