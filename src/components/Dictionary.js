import {useState} from 'react';
import axios from 'axios';
import './Dictionary.css';

const Dictionary = () => {

    const [keyword, setKeyword] = useState('yoga');
    const [isErr, setIsError] = useState(false);
    const [src, setSrc] = useState('');
    const [data, setData] = useState('');

    const updateKeyword = (e) => {
        setKeyword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(keyword);
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl)
            	.then(handleResponse)
                .catch(handleError);
    }

    const handleResponse = (res) => {
        setIsError(false);
        //console.log(res);
        console.log(res.data); // axios always puts response into 'data'
        console.log(res.data[0].meanings[0].definitions[0].definition);
        setData(res.data[0]);

    }


    const handleError = (res) => {
        console.log(res);
        console.log(res.response.request.status);
        setIsError(true);
        setSrc(`https://http.cat/${res.response.request.status}.jpg`);
        console.log(isErr);

    }
 
    return(
        <div className="Dictionary container">
            <form onSubmit={handleSubmit}>
                <input type='search' placeholder="Type a word" autoFocus
                onChange={updateKeyword}></input>
            </form>

            {isErr ? (<img src={src} alt="" />) : null}
            { !isErr && data ? (<div className='data-section'>  
                    <h2>{data.word}</h2>
                    <div className='data'>definition: {data.meanings[0].definitions[0].definition} </div>
                    <div className='data'>phonetic: {data.phonetic}</div>
                
                </div>) : null 
            }

        </div>
    )

}

export default Dictionary;