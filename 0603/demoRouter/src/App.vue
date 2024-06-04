<template>
  <hr>
  <el-button @click="router.push('/button')">Button</el-button>
  <el-button @click="router.push('/table')">Table</el-button>
  <hr>
    <router-view></router-view>
</template>

<script setup>

import {useRouter} from 'vue-router';

const router = useRouter();



</script>

<style scoped>

</style>