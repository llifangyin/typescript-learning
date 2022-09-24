// 类 包含两部分 
// 方法 
class Person{
// 直接定义的是实例属性，需要通过对象的实例去访问
    name:String = 'test1';
// 属性 static 关键字 定义静态属性  类属性 直接通过类访问
    static  age:number=18;
// readonly只读属性无法修改
    readonly sex:string ='男';
    sayHello(){
        console.log('hello!');
        
    }
    static sayHello1(){
        console.log('hello1!');
        
    }
}

const per = new Person()
console.log(per);
console.log(per.name);
console.log(Person.age);
// per.sex ='mail'

per.sayHello()
Person.sayHello1()

