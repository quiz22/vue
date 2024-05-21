<template>
    <div>
        <h3>MyLeft组件</h3>
        <p>Count 的值是：{{ count }}</p>
        <button @click="count++"> +1 </button>
    </div>
</template>

<script setup>
    import {ref, onActivated, onDeactivated} from 'vue';

    const count = ref(0);

    onActivated (()=>{
        console.log('组件 MyLeft 被激活了！');
    });

    onDeactivated(()=>{
        console.log('组件 MyLeft 缓存中！')
    });
</script>

<style scoped>

</style>