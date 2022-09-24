"use strict";
// :参数类型 :返回值类型
function fn(a) {
    return a;
}
//any 会关闭ts的类型检查
function fn1(a) {
    return a;
}
// 泛型 <variable> 定义函数或类时 遇到类型不明确的 
function fn2(a) {
    return a;
}
fn2(10);
fn2('heelo'); //指定泛型
console.log(fn2('heelo'));
function fn3(a, b) {
    return a;
}
console.log(fn3(12, 'test'));
// 泛型的继承 T extends Inter  表示泛型必须时inter实现类
function fn4(a) {
    return a.length;
}
console.log(fn4('stringlength12212'));
class myClass {
    constructor(name) {
    }
}
// const mc = new myClass('test')
const mc = new myClass('test');
