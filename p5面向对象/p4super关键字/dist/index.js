"use strict";
(function () {
    // super 代表父类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log(this.name, '叫');
        }
    }
    class dog extends Animal {
        constructor(name, age, sex) {
            super(name, age); //调用父类的构造函数
            this.sex = sex;
        }
        // 子类写构造函数 必须对父类的构造函数调用
        bark() {
            super.bark();
            // console.log('testestest');
        }
    }
    const dog1 = new dog('test', 22, 'mail');
    dog1.bark();
})();
