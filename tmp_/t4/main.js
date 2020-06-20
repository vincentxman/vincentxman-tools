"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age, stature, nationality) {
        if (name === void 0) { name = ''; }
        if (age === void 0) { age = 0; }
        if (stature === void 0) { stature = 0; }
        if (nationality === void 0) { nationality = ''; }
        this.nationality = nationality;
        this.stature = stature;
        this.name = name;
        this.age = age;
        Human.times += 1; // 静态类型属性，记录构造函数方法被调用的次数
    }
    Human.prototype.get_stature = function () {
        return this.stature;
    };
    Human.prototype.get_times = function () {
        console.log(Human.times);
    };
    Human.times = 0; // 静态属性
    return Human;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, stature, nationality, subject) {
        var _this = _super.call(this, name, age, stature, nationality) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.set_age = function (age) {
        this.age = age;
    };
    Teacher.prototype.get_subject = function () {
        return this.subject;
    };
    return Teacher;
}(Human));
var teacher = new Teacher('华', 93, 185, 'US', 'English');
console.log(teacher);
