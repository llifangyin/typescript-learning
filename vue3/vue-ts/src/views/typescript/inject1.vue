<template>
<div >
    <h1>inject</h1>
</div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import type { InjectionKey } from 'vue';
// vue提供了 InjectionKey接口， 它是一个继承自Symbol得泛型类型
// const key = Symbol() as InjectionKey<string>
    
const foo = inject('key')
// console.log(foo,111);

// 提供一个默认值 bar
// const foo = inject<string>('foo','bar') 

// const foo = inject('foo') as string

console.log(foo);

</script>

<style   scoped>
</style>