(function(){
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
            
    //     }
    // }
    // class cat extends Animal{
    //     sayHello() {
    //         console.log('mmm');
    //     }
    // }
    // const dog1 = new dog('test',22,'mail')
    // dog1.bark()
    // const cat1 = new cat('喵喵喵',12)
    // cat1.sayHello()
    // // let Animal1 = new Animal('test',11)

    // 描述一个对象的类型  不可重复声明
    type myType = {
        age:number,
        name:string
    }
    // type myType={

    // }
    const obj:myType = {
        name:'test',
        age:12
    }

    //接口： 用来定义一个类的结构 用来定义一个类中应该包含那些属性和方法 
    // 也可以当成类型声明去使用 可重复声明   
    // 定义类的时候限制类的结构 类似抽象类
    interface myInterface{
        name:string,
        age:number
    }
    interface myInterface{
        sex:string
    }
    const obj1:myInterface = {
        name:'test',
        age:12,
        sex:'male'
    }
    // 所有的接口不能有实际的值，之定义对象的接口不能有实际值
    interface myInter {
        name:string
        sayHello():void,//void无参
    }
    // 可以用一个类实现一个接口
    // implements 实现接口是使类满足一个接口的要求
    class myclass implements myInter{
        name: string
        constructor(name:string){
            this.name = name
        }
        sayHello(): void {
            throw new Error("Method not implemented.")
        }
    }

    // 类继承 extends 
    // 接口实现 implements

    
})()


