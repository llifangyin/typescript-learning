<template>
  <div>
  
  </div>
</template>

<script setup lang="ts">
function f(flag:boolean){
  if(flag){
    var a = 10
  }
  return a
}
// var 作用域或函数作用域
// var 声明可以在包含它的函数，模块，命名空间或者全局作用域内部任意位置被访问
// console.log(f(true)); //10
// console.log(f(false));//undefined

for(var i =0;i<10;i++){
  setTimeout(() => {
    console.log(i);
  }, 100*i);
}
// 10


for(var i =0;i<10;i++){
  (function(i){
    setTimeout(() => {
      console.log(i);
    }, 100*i);
  })(i)
}

// let 块级作用域或者此法作用域，块之外无法访问

// 块级作用域的变量的领域给特点是，他们不能在被声明之前读或写。
// 虽然这些变量始终存在于他们的作用域中，但是直到声明他的代码之前的区域
// 都属于暂时性死区，
// a ++
// let a


</script>

<style>

</style>