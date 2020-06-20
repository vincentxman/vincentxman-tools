"use strict";
var C = /** @class */ (function () {
    function C() {
        this.vvvv = "ClsC";
        this.vvvv2 = "private";
    }
    C.sss = "staticC";
    return C;
}());
(function (C) {
    C.x = 5;
})(C || (C = {}));
// let y = C.x; // OK
// console.log(y);
console.log(C);
var aaa = new C();
console.log(aaa);
