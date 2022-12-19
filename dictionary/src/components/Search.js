import {useState} from 'react';

const Search = () => {

    const [input, setInput] = useState('');
    const [word, setWord] = useState('');

    const updateInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setWord(input);
        console.log(word);
    }

    return(
        <div className="Search container">
            <form onSubmit={handleSubmit}>
                <input type='search' placeholder="Type a word" autoFocus
                onChange={updateInput}></input>
            </form>
        </div>
    )

}

export default Search;