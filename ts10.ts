// export / import
// 타입스크립트도 자바스크립트와 동일하게 export/import

//js10.js에서 만든 변수나 함수를 내보내고 싶으면 앞에 export
// 가져올 때는 import {변수명,함수명}from '파일명'
export let 글자변수 = 'variable'; 
export let num = 3;

export function 함수10() : number{
  return 10;
}

// 타입도 내보내기 가능
export type  newType = string|number|undefined;

namespace 중복방지_네임스페이스
{
  export type newType = string;
  // 변수명이나 함수명이 곂칠수 있으니까 쉴드
}

let 변수명10 : 중복방지_네임스페이스.newType = 'str';

namespace 삼성
{
  let 부품 = '반도체';
}
namespace SK
{
  let 부품 = '반도체';
}