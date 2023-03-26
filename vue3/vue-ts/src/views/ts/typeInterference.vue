<template>
  <div>
    type interference(干扰)
  </div>
</template>

<script setup lang="ts">
// 类型推论 (类型在哪里如何被推断的)

// ts中没有明确指出类型的地方，类型推论帮助提供类型

//推断发生在初始化变量，设置额默认参数值和决定函数返回值时
let x = 3 

// 当候选类型不能使用的时候我们需要明确类型
// let zoo:Animal[] = [new Rhino(),new Elephant(),new Snake()]
// 如果没有找到最佳通用类型，类型推断的结果为联合数组类型 (Rhino | Elephant| Snake)[]

// 上下文类型
window.onmousedown = function(mouseEvent){
  console.log(mouseEvent.button); // 没报错
}



</script>

<style>

</style>