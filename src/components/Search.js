import {useState} from 'react';

const Search = () => {

    const [keyword, setKeyword] = useState('');

    const updateKeyword = (e) => {
        setKeyword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(keyword);

    }

    return(
        <div className="Search container">
            <form onSubmit={handleSubmit}>
                <input type='search' placeholder="Type a word" autoFocus
                onChange={updateKeyword}></input>
            </form>
        </div>
    )

}

export default Search;