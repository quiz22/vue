<script setup>
import ArcCom from './components/ArcCom.vue';

import {ref} from 'vue';
const countOpen = ref(386);
const countNice = ref(123);
const arcTitle = ref("　　　　中华人民共和国　　　　");

const vTitleLeft = {
  mounted: el=>{
    el.style.fontSize = '12px';
    el.style.float = 'left';
    el.style.fontWeight = 'normal';
    el.style.lineHeight = '21px';
  }
}

const vTitleRight = {
  mounted: el=>{
    el.style.fontSize = '12px';
    el.style.float = 'right';
    el.style.fontWeight = 'normal';
    el.style.lineHeight = '21px';
  }
}

const vTitleSide = {
  mounted: (el, bind)=>{
    el.style.fontSize = bind.value.size;
    el.style.float = bind.value.side;
    el.style.fontWeight = 'normal';
    console.log(bind);
  }
}

const contentFontSize = ref(12);
const vContentFontSize = (el, bind)=>{
  el.style.fontSize = bind.value + 'px';
}
</script>

<template>
  <div class="container">
    <div class="header">页面头部</div>
    <div class="content">
      <div class="con-left">左侧</div>
      <div class="con-right">
        <ArcCom>
          <template #footer>{{countOpen}}次浏览，{{countNice}}次点赞, <button @click="contentFontSize++">增大字体</button> <button @click="contentFontSize--">减小字体</button></template>
          <template #header = "{author, pubDate}">
            <span v-title-side="{side:'left', size:'14px'}">作者：{{ author }}</span><span>{{ arcTitle }}</span><span v-title-side="{side:'right', size:'12px'}">发表时间：{{ pubDate }}</span>
          </template>
          <template #content>
            <p v-content-font-size="contentFontSize">Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these</p>
            <p v-content-font-size="contentFontSize">Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these</p>
            <p v-content-font-size="contentFontSize">Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these</p>
          </template>
        </ArcCom>
      </div>
    </div>
    <div class="footer">页面尾部</div>
  </div>
</template>

<style scoped>
.container{
  width: 90%;
  height: auto;
  margin: 0 auto;
  text-align: center;
}
.header, .footer{
  background-color: lightcyan;
  margin: 3px;
  width: 100%;
  height: 100px;
}
.content{
  width: 100%;
  height: 500px;
  padding: 0 3px;
}

.footer{
  background-color: lightskyblue;
}
.con-left{
  float: left;
  width: 30%;
  height: 500px;
  background-color: wheat;
}
.con-right{
  float: left;
  width: 70%;
  height: 500px;
  background-color: bisque;
}

</style>
