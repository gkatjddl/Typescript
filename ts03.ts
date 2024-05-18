// objsct 속성
type objType={
  [key:string]:number
}

let ovjVar : objType = {age:33, height:172.3};

// 클래스
class Myclass
{
  멤버변수 : string;

  constructor(매개변수 : string)
  {
    this.멤버변수 = 매개변수;
  }
}

// constructor : 생성자 (클래스를 객체화 하는 순간 발동되는 함수)
// let 객체1 = new Myclass(121312312)   //자료형 불일치
let 객체1 = new Myclass("str")
let 객체2 = new Myclass("str2")