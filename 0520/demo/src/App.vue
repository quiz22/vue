<template>
  <div>
    <button @click="showCom = MyLeft">显示MyLeft组件</button>
    <button @click="showCom = MyRight">显示MyRight组件</button>
    <KeepAlive>
        <component :is="showCom" >
          <template #c>刘备</template>
          <template #a>曹操</template>
          <template #b>孙权</template>
        </component>
    </KeepAlive>
  </div>
</template>

<script setup>
import MyLeft from './components/MyLeft.vue';
import MyRight from './components/MyRight.vue';
import {ref, shallowRef} from 'vue';

const showCom = shallowRef(MyLeft);
const content = ref('中华人民共和国');
</script>

<style scoped>

</style>