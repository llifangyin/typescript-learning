<template>
<div v-if="isShow">
    <h1>mymodal</h1>
    <div >child</div>
</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isShow = ref(false)
const open = () => {
    isShow.value = true
}
defineExpose(
    {
        open
    }
)

</script>

<style   scoped>
</style>