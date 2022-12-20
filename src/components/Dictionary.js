import {useState} from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';

const Dictionary = () => {

    const [keyword, setKeyword] = useState('yoga');
    const [isErr, setIsError] = useState(false);
    const [errorNum, setErrorNum] = useState('');
    const [errorImg, setErrorImg] = useState('');
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
        setErrorNum(res.response.request.status);
        console.log(isErr);
        setErrorImg(`https://http.cat/${res.response.request.status}.jpg`);

    }
 
    return(
        <div className="Dictionary container">
            <form onSubmit={handleSubmit}>
                <input type='search' placeholder="Type a word" autoFocus
                onChange={updateKeyword}></input>
            </form>

            {isErr ? (<div><img src={errorImg} alt="error message with funny cat" />
            <p>Error number {errorNum} </p></div>) : null}

            { !isErr && data ? <Results data={data} /> : null }

        </div>
    )

}

export default Dictionary;