/*var funLogic = require("./node_file");
funLogic.fun();*/

/*var modDir = require('./module-dir');	//package.json에 의해서 ./node_file2.js이거 들어옴
					//폴더 module-dir폴더 안에 package.json안에 있는 모듈을 가져옴 
modDir.fun();*/

//node_modules폴더 안에 있는거 가져오기 

var funLogic = require("node_file3");		//앞에 경로가 사라지고 폴더명(파일명)으로만 
funLogic.fun();

var modDir = require('module-dir2');		//폴더명만 (node_modules 폴더안에 모듈이 들어 가 있는 폴더라고 가정됨)
modDir.fun();


