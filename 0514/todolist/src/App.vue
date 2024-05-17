<template>
    <ToDoHeader @addTodo="addTodo" />
    <ToDoMain :list="list" @delTode="remove"/>
    <ToDoFooter :lastLength="NotFinished" :statup="status" @updateStatus="statusChanged"/>
</template>

<script setup>
import ToDoFooter from './components/ToDoFooter.vue';
import ToDoHeader from './components/ToDoHeader.vue';
import ToDoMain from './components/ToDoMain.vue';

import { ref,computed } from 'vue'
const list = ref([
    { id: 1, name: '晨练', done: false, },
    { id: 2, name: '练书法', done: true, },
])

const addTodo = name => {
    list.value.push({ name, done: false, id: ~~(Math.random() * 1000) })
}
const remove = id =>{
    list.value = list.value.filter(item=>this.id != id)
}
const NotFinished=computed(()=>list.value.filter(item => !item.done).length)
const status = ref('all');
const statusChanged = st =>{
    alert('你需要筛选出'+st);
    status.value = st;
}

const showList = computed(()=>{
       if(status.value == 'all'){
        return list.value;
       }else if(status.value =='active'){
        return list.value.filter(item => !item.done)
       }else if(status.value == 'completed'){
        return list.value.filter(item => item.done)
       }
});
</script>
