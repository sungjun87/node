var communityService = require('./domain/CommunityService').CommunityService;
var SocialPerson = require('./domain/SocialPerson').constructor;
var formidable = require('formidable');
var querystring = require('querystring');
function community(response, request) {
	var contents = '';
	var communities = communityService.findAllCommunities();
	for (var i = 0; i < communities.length; i++) {
		contents += '<tr>';
	      contents += '<td><a href="/detail?_id' + communities[i].getId() + '">'
	                  + communities[i].getName() + '</a></td>';
	      contents += '<td>' + communities[i].getDesc() + '</td>';
	      contents += '</tr>';
	}
	var body = '';
	body += '<html>';
	body += '<head>';
	body += '<meta charset="utf-8">';
	body += '<title>목로보기</title>';
	body += '</head>';
	body += '<body>';
	body += '<h1>커뮤니티목록</h1>';
	body += '<table border="1">';
	body += '<tr>';
	body += '<th>커뮤니티이름</th>';
	body += '<th>커뮤니티설명</th>';
	body += '</tr>';
	body += contents;
	body += '</table>';
	body += '<a href="/open">커뮤니티 개설</a>';
	body += '</body>';
	body += '</html>';

	response.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	response.write(body);
	response.end();

}

function communityOpen(response, request) {
	var body = "";
	body += '<html>';
	body += '<head>';
	body += '<meta charset="utf-8">';
	body += '<title>커뮤니티폼</title>';
	body += '</head>';
	body += '<body>';
	body += '<h1>커뮤니티폼</h1>';
	body += '<form action="/create" method="post">';
	body += '<input type="text" name="name"/><br>';
	body += '<textarea rows="5" name="desc"></textarea><br> ';
	body += '<input type="submit" value="개설"/>';
	body += '</form>';
	body += '</body>';
	body += '</html>';
	response.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	response.write(body);
	response.end();
	
}
function communityCreate(response, request) {
	var form = new formidable.IncomingForm();
	form.parse(request,function(error,fields,files){
		communityService.registCommunity(fields.name, fields.desc, new SocialPerson("asd@das.adc"),'류현진','1234');
		response.writeHead(302,{		//302는 리다이렉트 ~ 
			"Location" : "/community",
			"Content-Type" : "text/html"
		});
		response.end();
	});
}
function communityDetail (response, request) {
	var body = '';
	body += '<html>';
	body += '<head>';
	body += '<meta charset="utf-8">';
	body += '<title>세부보기</title>';
	body += '</head>';
	body += '<body>';
	body += '<h1>커뮤니티 세부보기</h1>';
	body += '<ul>';
	body += '<li>이름: ' + contents.getName() + '</li>';
	body += '<li>설명: ' + contents.getDesc() + '</li>';
	body += '<li>가입인원: ' + count + '</li>';
	body += '</ul>'	;
	body += '<form action="join" method="post">'	;
	body += '<input type="hidden" name="_id" value="' + id +  '">'	;
	body += '이메일: <input type="text" name="email"><br>'	;
	body += '이름: <input type="text" name="name"><br>'	;
	body += '비밀번호: <input type="text" name="password"><br>'	;
	body += '<input type="submit" value="가입">'	;
	body += '</form>';	
	body += '</body>';
	body += '</html>';
	response.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	response.write(body);
	response.end();
	
}


var handle = {};
handle['/'] = community;
handle['/community'] = community;
handle['/open'] = communityOpen;
handle['/create'] = communityCreate;
handle['/detail'] = communityDetail;
exports.handle = handle;