// type을 저장 (type alias) 
type myNewType = string | number | undefined;

// 함수에 쓰이는 타입을 저장 (매개변수와 리턴의 타입)
// str이라는 문자열을 받아서 number타입으로 리턴하는 타입
type myFuncType = (str : string)=>number;

let 함수09 : myFuncType = (str)=>{
  return 10;
}

let num = 함수09("문자열");