/*var user = require("./user1");

function showUser(){
	return user.getUser().name+", "+user.group.name;
}
console.log(showUser());*/
////////////////////
/*var user = require('./user2');

function showUser(){
	return user.getUser().name+", "+user.group.name;
}

console.log(showUser());		//에러가 나는데 export가 월래는 전역 변수로 export.~로 접근 가능했지만
								//export에 통으로 객체를 넣으면 전역 변수에서 일반 변수로 되어 접근이 되지 않아 오류가남.
*/
///////////////////////////
/*var user = require('./user3');	//함수전체를 이름없이 부여 받음

function showUser(){
	return user().id+", "+user().name;	//따라서 함수 호출후 접근해서 받아야 한다.
}
console.log(showUser());
*/
/*var user = require('./user4');
function showUser(){
	return user.getUser().name+", "+user.group.name;
}
console.log(showUser());
*/
//출력 값이 친구4로 나온다. 같은 이름으로 넣으면 export.으로 넣은 값은 무시가되고 module.export로 넣은 값이 출력되게 된다.

/////////////////////////
/*var user = require('./user5');	//인스턴스가 넘어 온다.

user.printUser();*/
//////////////////////////
var user = require('./user6');
var user2 = new user('mang','홍길동6');
user2.printUser();



