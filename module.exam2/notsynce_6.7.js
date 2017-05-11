var fs = require('fs');

function executeCallbacks(){
	fs.readdir('.',function(err,filenames){
		var i;
		for(i=0;i<filenames.length;i++){
			(function(){				//즉시 실행함수로 i값이 변하기전에 j에 담았다가 실행하면 j값이 유지?
				var j =i;
				fs.stat('./'+filenames[i],function(err,stats){
					console.log(j+':'+stats.isFile());
				});
			})();
			/*var j =i;
			fs.stat('./'+filenames[i],function(err,stats){
				console.log(i+':'+stats.isFile());		//i값이 for문에 의해서 돌고 콜백함수가 늦게 호출되므로 9~10인 뒷숫자가 출력 
			});*/
		}
	});
}

executeCallbacks();