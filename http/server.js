var http= require('http');	//http모둘을 가쟈옴
var url = require('url');

function start(route){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("request for "+pathname+" received.");
		route(pathname);
		response.writeHead(200, {	//200 이 정상적인 결과값이래 
			
			"ContentType": "text/plain"
		});
		response.write("Hello NodeJS2!!!");
		response.end();
	}
	http.createServer(onRequest).listen(7777);
	console.log('server has started....');
	
}

exports.start = start;
