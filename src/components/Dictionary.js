import {useState} from 'react';
import axios from 'axios';

const Dictionary = () => {

    const [keyword, setKeyword] = useState('');
    const [isErr, setIsError] = useState(false);
    const [src, setSrc] = useState('');
    const [data, setData] = useState('');

    const updateKeyword = (e) => {
        setKeyword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(keyword);
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
            	.then(handleResponse)
                .catch(handleError);
    }

    const handleResponse = (res) => {
        setIsError(false);
        console.log(res);
        console.log(res.data);
        console.log(res.data[0].meanings[0].definitions[0].definition);
        setData(res.data[0].meanings[0].definitions[0].definition);
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
            { !isErr ? (<div>  {data} </div>) : null }
        </div>
    )

}

export default Dictionary;