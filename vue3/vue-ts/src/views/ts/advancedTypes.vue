<template>
  <div>
    advancedTypes 
  </div>
</template>

<script setup lang="ts">
// 交叉类型 Intersection Types   T&U
// 交叉类型是将多个类型合并为一个类型

// 大多是在混入mixins 或其他不适合典型面向对象模型的地方看到交叉类型的使用
function extend<T,U>(first:T,second:U){
  let result = <T & U>{}
  for (let id in first){
    (<any>result)[id] = (<any>first)[id]
  }

  
  for(let id in second){
    // 这里继承不到？？ log()
    if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id];
      }
  }
  return result
}

class Person{
  constructor(public name:string){}
}
interface Loggable{
  log(n:string):void
}
class ConsoleLogger implements Loggable{
  p:string = '12'
  log(n:string){
    console.log('consoleLogger',n)
  }
}

// console.log(new ConsoleLogger());

let jim = extend(new Person('jim'),new ConsoleLogger())
let n = jim.name
// console.log(jim);
// jim.log('test')

// 联合类型 UnionTypes
// 联合类型与交叉类型很有关联，但是使用上完全不同

function padLeft(value:string,padding:string | number){
}
// 如果一个值是联合类型，我们只能访问联合类型的所有类型共有的成员
interface Bird{
  fly():void
  layEggs():void
}
interface Fish{
  swim():void
  layEggs():void
}
// A function whose declared type is neither 'undefined',
//  'void', nor 'any' must return a value
function getSamePet():Fish | Bird {
}
let pet = getSamePet()
// pet.layEggs() //okay  调用共有成员可以
// pet.swim() //error

// 类型保护与区分类型
// 联合类型使用于值可以为不同类型的情况

// 添加类型断言
let pet1 = getSamePet();

// if ((<Fish>pet1).swim) {
//     (<Fish>pet).swim();
// }
// else {
//     (<Bird>pet1).fly();
// }


// 用于自定义的类型保护
// pet is Fish 是类型谓词， paramerName is Type

// function isFish(pet:Fish|Bird):pet is Fish{
//   return (<Fish>pet).swim !== undefined
// }

// if(isFish(pet1)){
//   pet1.swim() //ok
// }else{
//   pet1.fly()//ok
// }


// typeof 类型保护
// typeof类型保护只有两种形式被识别 v类型
// typeof v =='typename'
// typeof v !=='typename'

// instanceof 类型保护
// isntanceof 类型保护是通过构造函数细化类型的一种方式
// exp:字符串填充的例子
interface Padder{
  getPaddingString():string
}
class SpaceRepeatingPadder implements Padder{
  constructor(private numSpaces:number){}
  getPaddingString(): string {
      return Array(this.numSpaces + 1).join(" ")
  }
}

class StringPadder implements Padder{
  constructor(private value:string){}
  getPaddingString(): string {
      return this.value
  }
}

function getRandomPadder(){
  return Math.random() < .5 ?
  new SpaceRepeatingPadder(4):
  new StringPadder("  ")
}
// 类型推断为 SpaceRepeatingPadder | StringPadder
let padder:Padder = getRandomPadder()

if(padder instanceof SpaceRepeatingPadder){
  console.log(padder,'细化为SpaceRepeatingPadder类型');
  
}
if(padder instanceof StringPadder){
  console.log(padder,'类型细化为StringPadder类型');
}

// instanceof 右侧要求是一个构造函数 ts将细化为
// 1、此构造函数的prototype属性的类型，如果不为any
// 2、构造签名所返回的类型的联合








</script>

<style>

</style>