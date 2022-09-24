var isdone = false;
var num1 = 6;
var username = 'hello';
var person = "my name is ".concat(username);
var list = [1, 2, 3];
var lsit2 = [1, 2, 3];
var c = 0;
c = 9;
function sum(a, b) {
    return a + b;
}
sum(1, 2);
sum(123, 456);
var x;
x = ['hello', 20];
console.log(x);
// x[3]  = 6;
// x[5]  = true
// x[4] = 'test3'
// console.log(x[5].toString());
// 枚举
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var d = Color.green;
console.log(d);
//  any
var nosure = 4;
nosure.ifItExists();
nosure.toFixed();
var prettySure = 4;
prettySure.toFixed();
var list1 = [12, true, 'false'];
list1[1] = 100;
