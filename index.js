// .ts : 타입스크립트 파일 
// .tsx : jsx용 타입스크립트 파일
// npm install -g typescript (nodejs가 먼저 설치되어있어야함)
// tsconfig.json 파일을 생성하고 아래와 같이 입력
/*
{
  "compilerOptions":{
    "target":"ES5",
    "module":"CommonJs"
  }
}

*/
// tsc -w 로 실행(.js 파일로 변환)
// index.ts -> index.js로 생성
// 자바스크립트에 type 검사를 강화한 버전 
var myName = "홍길동";
myName = '유관순';
//myName = 12;    // 자료형이 달라서 에러
// string, number, boolean, null, underfined, [], {}, bigint
var 이름 = '사과';
var 숫자 = 33;
var 숫자배열 = [1, 2, 3, 4];
var 문자열배열 = ['1', '2', '3'];
var 객체 = { 이름: '김유신', 나이: 33 };
var 오브젝트 = {
    _name: '이름',
    _age: 33,
    _adult: true
};
// title, btn
var title = document.getElementById('title');
var btn = document.getElementById('btn');
// 버튼을 누르면 title태그의 html내용을 '반갑습니다' 로 바꿔주자
// 1. 버튼 아이디를 찾아서 클릭이벤트를 넣어준다.
if (btn != null) {
    btn.addEventListener('click', function () {
        if (title != null) {
            title.innerHTML = "반갑습니다";
        }
    });
}
else {
    console.log('btn이 없습니다');
}
