<template>
    <div>
        <p>父组件当前的数据值为：{{sum}}</p>
        <SubCom @update-count="updateEmitCount" />
    </div>
</template>

<script setup>
    import SubCom from './SubCom.vue';
    import {ref} from 'vue';
    const sum = ref(1);
    const updateEmitCount = v =>{
        sum.value += v;
    };
</script>

<style scoped>

</style>