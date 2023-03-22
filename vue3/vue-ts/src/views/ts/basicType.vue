<template>
  <div>
    isDone:boolean = {{ isDone }} <br>
    decLiteral:number = {{ decLiteral }} <br>
    hexLiteral:number = {{ hexLiteral }} <br>
    binaryLiteral:number = {{ binaryLiteral }}
    hobby:{{ hobby }} <br>
    sentence:{{ sentence }} <br>
   list: {{ list }} <br>
   arr: {{arr}} <br>
   Tuple:{{ tuple }} <br>
   enum: {{ c }} <br>
   enum: color[1] {{ d }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 1布尔值 
let isDone:boolean = false
// 2数字
// ts里的所有数字浮点数，支持十进制和16进制
// 会自动转位二进制
let decLiteral:number = 6
let hexLiteral:number = 0xf00d
let binaryLiteral:number = 0b1010
// 3字符串
let name:string = 'bob'
// 可以使用模板字符串嵌入表达式
let hobby:string = `${name}ctrl`
let sentence:string = 'hello'+name

// 4数组 
// 有两种方式可以定义数组
// 1、元素类型加上[]
let list:number[] = [1,2,3]
// 2、使用数组泛型 Array<类型>
let arr:Array<string>=['a','b','3']
let arr2:number[] = [1,4,5]
let arr3:Array<number> = [3,4,5]

// 5元组 Tuple类型允许一个已知元素数量和类型的数组，各元素的类型不必相同
let tuple:[string,number]
tuple=['hello',123]
// 当访问一个越界的元素，会使用联合类型替代 没生效
// tuple[3] = 'world'
// tuple[4] = true 


// 6枚举，可以为一组数值赋予友好的名字
enum Color{Red,Green,Blur} 
// 默认从0开始为元素编号，数值和值对应
let c:Color = Color.Green
let d:string = Color[1]

// 7 any 为不清楚类型的变量指定一个类型，不希望类型检查器检查直接通过编译阶段的检查
let notSure:any=4
notSure = 'string'
// notSure.toFixed() //any类型调任意的方法
notSure.toString()

let prettySure:Object = 4
// prettySure.toFixed() //error 不可调用方法
let list1:any[] =[1,2,'test']
list1[1]=true

// 8空值 void
// void类型与any相反 没有任何类型，当一个函数没有返回值时，返回类型时void

function fn():void{
  console.log(111);
}
fn()
// error 
// function fn2():void{ 
//   return 2
// }
// 声明一个void变量没有意义，只能定义以下类型
let unusable:void = undefined
// let unusable1:void = null  不可

// 9 Never
// never类型表示永远不存在的值的类型，变量也可能时never类型，当他们被永不为真的类型保护所约束时

// 以下是返回never类型的函数

// 返回never的函数必须存在无法到达的重点
function error(message:string):never{
  throw new Error(message)
}

// 推断的返回值类型是never
function fail(){
  return error('somefaild')
}

// 返回never的函数必须无法达到的终点
function infiniteLoop():never{
  while(true){

  }
}


// 10 类型断言
// 好比类型转换不进行特殊的数据检查和解构
// 写法一
let a:any = 'this is a string'
let strl:number = (<string>a).length
  
// 写法二 jsx中只允许as语法断言
let b:any = 'test'
let bl:number = (b as string).length
console.log(bl,strl,'length');


</script>

<style>

</style>