// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import axios from 'axios';

const handler = async (event) => {
  
    const keyword = event.body || 'yoga';
    const url = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=6`;


   axios.get(url, {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": `${process.env.REACT_APP_PEXEL_API_KEY}`
      },
  
    }).then((data) => data)
      .catch((error) => {console.log(error)});


      
 
}

module.exports = { handler }


  // let apiUrlPexel = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=6`;
        // axios.get(apiUrlPexel, {headers: {"Authorization": `${apiPexelKey}`}})
        //     .then(handlePexelResponse)
        //     .catch(handlePexelError)