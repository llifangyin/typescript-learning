class Dog{
    name:string
    age:number
    constructor(name:string,age:number) {
        // 在构造函数中，当前对象就是当前新建的这个对象
        // 可以通过this向新建的对象中添加属性
        // console.log(this);
        this.name = name
        this.age = age
    }
    bark() {
        console.log(this);
        // this表示当前调用方法的对象
                
    }
}
const dog = new Dog('test1',11)
const dog2 = new Dog('test2',22)
// console.log(dog);
// console.log(dog2);
dog.bark()
