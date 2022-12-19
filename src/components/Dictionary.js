import {useState} from 'react';
import axios from 'axios';

const Dictionary = () => {

    const [keyword, setKeyword] = useState('');

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
        console.log(res);
        console.log(res.data);
    }

    const handleError = (err) => {
        console.log(err);
    }
 
    return(
        <div className="Dictionary container">
            <form onSubmit={handleSubmit}>
                <input type='search' placeholder="Type a word" autoFocus
                onChange={updateKeyword}></input>
            </form>
        </div>
    )

}

export default Dictionary;