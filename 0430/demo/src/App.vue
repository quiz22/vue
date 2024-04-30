<script setup>
import { ref,computed, watch } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
let show = msg =>{
  console.log(msg)
};
let message = ref('hellow world');
let revMessage = computed(()=>{
  return message.value.split('').reverse().join('')
});
let revMessage2 = ref(message.value.split('').reverse().join(''));
let updateMessage = ()=>{
  message.value = 'hello';
}
let money = ref(2000);
let bao = computed((v)=>{
  if(money.value>0)
    return money.value;
  else 
    return "超支!";
});

let isActive = ref(true);
let activeClass = ref('active');
let borderClass = ref('border');

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank" @click.prevent>
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <hr>
  <div @click="show('外层消息')">祖先元素
      <button @click="show('内层1的消息')">1</button>
      <button @click.right="show('内层2的消息')">2</button>
      <div @click.self="show('父元素的消息')">父元素
        <div @click="show('子元素的消息')">子元素</div>
      </div>
  </div>
  <hr>
  <div>
    <p>初始消息：<input type="text" v-model="message"></p>
    <p>有计算监听的反转消息后的消息：{{revMessage}}</p>
    <p>无监听的反转后的消息：{{revMessage}}</p>
    <button @click="updateMessage">反转</button>
  </div>
  <hr>
  <div>
    <p>钱包：{{bao}}</p>
    <p>
      <button @click="money -= 168 ">商品一（168元）</button>
      <button @click="money -= 298 ">商品二（298元）</button>
      <button @click="money -= 688 ">商品三（688元）</button>
    </p>
  </div>
  <hr>
  <div>
    <p :class="[activeClass,borderClass]"></p>
    <p :class="[isActive ? activeClass : borderClass]"></p>
    <p :class="[{activeClass : isActive},borderClass]"></p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.active{
  width: 200px;
  height: 20px;
  margin: 5px;
  background-color: lightcoral;
}
.border{
  height: 20px;
  margin: 5px;
  border: 2px solid black;
}
</style>
