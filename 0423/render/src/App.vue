<script setup>
  import {reactive, ref} from 'vue';
  const type = ref('B')
  // 数组
  // const list = reactive(['曹老板','孙十万','大耳贼']);
  // 对象
  const list = reactive([
  {
    KName:'曹老板',
    KSex:'男',
    KCountry:'魏国',
    KAge:52
  },
  {
    KName:'孙十万',
    KSex:'男',
    KCountry:'吴国',
    KAge:45
  },
  {
    KName:'大耳贼',
    KSex:'男',
    KCountry:'蜀国',
    KAge:50
  },
  ]);
  const result = ref(80);
  const add = (ev)=>{
    result.value++;
    if(result.value>=85) type.value = 'A';
    else if(result.value >= 70) type.value ='B';
    else type = 'C';
  };
  const sub = (ev)=>{
    result.value --;
    if(result.value>=85) type.value = 'A';
    else if(result.value >= 70) type.value ='B';
    else type = 'C';
  };
</script>

<template>
  <h3>小明的学习成绩为{{result}}</h3>
  <h3>小明的学习评定等级为：</h3>
  <h1 v-if="type === 'A'">优秀</h1>
  <h1 v-else-if="type === 'B'">良好</h1>
  <h1 v-else>差</h1>
  <button @click="type='add'">加分</button>
  <button @click="type='sub'">减分</button>
  <hr>
  <!-- 数组写法 -->
  <!-- <p v-for="(item,index) in list">
    索引是：{{index}}，元素的内容是{{item}}
  </p> -->
  <!-- 对象写法 -->
  <ul v-for="(king,idx) in list">
    <li>第{{idx+1}}个君主信息</li>
    <ul>
      <!-- <li v-for="(v,h) in king">{{k}}:{{v}}</li> -->
      <li>姓名：{{king.KName}}</li>
      <li>所属国：{{king.KCountry}}</li>
      <li>性别:{{king.KSex}}</li>
     <li>年龄：{{king.KAge}}</li>
   </ul>
  </ul>

</template>

<style scoped>

</style>
