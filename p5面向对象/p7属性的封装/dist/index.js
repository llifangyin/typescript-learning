"use strict";
(function () {
    class person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // setAge(age:number){
        //     if(age>0)
        //     this._age = age
        // }
        // getAge(){
        //     return this._age
        // }
        // ts中设置getter方法
        get name() {
            console.log('get name');
            return this._name;
        }
        set name(val) {
            console.log(' set name ');
            this._name = val;
        }
    }
    const per = new person('lfy', 23);
    // 属性在对象中设置 可以被任意修改 数据不安全
    // per._name = 'test'
    // per._age = -48 
    // per.setAge(18)
    // per.setAge(-18)
    // per.name = 'test'
    // console.log(per.getAge());
    // console.log(per.name);
    // 私有属性 继承的子类也无法访问
    // protected 能在当前类和子类中访问 修改
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(1);
    b.test();
    // 简易写法 语法糖
    class C {
        // 直接将属性定义在构造函数中 不用定义赋值
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 11);
    console.log(c);
})();
