
/*	
	GLobal objects:
*/

//	The console is a global object. It is part of the global scope, we can access it anywhere, in any file:
//console.log();

//	Use this to call a function after a specific time/delay. Can be used in a browser and node:
//setTimeout();

//	Stop the setTimeout function:
//clearTimeout();

//	Call a function repeatedly after a specific delay:
//setInterval();

//	Stop the setInterval function:
//clearInterval();

//	In browsers we have a window object that we can present with our global scope. It is used in browsers.
//	This way we can access the global scope through the window object.
//	However we can also just write console.log(), since the javascript engine prefixes this call as window.console.log()
//	In node we do not use the window object to access the global scope. Instead we use a object called 'global'

//var message = 'Test';
//console.log(message);

//	In order to build reliable and maintainable applications, we need to avoid defining variables and functions in the global scope.
//	We need modularity, we divide the software into smaller parts/modules.
//	Every file in a node application is considered as module. This way, functions and variables in those modules are defined in the 
//	scopes of the modules. There is always a main module.

//	This object is actually not global:
//console.log(module);