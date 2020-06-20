"use strict";
var Foo = /** @class */ (function () {
    function Foo(x) {
        this.x = x;
    }
    return Foo;
}());
var obj = new Foo(5);
obj.y = 20;
console.log(obj);
