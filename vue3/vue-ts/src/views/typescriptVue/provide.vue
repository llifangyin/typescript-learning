<template>
<div >
    <h1>provide</h1>
    <inject1></inject1>
</div>
</template>

<script lang="ts" setup>
import { provide,inject } from 'vue';
import type { InjectionKey } from 'vue';
import inject1 from './inject1.vue';
// vue提供了 InjectionKey接口， 它是一个继承自Symbol得泛型类型
// const key = Symbol() as InjectionKey<string>

provide('key','foo') //提供非string类型会报错


</script>

<style   scoped>
</style>