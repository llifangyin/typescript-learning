<template>
  <div>
  
  </div>
</template>
<script setup lang="ts">
// generic 泛型

// C和java中可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据

function identity(arg:number):number{
  return arg
}
// 或者使用any 但是保证不了传入到了类型与返回的类型是相同的
function id(arg:any):any{
  return arg
}


// 泛型函数
// 使用一种类型变量。只用于表示类型而不是值
// 添加类型变量T,T帮助捕获用户传入的类型，再使用作为返回值类型
// 这个版本的函数叫做泛型
function identityCard<T>(arg:T):T{
 return arg
}
// 使用方法一 <type>(value)
let output = identityCard<string>('myString')
console.log(output);
// 使用方法二 类型推论便器自动识别
let  output2 = identityCard('yourstring')
console.log(output2);


// 使用泛型变量
function idcard<T>(arg:T):T{
  // arg为泛型变量 ，应把参数当做任意或所有类型
  // console.log(arg.length); //error
  return arg
}
// 制定T类型的数组
function idArr<T>(arg:T[]):T[]{
  // console.log(arg.length); //ok
  return arg
}

// 泛型类型  <T>类型参数
function genericType<T>(arg:T):T{
  return arg
}
let myGT:<T>(arg:T) => T = genericType;
// 使用其他的类型参数名
let gT:<U>(arg:U) => U = genericType;
console.log(myGT);

// 还可以使用带有签名的对象字面量来定义泛型函数
let idLiteral:{<T>(arg:T):T} = genericType


// 写一个泛型接口
interface GenericIdFn{
  <T>(arg:T):T //对象字面量
}
function idFn<T>(arg:T):T{
  return arg
}
let gId:GenericIdFn = idFn


// 把泛型参数作为接口的一个参数，这样可以知道用的是哪个泛型类型
interface GIdFn<T>{
  (arg:T):T
}
function idFunc<T>(arg:T):T{
  return arg
}

let mygid:GIdFn<number> = idFunc


  // 泛型类 跟泛型接口类似
class GenericNumber<T>{
  zeroValue!:T;
  add!: (x: T, y: T) => T;
}
let gnFn = new GenericNumber<number>()
gnFn.zeroValue = 0
gnFn.add = (x,y)=> x+y
// 类有静态部分和实例部分 泛型类指的是实力部分的类型，静态不能使用

// 泛型约束
// 定义一个接口描述约束条件， 创建一个.length属性的接口,使用extendsan实现约束
interface lengthWise{
  length:number
}
function loggingId<T extends lengthWise>(arg:T):T{
  console.log(arg.length);
  return arg
}

// 泛型函数定义了约束，不在适用于任意类型
// loggingId(3)  //error

// 在泛型约束中使用类型参数
// 声明一个类型参数，且它被另一个类型参数所约束
function getProperty<T ,K extends keyof T>(obj:T,key:K){
  return obj[key]
}
let x = {
  a:1,b:2,c:3,d:4
}

getProperty(x,'a') //ok
// getProperty(x,'e') //error

// 在泛型里使用类类型
// 在ts里使用泛型创建工厂函数时，需要引用构造函数的类类型
// 没看懂？？
function create<T>(c:{new():T}):T{ 
  return new c() //T 构造函数的类类型
}

// 示例：使用原型属性推断并约束构造函数与类示例的关系

class BeeKeeper{
  hasMask!:boolean
}
class ZooKeeper{
  nameTag!:string
}
class Animal{
  numLegs!:number
}
class Bee extends Animal{
  keeper!:BeeKeeper
}

class Lion extends Animal{
  keeper!:ZooKeeper
}

function createInstance<A extends Animal>(c:new() => A):A{
  return new c()
}


let k1 =  createInstance(Lion)

let k2 = createInstance(Bee)

// console.log(k1.keeper.nameTag);
// console.log(k2.keeper.hasMask);





</script>

<style>

</style>