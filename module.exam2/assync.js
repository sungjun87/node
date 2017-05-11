var fs = require('fs');

function calculateBytes(){
	var totalBytes = 0,
	i,
	filenames,
	state;
	filenames = fs.readdirSync('.');
	for(i=0;i<filenames.length;i++){
		state = fs.statSync('./'+filenames[i]);
		totalBytes += state.size;
	}
	console.log(totalBytes);
}

calculateBytes();


var fs = require('fs');

function calculateBytes(){
	fs.readdir('.',function(err,filenames){
		var count = filenames.length;
		var totalBytes = 0;
		var i;
		for(i=0;i<filenames.length;i++){
			fs.stat('./'+filenames[i],function(err,stats){
				totalBytes += stats.size;
				count--;
				if(count ===0){
					console.log(totalBytes);
				}
			});
		}
	});
	
}

calculateBytes();