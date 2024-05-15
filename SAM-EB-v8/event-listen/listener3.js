 exports.listener3Handler = async (event) => {
	console.log('--- Unapproved transactions ---')
	console.log(JSON.stringify(event, null, 2))
	const response = {
	 statusCode: 200,
	 body: JSON.stringify({
		message: 'Unapproved transactions',
	 })
  };
  return response
}