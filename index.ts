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

let myName = "홍길동";
myName = '유관순';
//myName = 12;    // 자료형이 달라서 에러

// string, number, boolean, null, underfined, [], {}, bigint
let 이름 : string = '사과';
let 숫자 : number = 33;
let 숫자배열 : number[] = [1,2,3,4];
let 문자열배열 : string[] = ['1','2','3']
let 객체 : {이름:string,나이:number} = {이름:'김유신', 나이:33} 

let 오브젝트 : {_name:string , _age:number, _adult: boolean} = 
{
  _name:'이름',
  _age:33,
  _adult:true
}
