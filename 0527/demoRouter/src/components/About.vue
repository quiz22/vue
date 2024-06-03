<template>
    <div>
        <h1>关于</h1>
        <hr>
        <router-link to="/about/tab1">Tab1</router-link>
        <router-link to="/about/tab2">Tab2</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>
    import {useRoute} from 'vue-router';
    import {watch} from 'vue';

    const route = useRoute();
    watch(()=>route.path, path=>{
        console.log('当前访问路径：'+ path);
    })
</script>

<style scoped>

</style>