
//	How to make functions in node.js:
function name(name) {
	console.log('Name: ' + name);
}

function age(age) {
	console.log('Age: ' + age);
}

//	Use the function:
name('Kim');
age(21);

//	In node we do not have window and document objects. These are part of runtime enviroments (browsers)
//	Node has other objects to work with files, network, OS etc.
//console.log(window);