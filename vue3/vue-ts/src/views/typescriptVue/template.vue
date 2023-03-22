<template>
<div >
    <h1>template</h1>
    <MyModal></MyModal>
    <button @click="openModal">show</button>
</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MyModal from './myModal.vue'

const modal = ref<InstanceType<typeof MyModal> | null>(null)
const openModal = () => {

    modal.value?.open()
}
</script>

<style   scoped>
</style>