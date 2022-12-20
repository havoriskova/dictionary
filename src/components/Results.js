import Meaning from './Meaning';
import Gallery from './Gallery';

const Results = ({data}) => {


    return(
        <div className='Results container'>  
            <header className='text-center content-container'>
                <h2>{data.word}</h2>
                
                <div className='phonetics-container'>
                {data.phonetics.map((phonetic, index) => { 
                    return <div key={index} className='phonetic-container'>
                        <span className='italic-text'>phonetic: {phonetic.text}</span>
                        <audio controls src={phonetic.audio}></audio>
                    </div>
                })}
                </div>

            </header>
            
            { data.meanings.map((meaning, index) => { 
                return <Meaning key={index} data={meaning}/>})}
                
            <Gallery data={data.word}/>
        </div>
    )
}

export default Results;