<template>
  <div>
  
  </div>
</template>

<script setup lang="ts">
// function f(flag:boolean){
//   if(flag){
//     var a = 10
//   }
//   return a
// }
// var 作用域或函数作用域
// var 声明可以在包含它的函数，模块，命名空间或者全局作用域内部任意位置被访问
// console.log(f(true)); //10
// console.log(f(false));//undefined

// for(var i =0;i<10;i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 100*i);
// }
// 10


// for(var i =0;i<10;i++){
//   (function(i){
//     setTimeout(() => {
//       console.log(i);
//     }, 100*i);
//   })(i)
// }
// 1 2 3 ...

// let 块级作用域或者此法作用域，块之外无法访问

// 块级作用域的变量的领域给特点是，他们不能在被声明之前读或写。
// 虽然这些变量(let const)始终存在于他们的作用域中，但是直到声明他的代码之前的区域
// 都属于暂时性死区，
// a ++
// let a
// function foo(){
//   return b
// }
// foo()
// let b:any;

// 暂时性死区 Temporal dead zone
// 当变量处于暂时性死区时，其尚未被初始化，尝试访问变量将抛出ReferenceError。
// 当代码执行到声明所在时，会被初始化一个值，未指定初始值会初始化为undefined
  // console.log(bar); //undefined
  // console.log(foo);//暂时性死区：ReferenceError: Cannot access 'foo' before initialization
  // console.log(tool); //ReferenceError: tool is not defined
  var bar = 1
  let foo = 2
  
// 使用术语Temporal，因为区域取决于执行顺序(时间)，而不是写代码的位置。


const func = () => {
  console.log(letVar);
}
// 这里是暂时性死区
// console.log(letVar);
let letVar = 3 
// 合法调用
// func()


// 暂时性死区与typeof

// console.log( i); //ReferenceError: Cannot access 'i' before initialization
// console.log(typeof i); //ReferenceError: Cannot access 'i' before initialization
// console.log( unlet); // ReferenceError: unlet is not defined
// console.log(typeof unlet); // undefined
let i = 10


// 暂时性死区与词法作用域
function test(){
  let foo = 33
  if(foo){
    // ReferenceError  
    let foo = foo +3 // foo + 3处理暂时性死区
  }
  
}
// test()
// var a = 1
var b = 2
if(true){
  var a = 11 //函数内作用域 
  let b = 22  //块级作用域
  // console.log(a,b);
}
// console.log(a,b);


// var 会将变量提升至块的顶部 
var x = 2
let  y =1
{
  {
    var z = 1 
  }
  let x = 1
  // var y =2  // alreay been decleared
}
// console.log(z);  //1






// 重定义与屏蔽
// var 可以重复声明  只会得到一个
var ddd = 10
var ddd = 12
// console.log(ddd);
let eee = 11
// let eee = 12//Identifier 'eee' has already been declared.
// console.log(eee);

// for(let i = 0;i<10;i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 100*i);
// }



// const
// 要求有初始值 定义对象数组可以修改参数，其他变量不可修改值

const obj = {a:1,b:2}
// obj = {a:2,b:3} //TypeError: Assignment to constant variable.
obj.a = 3
// cosnt变量的内部状态是可以修改的，他们引用的值是不可变的
// console.log(obj);



let [first] = [1,2,3,4,5]
let [f,...rest] = [1,2,3,4,5]
// console.log(first); // 1
// console.log(f,rest);

function keepObj(obj:{a:string,b?:number}){
  let {a,b=333} = obj //默认值333
  // console.log(a,b);
  
}
keepObj({
  a:'1'
})
keepObj({
  a:'1',
  b:2
})

// 指定默认值 设置格式
function fn3({a,b}={a:'111',b:22}):void{
  console.log(a,b);
}
fn3()

// ...展开对象 仅包括对象 自身的可枚举属性，会丢失对象方法

class C{
  p = 12
  m(){
    console.log(111);
  }
}

let c = new C()
let clone = {...c}
console.log(clone.m);//undefined

// ts不允许展开泛型函数上的类型参数

</script>

<style>

</style>