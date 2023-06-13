// // Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

//testing


export const handler = async () => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'This is what will be returned!'
		})
	}
}

