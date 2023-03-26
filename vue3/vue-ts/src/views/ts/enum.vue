<template>
  <div>
    enum
  </div>
</template>

<script setup lang="ts">

// 定义一些有名字的数字常量

enum Direction {
  Up,
  Down,
  Left,
  Right
}
// 枚举成员具有一个数字值，当前枚举成员的值为上一个枚举成员的数值+1
// 第一个枚举如果没有初始化方法，初始值为0
// 枚举成员是哦那个常数枚举表达式初始化。常数枚举表达式是ts表达式的子集，它可以在编译阶段求知。
// 包括： 对象字面量、引用之前定义的枚举成员、带括号的常数枚举表达式、一元，二元运算符

console.log(Direction);

enum FileAccess{
  None, //0
  Read = 1<<1, //2
  Write =1<<2,  //4
  ReadWrite = Read | Write, // 6
  G = '1213'.length //4
}
console.log(FileAccess.G,FileAccess.Write,FileAccess[4]);


// 枚举是在运行时真实存在的一个对象。 这样可以从枚举值到枚举名进行反向反射
enum En1{
  A
}
let a = En1.A
console.log(a); //0
let nameOfA = En1[a] //A


// 编译结果
// var En1;
// (function(En1){
//   En1[En1['A']=0] = "A" 
// })(En1 || (En1={}))


// 外部枚举
// 外部枚举中，没有初始化时被当做需要经过计算的
// declare enum Enum{
//   A=1,
//   B,
//   C=2
// }


</script>

<style>

</style>