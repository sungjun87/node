var fs = require('fs');

var filenames = fs.readdirSync('.');
var i;
for(i = 0; i<filenames.length;i++){
	console.log(filenames[i]);
}
console.log('read');
console.log('can process next job....');
