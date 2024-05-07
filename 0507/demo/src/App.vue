<!--选项式语法
 <script>
  export default{
    data(){
      return{
        number: 1
      }
    },
    methods:{
      addNum(){
        this.number ++;
      }
    }
  }
</script>
-->

<!-- 组合式的语法
<script setup>
  import {ref} from 'vue';
  let number = ref(1);
  let addNum = ()=> {number.value++}
</script>

<template>
  <div>数字:{{number}}</div>
  <button @click="addNum">+1</button>
</template>
-->

<!-- 组合式的生命周期
<script setup>
  import { onBeforeMount,onMounted } from 'vue';
  onBeforeMount(()=>{
    console.log('挂载前：',document.querySelector('.container'));
  });
  onMounted(()=>{
    console.log('挂载前：',document.querySelector('.container'));
  });
</script>

<template>
  <div class="container">container</div>
</template>
-->


<script setup>

</script>

<template>
  <h5>父组件</h5>
  <div class="box">
    <GlobalComponent />
  </div>
</template>

<style scoped>
  .box{
    display: flex;
  }
</style>
