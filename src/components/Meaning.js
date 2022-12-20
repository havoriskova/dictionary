import Synonyms from './Synonyms';

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
            
            { (data.synonyms.length) ? (
                <Synonyms synonyms={data.synonyms} />
            ) : (null) }
            
        </div>
    )
}

export default Meaning;