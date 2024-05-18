// 1. 타입을 정해서 에러를 없애기
type dkanxms={
  num: (number | boolean)[],
  str: string,
  name: string | [string,string]
}


let 객체04 : dkanxms = {
  num : [100,102,104],
  str : "str", 
  name : "son"
}

객체04.num[4] = false;
객체04.name = ['lee', 객체04.str]

// 2. 타입 정하기
let 사람04 : string = '홍길동'
let 나이04 :(number | undefined) = undefined;     // 숫자도 가능해야함
let 성인04 : boolean = false;

나이04 = 33;

let 친구04 : (string | number | undefined | boolean)[] = [사람04, 나이04, 성인04];