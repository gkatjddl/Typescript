// ... 파라미터 (무한히 들어올 수 있는 매개변수)
console.log(1,2,3,4,5,6);

// rest parameter(...) :몇개가 들어올지 정확히 모를 때 무한히 받음
function 함수8(...variable : (number | string)[])
{
  console.log(variable)
}

함수8(1);
함수8(1,2,3,4,"a",'b');

//
let arr1 = [1,2,3]
let arr2 = ['a','b','c']


let arr3 : (string | number)[] = {...arr1, ...arr2};
console.log(arr3);

let [변수명1,변수명2] : [string , number] = ['hello', 300];
let arr08 : (string | number)[] = ['hello', 300];
let{id,data} : {id : string, data : number} = {id:'1',data : 30};
let props : {id: string} 