var StringName = 'kim';
var ArrName = ['kim', 'park'];
var ObjName = { name: 'kim' };
// let UnionName: string | number = 123;
var UnionName = 123;
// x 파라미터로 number, return값으로 number
var hello = function (x) {
    return x * 2;
};
var john = [123, true];
var john2 = { name: 'kim' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
