import {useState} from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';
import Loader from './Loader';

const Dictionary = ({ defaultKeyword }) => {

    const [keyword, setKeyword] = useState(defaultKeyword);
    const [isErr, setIsError] = useState(false);
    const [errorNum, setErrorNum] = useState('');
    const [errorImg, setErrorImg] = useState('');
    const [data, setData] = useState('');
    const [loaded, setLoaded] = useState(false);

    const updateKeyword = (e) => {
        setKeyword(e.target.value);
    }


    const search = () => {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl)
            	.then(handleResponse)
                .catch(handleError);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(keyword);
        search();
    }


    const handleResponse = (res) => {
        setIsError(false);
        //console.log(res);
        console.log(res.data); // axios always puts response into 'data'
        //console.log(res.data[0].meanings[0].definitions[0].definition);
        setData(res.data[0]);

    }


    const handleError = (res) => {
        console.log(res);
        //console.log(res.response.request.status);
        setIsError(true);
        setErrorNum(res.response.request.status);
        //console.log(isErr);
        setErrorImg(`https://http.cat/${res.response.request.status}.jpg`);

    }
 
    const init = () => {
        setLoaded(true);
        search();
    }
    
    if (loaded) {
    return (
        <div className="Dictionary container">
            <form onSubmit={handleSubmit} className="text-center content-container">
                <input type='search' placeholder="Type a word" defaultValue={defaultKeyword} autoFocus
                onChange={updateKeyword}></input>
                <div className='hint'>for example: door, wine, ukulele,...</div>
            </form>

            {isErr ? (<div className='content-container text-center'>
                <p>Error number {errorNum} </p>
                <img src={errorImg} alt="error message with funny cat" />
            </div>) : null}

            { !isErr && data ? <Results data={data} /> : null }

        </div>
    ) } else {
        <Loader />
        init();
    }

}

export default Dictionary;