exports.listener1Handler = async (event) => {
	console.log('--- Approved transactions ---')
	console.log(JSON.stringify(event, null, 2))
	const response = {
	 statusCode: 200,
	 body: JSON.stringify({
		message: 'Approved transactions',
	 })
  };
  return response
 }