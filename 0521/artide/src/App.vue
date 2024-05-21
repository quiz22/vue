<script setup>
import ArcCom from './components/ArcCom.vue';
import {ref} from 'vue';
const countOpen = ref(386);
const countNice = ref(123);
const arcTitle = ref("幼专");
</script>

<template>
  <div class="container">
    <div class="header">页面头部</div>
    <div class="content">
      <div class="con-left">左侧</div>
      <div class="con-right">
        <ArcCom>
          <template #header = "{pubDate,author}">
            <span>作者:{{author}}</span>
            <span>{{arcTitle }}</span>
            <span>发表时间：{{pubDate}}</span>
          </template>
          <template #content>
            <p>6666</p>
          </template>
          <template #footer>{{countOpen}}次浏览,{{ countNice }}次点赞</template>
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
.header,.footer{
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

  width: 100%;
  height: 500px;
  padding-right: 3px;
  background-color: bisque;
}
</style>