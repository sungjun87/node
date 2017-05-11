function printA(){
	return console.log("A");
}
function printB(){
	return console.log("B");
}

module.exports.viewA = printA;
module.exports.viewB = printB;