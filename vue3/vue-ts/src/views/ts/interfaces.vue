<template>
  <div>
  
  </div>
</template>

<script setup lang="ts">

// 接口的属性不全是必需的  ?:
interface config{
  color?:string;
  width?:number;
}


// 只读属性 readonly 
interface Point{
  readonly x: number;
  readonly y:number;
}
let p1:Point = {
  x:10,
  y:10
}
// p1.x = 5//error 
// console.log(p1);


// ReadonlyArray 只读数组
let a:number[] = [1,2,3,4,5]
let b:Array<number>=[1,2,3,4,5]
let ro:ReadonlyArray<number> = b
// ro[1] = 2 //error
// 可类型断言重写
let c = ro as number[]
c[3] =  40
// console.log(c);

// readonly与const  作为属性只读 作为变量只读


// 添加字符串索引签名 ： 可能有某些作为特殊用途使用的额外属性
interface SquareConfig{
  color?:number;
  width?:string;
  [propName:string]:any;//索引签名
}

// 函数类型
// 接口也可以描述函数类型
// interface xx{(参数):返回值}
interface SearchFunc {
  (source:string,subString:string):boolean;
}

let mySearch:SearchFunc;
mySearch = function(source:string,subString:string){
  let result = source.search(subString)
  return result > -1
}
// console.log(mySearch('testsetse','tes222t'));

// 可索引的类型 array
// 也可描述通过索引得到的类型 a[10] obj[prop]
interface StringArray{
  [index:number]:string
}

let myArray:StringArray
myArray = ['bob','john']
let myStr:string = myArray[0]

// 字符串和数字 两种索引签名
class Animal {
  name!:string;
}
class Dog extends Animal{
  breed!:string
}
// 数值索引类型 返回值Dog必须是字符串索引返回值类型的子类型？？为什么呀

// 错误：使用'string'索引，有时会得到Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

// ok
interface Test{
  [x:number]:Dog;
  [x:string]:Animal
}

// 字符串索引签名能很好的描述dictionary模式，会确保所有属性与其返回值类型相匹配
interface NumberDictionary{
  [index:string]:number; //所有类型返回值应是number
  length:number;
  // name:stirng //error
}


// 类类型
// 实现接口
// interface ClockInterface{
//   currentDate:Date
// }
// class  Clock implements ClockInterface{
//   currentDate!: Date;
//   constructor(h:number,m:number){
    
//   }
// }
// 再接口中描述方法，在类里实现
// interface ClockInterface{
//   currentTime:Date;
//   setTime(d:Date):any
// }
// class Clock implements ClockInterface{
//   currentTime!: Date;
//   setTime(d: Date) {
//       this.currentTime = d
//   }
//   constructor(h:number,m:number){
//   }
// }

// 类静态部分与实例部分的区别
// 类是有两个类型的：静态部分的类型 和实例的类型
// 类实现一个接口时，只会对实例部分进行类型检查。
// contructor属于类的静态部分，不在检查范围内
// 因此我们应该直接操作类的静态部分
interface ClockConstructor{
  new(hour:number,minute:number):ClockInterface
}
interface ClockInterface{
  tick():any
}
function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface{
  return new ctor(hour,minute)
}

class DigitalClock implements ClockInterface{
  constructor(h:number,m:number){}
  tick(){
    console.log('tick tock');
  }
}
// 没有理解？
let digital = createClock(DigitalClock,12,12)
// digital.tick()


// 继承接口
interface Shape{
  color:string
}
interface Square extends Shape{
  sideLength:number
}
let square = <Square>{}
square.color = 'blue'
// console.log(square);

// 一个接口可以继承多个接口
interface PenStroke{
  penWidth:number
}
interface Squ extends Shape,PenStroke{
  sideLength:number
}



// 混合类型 一个对象同时可以作为函数对象使用，并有额外的属性
interface Counter{
  (start:number):string;
  interval:number;
  reset():void
}
function getCounter():Counter{
  let counter = <Counter>function(start:number){}
  counter.interval  =1213
  counter.reset  =function(){}
  return counter
}
let c1 = getCounter()
c1(10)
c1.reset()
c1.interval = 65


// 接口继承类   没搞懂??
// 当接口继承一个类类型时,会继承类的成员,但不包括其实现
// 接口同样会继承到类的private和protecetd的成员
class Control {
  private state:any
}

interface SelectableControl extends Control{
  select():void
}
interface Button extends Control implements SelectableControl{
  select():any{}
}
// state is missgin in  type image
// class Image implements SelectableControl{
//   select(){}
// }

// let sc:SelectableControl ={
//   private state:'test'
//   select:()=>{}
// }
// console.log(sc);

</script>

<style>

</style>