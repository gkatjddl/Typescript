var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ... 파라미터 (무한히 들어올 수 있는 매개변수)
console.log(1, 2, 3, 4, 5, 6);
// rest parameter(...) :몇개가 들어올지 정확히 모를 때 무한히 받음
function 함수8() {
    var variable = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        variable[_i] = arguments[_i];
    }
    console.log(variable);
}
함수8(1);
함수8(1, 2, 3, 4, "a", 'b');
//
var arr1 = [1, 2, 3];
var arr2 = ['a', 'b', 'c'];
var arr3 = __assign(__assign({}, arr1), arr2);
console.log(arr3);
var _a = ['hello', 300], 변수명1 = _a[0], 변수명2 = _a[1];
var arr08 = ['hello', 300];
var _b = { id: '1', data: 30 }, id = _b.id, data = _b.data;
var props;
