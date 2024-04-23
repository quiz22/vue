<template>
<div class="demo">{{title}}</div>  
<div class="demo">{{obj.title}}</div>
<input type="text" name="" id="" v-model="username">
<div>{{username}}</div>
</template>

<script setup>
import {reactive,ref,toRef} from 'vue';  
  const arr = ["湖南","长沙"];  
  let obj = reactive({  
    title:''
  });  
  let {title} = toRef(obj);  
  console.log({title});
  let username = ref('admin');
  
  let pos = 0;  
  let tm = setInterval(()=>{  
    obj.title = arr[pos];  
    
    pos++;  
    if(pos >= arr.length)  
      clearInterval(tm);  
  },500);
</script>

<style>
    .demo{
        font-size: 24px;
        font-weight: bolder;
    }
</style>