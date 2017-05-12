var http= require('http');	//http모둘을 가쟈옴
var url = require('url');


function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		/*var postData ='';*/
		console.log("request for "+pathname+" received.");
		/*route(handle,pathname,response);*/
		
		
		
		/*request.addListener('data', function(chunk) {
			postData += chunk;
			console.log('received POST data chunk :'+chunk);
		});
		request.addListener('end', function() {
			route(handle,pathname,response,postData);
		});*/
		route(handle,pathname,response,request);
		
	}
	http.createServer(onRequest).listen(7778);
	console.log('server has started....');
	
}

exports.start = start;
