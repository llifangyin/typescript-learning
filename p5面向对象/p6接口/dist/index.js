"use strict";
(function () {
    // // abstract 代表抽象类 不能用来创建对象 专门用来继承的类
    // // 抽象类可以添加抽象方法
    // abstract class Animal{
    //     name:string
    //     age:number
    //     constructor(name:string,age:number) {
    //         this.name = name
    //         this.age = age
    //     }
    //     bark() {
    //         console.log(this.name,'叫');
    //     }
    //     //抽象方法只能定义在抽象类中 子类必须对抽象方法重写
    //     abstract sayHello():void;
    // }
    // class dog extends Animal {
    //     sex:string;
    //     constructor(name:string,age:number,sex:string){
    //         super(name,age) //调用父类的构造函数
    //         this.sex = sex
    //     }
    //     // 子类写构造函数 必须对父类的构造函数调用
    //     bark() {
    //         super.bark()
    //         // console.log('testestest');
    // type myType={
    // }
    const obj = {
        name: 'test',
        age: 12
    };
    const obj1 = {
        name: 'test',
        age: 12,
        sex: 'male'
    };
    // 可以用一个类实现一个接口
    // implements 实现接口是使类满足一个接口的要求
    class myclass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            throw new Error("Method not implemented.");
        }
    }
    // 类继承 extends 
    // 接口实现 implements
})();
