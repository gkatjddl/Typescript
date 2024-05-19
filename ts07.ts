// 변수의 대입될 수 있는 값을 미리 정해놓는다
// Literal Types
namespace Ts07
{
  let 변수 : '홍길동'|'김유신'|'이순신';
  변수 = '홍길동'
}

// console.log(Ts07.변수);

function 가위바위보(str : '가위' | '바위0' | '보' )
{

}

가위바위보('가위')

function 참거짓(num : 1|0) : (1|0)
{
  return 1;
}