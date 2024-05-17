<template>
    <div>
        <h3>子组件</h3>
        <hr>
        <p>从爷爷组件接收到的资金：{{ money }}</p>
        <button @click="updateMoney(500)">单击增加资金</button>
    </div>
</template>

<script setup>
    import {ref, inject} from 'vue';
    let money = inject('money');
    let updateMoney = inject('updateMoney');
</script>

<style scoped>

</style>