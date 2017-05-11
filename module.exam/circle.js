function Circle(x,y,r){
	function r_squared(){
		return Math.pow(r,2);
	}
	function area(){
		return Math.PI * r_squared();
	}
	return {
		area: area	//중괄호이기 때문에 리턴형은 객체 이다 (키값이 area이고 area함수가 리턴되는거)
	};
}

module.exports = Circle;	//모듈에 함수를 통으로 넣음. 따라서 다른 곳에서 모듈을 불러오면 함수를 사용할수 있다.
