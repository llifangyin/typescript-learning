<template>
  <div>
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
// 传统js通过函数和基于原型的继承来创建可重用的组件

import { ShapeFlags } from '@vue/shared';

// ts中使用面向对象模式，继承类
class Greeter{
  greeting:string
  constructor(msg:string){
    this.greeting = msg
  }
  greet(){
    return 'hello '+  this.greeting
  }
}
let greeter = new Greeter('world')
let msg = greeter.greet()
// 继承

// 公共、私有、受保护的修饰符
// 成员默认public
// 当成员标记为private时，就不能再声明他的类外部访问,子类不行
// protected与private行为相似,但protected成员可在派生类中访问
// readonly修饰符，必须声明时初始化值或者构造函数里初始化值
class Animal{
  name:string;
  private sex:string
  protected height:number
  readonly position:string = 'land'
  readonly color:string
  constructor(theName:string,sex:string,height:number,color:string){
    this.name = theName
    this.sex = sex
    this.height = height
    this.color = color
  }
  move(disMeter:number=0){
    console.log('moved'+disMeter+'m');
  }
  getInfo(){
    console.log(this.name,this.sex,this.height);
    
  }
}
let teddy = new Animal('fuckSky','mail',50,'black-and-white')
// console.log(teddy.sex); error私有属性
teddy.getInfo() //protected private可以在本类中访问到


// 派生类包含一个构造函数 它必须调用super(),会执行基类的构造函数
// 在构造函数里访问this之前,一定要先调用super()
class Dog extends Animal {
  private speed:number
  protected action:string
  public constructor(name:string,sex:string,height:number,speed:number,action:string,color:string){
    super(name,sex,height,color)//执行父类的构造函数，参数要一致
    this.speed = speed
    this.action = action
  }
  // 重写父类方法
  public move(disMeter = 5){
    super.move(disMeter)
  }
  getInfo(){
    console.log(
      // sex私有属性 只能再Animal类中使用  height protect属性可以再派生类中使用
      this.name , this.sex , this.height, this.speed, this.action
    );
  }
}
let Husky = new Dog('ErHa','female',100,40,'Demolition','black-and-white')
// Husky.color = 'test' //error只读
// Husky.name //okay
// Husky.sex  //私有属性只能在animal类中访问
// Husky.height//受保护属性只能在animal类中访问
// Husky.speed //私有属性只能在dog类中访问
// Husky.action //受保护属性只能在dog类中访问

//  protected可以在派生类中访问到
Husky.getInfo()//sex是父类私有属性访问不到,自己类中的属性可以访问到

// Husky.move(23)


// 简洁写法：参数属性 只有private protected可以这样写在构造函数论参数里，相当于赋值
class Plant{
  // private name:string创建和初始化name，声明和赋值合到了一处
  constructor(private name:string,protected height:number,public color:string,readonly width:number){}
  getInfo(){
    console.log(this.name,this.height,this.color,this.width);
  }
}
let tree = new Plant('tree',20,'black',20)
tree.getInfo()


// 存取器 getter setter
// 来截取对象成员的访问

let passcode = '777'
class Employee {
  private _fullName:string ='default'
  get fullName():string{
    return this._fullName
  }
  set fullName(newName:string){
    if(passcode && passcode =='8888888'){
      this._fullName = newName
    }else{
      console.log('error');
    }
  }
}
let employee = new Employee()
employee.fullName = 'Bob'
console.log(employee.fullName);


// 静态属性
// 创建类的静态成员，这些属性仅存在类本身上面而不是类的实例上
class Grid{
  static origin = {x:0,y:0}
  calculateFn(point:{x:number,y:number}){
    let xDist = (point.x -Grid.origin.x)
    let yDist = (point.y -Grid.origin.y)
  
    return Math.sqrt(xDist*yDist + yDist*yDist) /this.scale
  }
  constructor(public scale:number){}
}
let grid1 = new Grid(1)
console.log(grid1.calculateFn({x:10,y:10}));
Grid.origin.x = 1
Grid.origin.y = 1
let grid2 = new Grid(5)
console.log(grid2.calculateFn({x:10,y:10}));


// 抽象类 abstract关键字
// 抽象类作为其他派生类的基类使用，它们一般不会直接被实例化。
abstract class AIcode {
  abstract fn():void
  move():void{
    console.log(111);
  }
}
// 抽象类中的抽象方法不包括具体实现，且必须在派生类中实现
// 抽象方法的语法与接口相似，两者都是定义（方法签名）但不包括方法体
// 然而 抽象方法必须包括abstract关键字,且可以包含访问修饰符
abstract class Department {
  constructor(public name:string) { }
  printName():void{
    console.log(this.name,'name');
  }
  abstract printMeeting():void; //必须在派生类中实现
}
class AccountDepartment extends Department{
  constructor(name:string){
    super(name)
  }
  printMeeting(): void {
      console.log('派生类实现抽象方法');
  }
  generateReport() {
    console.log('普通方法');
  }
}
let department:Department//允许创建一个对抽象类型的引用
// department = new Department() //错误不能创建一个抽象类的实例

department = new AccountDepartment('abstractClass')//对抽象子类实例化
department.printMeeting()
department.printName()
// department.generateReport() //error 该方法在抽象中不存在

// 高级技巧-构造函数  
// 类的实例类型
let greeter1:Greeter //确定类的实例类型是Greeter
greeter1 = new Greeter('world')
let msg1 = greeter1.greet()


class  SayHello{
  static msg = 'hello world'
  content!:string
  say(){
    if(this.content){
      console.log( this.content);
    }else{
       console.log(SayHello.msg);
    }
  }
}
let say1:SayHello
say1 = new SayHello()
say1.say()

console.log(typeof SayHello,'typeof class');

// 同一个类 拿到类的实例类型：赋值给新的类，修改静态属性，原来的类也会变化
let sayMaker:typeof SayHello = SayHello
sayMaker.msg = 'changed Hello world'

let say2:SayHello = new sayMaker()
say2.say()
say1.say()
console.log(sayMaker == SayHello); //true


// 把类当做接口使用
// 类定义会创建两个东西：类的示例类型 和 构造函数
// 因为有类型，所以能够再允许使用接口的地方使用类
class Point{
  x!:number
  y!:number
}

interface Point3d extends Point{
  z:number
}

let point3d:Point3d = {x:1,y:1,z:1}

</script>

<style>

</style>