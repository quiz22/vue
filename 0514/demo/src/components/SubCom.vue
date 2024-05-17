<template>
    <div>
        <p> count 的值为：{{ count }}</p>
        <button @click="add"> 加 n</button>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    const count = ref(1);
    const emit = defineEmits(['updateCount']);
    const add = ()=>{
        count.value ++;
        emit('updateCount', count.value);
    };
</script>

<style scoped>

</style>