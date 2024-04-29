<script setup>
  import {ref,toRef,toRefs,reactive} from 'vue';
  const kings = reactive([
    {
      kname:'曹老板',
      ksex:'男',
      kcountry:'魏国',
      kage:58
    },
    {
      kname:'孙十万',
      ksex:'男',
      kcountry:'吴国',
      kage:45
    },
    {
      kname:'大耳贼',
      ksex:'男',
      kcountry:'蜀国',
      kage:50
    },
  ]);
  const names = {
    kname: '姓名',
    kcountry: '所属国',
    ksex: '性别',
    kage: '年龄'
  }
  const arr = ['姓名','所属国','性别','年龄'];
  import productList from './data/product.json';
</script>

<template>
  <ul v-for="(v,k) in kings">
    <li>
      <div>第{{k+1}}个人物的信息：</div>
      <ul>
        <li v-for="(vv,kk,ii) in v">{{arr[ii]}}：{{vv}}</li>  
      </ul>
    </li>
  </ul>
  <hr>
  <table>
    <thead>
      <tr>
        <th>序号</th>
        <th v-for="(v,k) in arr">{{v}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(v,k) in kings">
        <td>{{k+1}}</td>
        <td v-for="(vv,kk) in v">{{vv}}</td>
      </tr>
    </tbody>
  </table>
  <hr>
  <div>
    <div class="product" v-for="(v,k) in productList.data">
      <img :src="'./images/img10.jpg'" alt="v.product_title">
      <h5>{{v.product_name}}</h5>
      <h3 class="price">￥{{v.product_price}}</h3>
      <div class="intro">{{v.product_intro}}</div>
    </div>
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
.product{
  width: 28%;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px ;
}
.product > img:first-child{
  width: 90%;
  height: auto;
  border: 1px solid lightcyan;
  padding: 2px;
}
.product > h3.price{
  color: red;
  text-decoration: line-through;
  text-align: justify;
}
.product > div.intro{
  text-align: justify;
  text-indent: 2em;
}
</style>
