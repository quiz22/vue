<template>
    <div class="global-component">
        <h5>全局组件</h5>
        <LocalComponent />
    </div>
</template>

<script setup>
    import LocalComponent   from './LocalComponent.vue';
</script>

<style scoped>
    .global-component{
        border: 1px dashed black;
        height: 50px;
        flex: 1;
        padding: 10px;
    }
</style>