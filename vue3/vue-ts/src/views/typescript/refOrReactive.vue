2<template>
<div >
    <h1>ref  reactive</h1>
    {{ ani }}

    {{ double }}
    {{ trible }}

    <div>
        <input type="text" @input="inputChange" @change="handleChange">
    </div>
</div>
</template>

<script lang="ts" setup>
import {computed, reactive, ref} from "vue"
import type {Ref} from 'vue'
// ref

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



// reactive
// reactive()会隐式的从它的参数中推导类型
const book = reactive({title:'vue3'})//string
// book.title = 200 //error

// 显示标注一个reactive变量的类型，可以使用接口
interface animal{
    title:string
    year?:number
}
const ani:animal = reactive({title:'vue3'})
// 不推荐reactive使用泛型参数 处理了深层次ref解包的返回值与泛型参数的类型不同


// computed 标注类型会自动从计算函数的返回值上推导出类型
const count =ref(1)
const double = computed(()=> count.value * 2)
// const result = double.value.split('')//error

// 通过泛型参数显示指定类型
const trible = computed<number|string>(()=>count.value * 3 + 'test')

// 为事件处理函数标注类型
function handleChange(event){
    // 隐式的标注event为any类型,如果tsconfig strict为true会报一个ts错误

    console.log(event,event.target.value);
    
}

function inputChange(event:Event){
    // console.log(event.target.value); error不存在value属性
    
    // console.log(event.target as HTMLInputElement);
    // console.log((event.target as HTMLInputElement).value);
    
}

</script>

<style   scoped>
</style>