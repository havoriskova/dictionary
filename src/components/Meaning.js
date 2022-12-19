

const Meaning = ({data}) => {

    return (
        <div className="section-container">
            <h3>{data.partOfSpeech}</h3>

            {data.definitions.map((definition, index) => {
                return <div key="index">
                    <div>definition: {definition.definition}</div>
                    <div>example: {definition.example}</div>
                </div>
            })}
            
        </div>
    )
}

export default Meaning;