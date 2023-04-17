<template>
<div >
    <h1>emit</h1>
    <emitSub :book="book" @change="change"></emitSub>
</div>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import  emitSub from './emitSub.vue'
import type {Ref} from 'vue'
// ref会根据初始化时的值推导其类型

const foo = ref('foo string')// string
// foo.value = 200 
// error:type number is not assignable to type string

// 用Ref指定一个更复杂的类型
const year:Ref<string|number>=ref('year string')
year.value = 200//yes

// 或者一个泛型参数，覆盖推导行为
const str = ref<string|number>('2020')
str.value = 200
// str.value = true //error

// 指定一个一个泛型，没有给初始值，得到的是一个包含undefined的联合类型
const n = ref<number>() // Ref<number|undefined>



const bar = ref(0)
const book = ref({
title:'javascript指南',
author:'zhangsan'
})
function change(params: any){
    console.log(params,111);
    
}
</script>

<style   scoped>
</style>