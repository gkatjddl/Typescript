

let 문자열 :string = "str";
let _숫자 : number =  32;

// 복잡한 타입에 대해서는 명시
let 문자열과숫자 : (string | number) = 'str';
문자열과숫자 = 123;

let 배열 = [1,2,3]; // number[]
// fetch데이터를 받아온다. [] : 비어있음 => [data,data]: 문자열 또는 숫자
let fetch배열 : (undefined|string|number)[] = [1,'2','3'];

function 데이터사용(x : (undefined|string|number)[]) : number
{
  if(typeof x[0] === 'string')
  {
    return Number(x[0] + 1);
  }
  else if(typeof x === 'number')
  {
    return x[0] + 1;
  }
  else{
    return 1;
  }
}

데이터사용(fetch배열)

function 리턴없음(num? : number) : void
{
  if(num){
    console.log(num)
  }
  else{
    console.log('없음')
  }
}

리턴없음(3);
리턴없음();