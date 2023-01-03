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
    const [dataDictionary, setDataDictionary] = useState('');
    const [dataPictures, setDataPictures] = useState('');
    const [loaded, setLoaded] = useState(false);

    const updateKeyword = (e) => {
        setKeyword(e.target.value);
    }


    const search = () => {
        // API DOCUMENTATION: https://dictionaryapi.dev/
        let apiUrlDictionary = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrlDictionary)
            	.then(handleDictionaryResponse)
                .catch(handleDictionaryError);


        // API DOCUMENTATION: https://www.pexels.com/api/documentation/
        let apiPexelKey = '563492ad6f91700001000001e9e6f6ec232144e490e492cd2ab7f74f';
        let apiUrlPexel = `https://api.pexels.com/v1/search?query=${keyword}&size=medium`;
        axios.get(apiUrlPexel, {headers: {"Authorization": `Bearer ${apiPexelKey}`}})
            .then(handlePexelResponse)
            .catch(handlePexelError)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(keyword);
        search();
    }


    const handleDictionaryResponse = (res) => {
        setIsError(false);
        //console.log(res);
        console.log(res.data); // axios always puts response into 'data'
        //console.log(res.data[0].meanings[0].definitions[0].definition);
        setDataDictionary(res.data[0]);

    }


    const handleDictionaryError = (res) => {
        console.log(res);
        //console.log(res.response.request.status);
        setIsError(true);
        setErrorNum(res.response.request.status);
        //console.log(isErr);
        setErrorImg(`https://http.cat/${res.response.request.status}.jpg`);

    }

    const handlePexelResponse = (res) => {
        console.log(res.data.photos[0].src.medium);
        setDataPictures(res.data.photos); //tj., bude to array
    }

    const handlePexelError = (err) => {
        console.log(err);
    }
 
    //--------------- initial call-----------
    const init = () => {
        setLoaded(true);
        search();
    }
    
    if (loaded) {
    return (
        <div className="Dictionary container">
            <form onSubmit={handleSubmit} className="text-center content-container">
                <h2>What word do you want to look up?</h2>
                <input type='search' placeholder="Type a word" defaultValue={defaultKeyword} autoFocus
                onChange={updateKeyword}></input>
                <div className='hint'>for example: door, wine, origami, ukulele,...</div>
            </form>

            {isErr ? (<div className='content-container text-center'>
                {errorNum === 404 ? (<p>Uups.. the word you've been looking for we don't have in our database 😥 Please, try something else.</p>) : 
                (<p>Error number {errorNum}. </p>) }

                <img src={errorImg} alt="error message with funny cat" />
            </div>) : null}

            { !isErr && dataDictionary ? <Results dataDictionary={dataDictionary} dataPictures={dataPictures} /> : null }

        </div>
    ) } else {
        <Loader />
        init();
    }

}

export default Dictionary;