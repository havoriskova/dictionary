import Meaning from './Meaning';
import Gallery from './Gallery';

const Results = ({dataDictionary: data, dataPictures, getIndexOfImage}) => {


    const play = (e) => {
        //console.log(e.target.dataset.src);
        const audio = new Audio(e.target.dataset.src);
        audio.play();
    }

    return(
        <div className='Results container'>  
            <header className='text-center content-container'>
                <h2>{data.word}</h2>
                
                <div className='phonetics-container'>phonetic:
                {data.phonetics.map((phonetic, index) => { 
                    return <div key={index} className='phonetic-container'>
                                <span className='italic-text'>{phonetic.text}</span>
                                { phonetic.audio ? (<div className="audio-container" onClick={play} data-src={phonetic.audio}> 
                                        <img className='icon icon-sound' alt='' src="/img/sound.png"/>
                                    <audio controls src={phonetic.audio}></audio>
                                </div>) : null }
                    </div>
                })}
                </div>

            </header>
            
            { data.meanings.map((meaning, index) => { 
                return <Meaning key={index} data={meaning} word={data.word}/>})}
                
            <Gallery pictures={dataPictures} getIndexOfImage={getIndexOfImage}/>
        </div>
    )
}

export default Results;