"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log(this.name, '叫');
        }
    }
    // extends 继承 子类将有父所有的属性和方法
    class Dog extends Animal {
        // 在子类中 添加独有的属性&方法
        run() {
            console.log(`${this.name}在跑`);
        }
        // 子类和父类相同的方法 会覆盖继承的父类的方法 => 方法的重写
        bark() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal {
        bark() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('旺财', 11);
    dog.bark();
    dog.run();
    const cat = new Cat('喵星人', 33);
    cat.bark();
})();
