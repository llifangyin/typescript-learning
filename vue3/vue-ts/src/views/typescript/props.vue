<template>
  <div >
     <h1>props</h1>
     <props-sub :foo="foo" :bar = 'bar' :book="book"></props-sub>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import PropsSub from './propsSub.vue'
const foo = ref('foo string')
const bar = ref(0)
const book = ref({
  title:'javascript指南',
  author:'zhangsan'
})
</script>

<style   scoped>
</style>