<template>
    <ToDoHeader @addTodo="addTodo" />
    <ToDoMain :list="list" />
    <ToDoFooter />
</template>

<script setup>
import ToDoFooter from './components/ToDoFooter.vue';
import ToDoHeader from './components/ToDoHeader.vue';
import ToDoMain from './components/ToDoMain.vue';

import { ref } from 'vue'
const list = ref([
    { id: 1, name: '晨练', done: false, },
    { id: 2, name: '练书法', done: true, },
])

const addTodo = name => {
    list.value.push({ name, done: false, id: ~~(Math.random() * 1000) })
}
</script>
