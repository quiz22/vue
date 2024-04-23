<script setup>
  import {reactive, ref} from 'vue';
  const type = ref('B')
  const list = reactive(['曹老板','孙十万','大耳贼']);
</script>

<template>
  <h1>小明的学习评定等级为：</h1>
  <P v-if="type === 'A'">优秀</P>
  <P v-else-if="type === 'B'">良好</P>
  <P v-else>差</P>
  <button @click="type='A'">优秀</button>
  <button @click="type='B'">良好</button>
  <button @click="type='C'">差</button>
  <hr>
  <p v-for="(item,index) in list">
    索引是：{{index}}，元素的内容是{{item}}
  </p>
</template>

<style scoped>

</style>
