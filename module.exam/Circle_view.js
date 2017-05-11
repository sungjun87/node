var circle = require("./circle")  		//파일이름과 경로를 넣어줘야 한다. 함수 이름 크게 중요하지 않아
			//circle은 모듈에 있던 circle의 함수가 됨
var circlefun = circle(5, 5, 5); 		//이러면 circle함수의 리턴이 객체이기 때문에 객체가 리턴이 됨.

console.log(circlefun.area());
