"use strict";
// export / import
// 타입스크립트도 자바스크립트와 동일하게 export/import
Object.defineProperty(exports, "__esModule", { value: true });
exports.함수10 = exports.num = exports.글자변수 = void 0;
//js10.js에서 만든 변수나 함수를 내보내고 싶으면 앞에 export
// 가져올 때는 import {변수명,함수명}from '파일명'
exports.글자변수 = 'variable';
exports.num = 3;
function 함수10() {
    return 10;
}
exports.함수10 = 함수10;
var 변수명10 = 'str';
var 삼성;
(function (삼성) {
    var 부품 = '반도체';
})(삼성 || (삼성 = {}));
var SK;
(function (SK) {
    var 부품 = '반도체';
})(SK || (SK = {}));
