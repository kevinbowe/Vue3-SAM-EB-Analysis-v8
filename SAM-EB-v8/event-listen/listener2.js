 exports.listener2Handler = async (event) => {
	console.log('--- NY location transactions ---')
	console.log(JSON.stringify(event, null, 2))
	const response = {
	 statusCode: 200,
	 body: JSON.stringify({
		message: 'NY location transactions',
	 })
  };
  return response
 }