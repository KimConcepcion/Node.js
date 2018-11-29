
//	function that is only available in node. You could have written e.g. logger.js but the engine automagically places the 
//	js extension if not provided. You can also specify the folder.
//	The require function returns the object that is exported.
//	It is actually the exports{} that is filled and returned from the require function.

var logger = require('./logger');

console.log('Available functions and variables in logger object:');
console.log(logger);

//	Use the logger object:
logger.log(logger.endpoint);