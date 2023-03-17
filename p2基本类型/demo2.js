var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
// 变量声明
// 常量声明   
var d;
// console.log(d);
// d =11
var e;
e = false;
console.log(e);
// any
// 相当于关闭的ts的类型检测 可以互相赋值 污染其他类型
var f;
f = 10;
f = 'string';
var g; //隐式any
//  unknown
var e1;
e1 = 10;
e1 = true;
var s;
s = f; //any
// any可以赋值给其他类型
// s = e1  //不能将unknow类型分配给string 
// unknown 实际上是一个安全的any
// 用法 unknow > any
// 类型断言
// s = e1 as string;
s = e1;
// void  never
// void表示空 函数为例，没有返回值的函数 
function fn() {
    if (num > 0) {
        return true;
    }
    else {
        return 123;
    }
}
function f1() {
    // return undefined
}
// never永远不会有返回值
function f2() {
    throw new Error('suprise');
}
// Object
var obj;
obj = {};
obj = function () { };
// 主要限制属性，不限制对象类型
var b1;
// ?: 表示属性可选
b1 = { name: 'test' };
b1 = { name: 'ddd', d: 'dd', t: 10 };
// [xxx:string]:any  任意类型的属性
// let d:Function
var d2;
d2 = function (n1, n2) {
    return n1 + n2;
};
//函数类型声明 （形参：类型，...）=》
var d3;
d3 = function (n1, n2) {
    return n1 + n2;
};
// 数组 
// 字符串数组
var list = ['2', '33'];
var list1 = [3];
var list2;
list2 = [3, 4];
// tuple
// 元组 固定长度已知类型的数组
var h;
h = ['heelo', 'abc'];
// enum
// 枚举 
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var i;
i = { name: 'stet', gender: Gender.male };
console.log(i.gender === Gender.male);
// 属性连接 &
var j;
j = 0;
var k;
k = { name: 'test', age: 2 };
// 类型别名  type
var l;
var io;
// io=9
io = 3;
