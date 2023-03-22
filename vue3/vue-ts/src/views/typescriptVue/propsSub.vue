<template>
  <div >
    <!-- <h2>{{ foo }}</h2>
    <h2>{{ bar }}</h2> -->
    <!-- <h2>{{ msg }}</h2>
    <h2>{{ labels }}</h2> -->
    <h2>{{ book }}</h2>
  </div>
</template>

<script lang="ts" setup>
import type {PropType} from "vue"

// defineProps()宏函数支持从它的参数中推导类型
// const props = defineProps({
//   foo:{
//     type:String,required:true
//   },
//   bar:Number
// })

// 这被称为运行时声明，因为传递给defineProps的参数会被作为运行时的props选项使用

// 然而通过泛型参数来定义props的类型通常更直接
// const props = defineProps<{
//   foo:string
//   bar?:number
// }>()
// 这被称为之为基于类型的声明。

// 也可以将props的类型移入一个单独的接口中
// interface Props{
//   foo:string
//   bar?:number
// }

// const ps = defineProps<Props>()

// 语法限制
// defineProps的泛型参数必须是以下之一
// 类型字面量
// defineProps<{   }>
// 对同一个文件中的接口或者对象字面量的引用
// interface Props{ }
// defineProps<props>()

// interface或对象字面量可以导入使用，但是泛型参数不可以
// 不支持以下
// import {props} from './other'
// defineProps<props>()


// Props解构默认值
// 当使用基于类型的声明时，失去了为props默认值的能力，可以用withDefault编译器宏解决

// export interface Props{
//   msg?:string
//   foo?:string
//   bar?:number
//   labels?:string[]
// }
// const props = withDefaults(defineProps<Props>(),{
//   msg:'hello',
//   labels:()=> ['one','two']
// })



// 复杂的prop 一个props可以像使用其他类型一样使用一个复杂类型
export interface Book{
  title:string
  author:string
}
// const props = defineProps<{book:Book}>()

// 对于运行时声明，可以用propTYpe工具类型
const props = defineProps({
  book:Object as PropType<Book>
})
</script>

<style   scoped>
</style>