<template>
  <ToDaoHeader @addTodo="addTodo" />
  <ToDoMain :list="list" />
  <ToDoFooter />
  
  
</template>

<script setup>
import ToDaoHeader from './components/ToDaoHeader.vue';
import ToDoMain from './components/ToDoMain.vue';
import ToDoFooter from './components/ToDoFooter.vue';

import {ref} from 'vue'
const list = ref([
{ id: 1, name: '晨练', done: false, },
{ id: 2, name: '练书法', done: true, },
])
const addTodo = name => { 
  list.value.push({ name, done: false, id: ~~(Math.random() * 1000) })
}
</script>

<style scoped>

</style>
