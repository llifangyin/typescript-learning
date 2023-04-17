<template>
  <div>
    type compatibility
  </div>
</template>

<script setup lang="ts">

// 定义一些有名字的数字常量
// ts的类型兼容性是基于结构子类型的。是一种只是用其成员来描述类型的方式
interface Named{
  name:string
}
class Person{
  name!:string
}
let  p:Named;
p = new Person()

// 在JAVA C#中，会报错 ts不会
// ts结构化类型系统的基本规则：如果x要兼容y，那么y至少具有与x相同的属性
let x:Named
let y = {
  name:'test',location:'test22'
}
x=y //y中有name与x的：Named的name类型一直


// 比较两个函数
let fn1 = (a:number) => 0
let fn2 = (b:number,s:string) =>0
// fn1 = fn2 //error fn2的s属性在fn1中找不到
fn2 = fn1 //okay  fn1的每个参数都能在Fn2中找到

// 在js中，忽略额外的参数是常见的
// 类型系统 强调制源函数的返回值类型必须是目标函数返回值类型的子类型

// 函数参数双向协变
enum EventType{
  Mouse,Keyboard
}
interface Event{timestamp:number}
interface MouseEvent extends Event{x:number,y:number}
interface KeyEvent extends Event{keycode:number}

function listenEvent(evenType:EventType,handler:(n:Event)=> void){
  // 
}

// listenEvent(EventType.Mouse,(e:MouseEvent)=> {console.log(e.x,e.y)})
// listenEvent(EventType.Mouse,(e:Event)=>console.log(e.x,e.y))
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));
// listenEvent(EventType.Mouse, (e: number) => console.log(e));

// 可选参数 剩余参数
// 当一个函数有身故参数时，它被当做无限个可选参数
// exp: 常见的函数接受一个回调函数，
function invokeLater(args:any[],callback:(...args:any[])=> void){
  // console.log('invoked');
  callback(...args)
  
}
invokeLater([1,2,3],(x,y,z)=>console.log(x,y,z))
invokeLater([1,2],(x?,y?)=>console.log(x,y))

// 函数重载
// 对于有重载的函数，源函数的每个重载都要在目标函数上找到对应的函数签名
// 这确保了目标函数可以在所有源函数可以调用的地方调用

// 枚举
enum Status {Ready,Waiting}
enum Color { Red,Blue,Green}

let status = Status.Ready
// status = Color.Green  //error不同枚举间互不兼容

// 类
// 类与对象字面量和接口差不多 不同点在于：类有静态部分和实例部分的类型
// 比较时，只有实例的成员会比较，静态成员和构造函数不在比较范围内

class Animal{
  // 私有成员会影响兼容性判断,同样类型的类不行，子类赋值给父类是可以的
  // private color:string = 'we'
  static :string ='1'
  feet!:number
  constructor( name:string, numFeet:number){}
}
class Size{
  // private color:string = 'we'   //私有成员会比较
  static :string ='1'
  feet!:number
  constructor(numFeet:number){}
}
let a:Animal = new Animal('test',20)
let s:Size = new Size(10)
// let z:Size = new Animal('test',10)
// z =a
s = a  //静态成员和构造函数不在比较范围内  
a = s

// 泛型 类型参数只影响使用其作为类型部分的结果类型
interface Empty<T>{
}
let j:Empty<number> = {}
let k:Empty<string> = {}
j = k

interface NotEmpty<T>{
  data:T
}
let l:NotEmpty<number> = {
  data:12
}
let m:NotEmpty<string>={
  data:'test'
}
// l = m //error

// 高级主题 子类型与赋值
// ts中两种类型的兼容性：子类型与赋值
// 不同点：赋值扩展了子类型兼容，允许给any赋值或从any取值，和给数字赋值给枚举，给枚举赋值给数字

</script>

<style>

</style>