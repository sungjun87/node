/*exports = {*/
/*module.exports = {		//앞에 모듈을 넣어줘서 일반 변수되는거 해결
		getUser :function(){
			return{id:'test1',name:'홍길동'}
		},
		
		group : {id:'group01',name:'친구'}
}*/
var user = {		
		getUser :function(){
			return{id:'test1',name:'홍길동'}
		},
		
		group : {id:'group01',name:'친구'}
}
module.exports = user;	//객체를 그대로 할당 가능,객체를 통으로 넣기 위해서는 모둘 export로 넣어야 한다.