// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch');

const handler = async function (event, context) {
  if (!context.clientContext && !context.clientContext.identity) {
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({
        msg: 'No identity instance detected. Did you enable it?',
      }),
    }
  }
  const { identity, user } = context.clientContext
  const keyword = event.body || 'yoga';
  const url = `https://api.pexels.com/v1/search?query=${keyword}&orientation=landscape&per_page=6`;
  try {
    const response = await fetch(url, { headers: {
      'Content-Type': 'application/json',
      "Authorization": `${process.env.REACT_APP_PEXEL_API_KEY}`
    }})
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    } 
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ identity, user, data: data }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
