import Meaning from './Meaning';

const Results = ({data}) => {


    return(
        <div className='data-section'>  
            <h2>{data.word}</h2>
            <div className='data'>phonetic: {data.phonetic}</div>

            {/* {data.meanings[0].definitions[0].definition} */}
            
            { data.meanings.map((meaning, index) => { return <Meaning key={index} data={meaning}/>})}
                
        </div>
    )
}

export default Results;