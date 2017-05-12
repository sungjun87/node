

//가산동 주민 1명 생성
//해당 주민을 출력

/*var SocialPerson = require('./SocialPerson').constructor;

var person1 = new SocialPerson('asda@naver.com','홍길동','1234');
person1.show();
*/
//커뮤니티 생성
//생선된 커뮤니티에 회원 2명 가입
//커뮤니티 내용 출력(회원목록 포함) 출력
var Community = require("./community").constructor;
var SocialPerson = require('./SocialPerson').constructor;

var person1 = new SocialPerson('asda@naver.com','홍길동','1234');
var community = new Community('홍길동', '축구', person1);
var person2 = new SocialPerson('ad@asd.com', '김길동', '1234');
var person3 = new SocialPerson('ad2@asd.com', '박길동', '1234');
community.addMember(person2);
community.addMember(person3);
console.log(community.getDesc());
community.show();

//커뮤니티에서 회원 탈퇴
//커뮤니티 내용 출력
//회원수 출력 
community.removeMember(person2.getId());
community.show();
console.log(community.getMemberCount());




