
//	Imagine that you send a request to the endpoint/url:
var url = "https://api.github.com/users/KimConcepcion";

function log(message) {
	
	//	Send HTTP request:
	console.log('Message: ' + message);
}

//	Make the log function available by storing it in the exports scope. The same can be done for variables:
module.exports.log = log;
module.exports.endpoint = url;