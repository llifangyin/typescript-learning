<template>
  <div >
 
    <h2>{{ book }}</h2>
    <button @click="$emit('change')">change $emit</button>
    <button @click="change">change emit</button>
  </div>
</template>

<script lang="ts" setup>
import type {PropType} from "vue"

export interface Book{
  title:string
  author:string
}
// 对于运行时声明，可以用propTYpe工具类型
const props = defineProps({
  book:Object as PropType<Book>
})
// 运行时
// const emit = defineEmits(['change'])
// 基于类型
const emit = defineEmits<{
  (e:'change',id:number):void
}>()


function change(){
  emit('change',111)
}



</script>

<style   scoped>
</style>