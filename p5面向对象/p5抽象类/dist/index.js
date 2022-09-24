"use strict";
(function () {
    // abstract 代表抽象类 不能用来创建对象 专门用来继承的类
    // 抽象类可以添加抽象方法
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
    class cat extends Animal {
        sayHello() {
            console.log('mmm');
        }
    }
    const dog1 = new dog('test', 22, 'mail');
    dog1.bark();
    const cat1 = new cat('喵喵喵', 12);
    cat1.sayHello();
    // let Animal1 = new Animal('test',11)
})();
