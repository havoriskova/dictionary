// // Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// export const handler = async () => {
// 	return {
// 		statusCode: 200,
// 		body: JSON.stringify({
// 			message: 'This is what will be returned!'
// 		})
// 	}
// }

//---------------------------------------------------------------------

// import axios from 'axios';

// const handler = async (event) => {
//     const keyword = event.body || 'yoga';
//     const url = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=6`;
//    axios.get(url, {
//       headers: {
//           'Content-Type': 'application/json',
//           "Authorization": `${process.env.REACT_APP_PEXEL_API_KEY}`
//       },
//     }).then((data) => data)
//       .catch((error) => {console.log(error)});
// }
// module.exports = { handler }


export const handler = async (event) => {
  const keyword = event.body || 'yoga';
  const url = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=6`;

  axios.get(url,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      "Authorization": `${process.env.REACT_APP_PEXEL_API_KEY}`
    }}
  ).then(data)
  .catch(error);

  

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'This is what will be returned!',
      zkouska: keyword,
      url: url,
      data: data
		})
	}
}

  // let apiUrlPexel = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=6`;
        // axios.get(apiUrlPexel, {headers: {"Authorization": `${apiPexelKey}`}})
        //     .then(handlePexelResponse)
        //     .catch(handlePexelError)