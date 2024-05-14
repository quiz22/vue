<template>
    <div>
        <h1>爷爷组件</h1>
        <hr>
        <ParentCom />
    </div>
</template>

<script setup>
import ParentCom from './ParentCom.vue';
import {ref,provide} from 'vue';
let money = ref(1000);
let updateMoney = v =>{
    money.value += v;
}
provide('money',money);
provide('updateMoney',updateMoney);
</script>

<style scoped>

</style>