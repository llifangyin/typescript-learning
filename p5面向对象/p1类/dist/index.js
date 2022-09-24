"use strict";
// 类 包含两部分 
// 方法 
class Person {
    constructor() {
        // 直接定义的是实例属性，需要通过对象的实例去访问
        this.name = 'test1';
        // readonly只读属性无法修改
        this.sex = '男';
    }
    sayHello() {
        console.log('hello!');
    }
    static sayHello1() {
        console.log('hello1!');
    }
}
// 属性 static 关键字 定义静态属性  类属性 直接通过类访问
Person.age = 18;
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.age);
// per.sex ='mail'
per.sayHello();
Person.sayHello1();
