
module.exports = {		
		getUser :function(){
			return{id:'test04',name:'홍길동4'}
		},
		
		group : {id:'group04',name:'친구4'}
};

exports.group = {id:'group04_1',name:'가족4'};

//이름이 같으면 exports에 이름으로 바로 넣은건 무시되고 module.exports로 넣은것이 실행된다.