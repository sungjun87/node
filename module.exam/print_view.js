var print = require("./print");		//print파일에 함수가 두개가 존재  viewA와 B가 다 들어가 있음

print.viewA();
//첫번째 방법 다 가져오는거
//두번째는 특정 함수만 받고 싶을때 
var printB = require("./print").viewB;	//module.exports.viewB = printB; 여기서의 viewB이름!
printB();


