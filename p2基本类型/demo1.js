var isdone = false;
var num1 = 6;
var username = 'hello';
var person = "my name is ".concat(username);
var list = [1, 2, 3];
var list3 = ['a', '1'];
var lsit2 = [1, 2, 3];
var list2 = [1, '2t'];
var list4 = [22];
var c = 0;
c = 9;
function sum1(a, b) {
    return a + b;
}
sum1(1, 2);
sum1(123, 456);
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
// let prettySure:object = 4  //error  Property 'toFixed' does not exist on type 'object'.
// prettySure.toFixed()
var list1 = [12, true, 'false'];
list1[1] = 100;
// void
var userless = undefined;
console.log(userless);
// let userless2:void = null
// console.log(userless2);
// undefined 和 null
var u = undefined;
var n = null;
var n1 = null;
// n1 = true
console.log(u, n, n1);
// never
// 没看明白
// 类型断言
var someValue = 'this is a sting';
// let strlength:number = (<string>someValue).length
var strlength = someValue.length;
// let str2 = (num1 as string).length
