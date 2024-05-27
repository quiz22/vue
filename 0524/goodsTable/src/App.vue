<template>
  <h4>商品管理</h4>
  <MyTable :goodsList="goodsList">
    <template #header>
      <th scope="col">#</th>
      <th scope="col">商品名称</th>
      <th scope="col">价格</th>
      <th scope="col">标签</th>
      <th scope="col">操作</th>
    </template>
    <template #body="{ row, idx }">
      <td>{{ idx + 1 }}</td>
      <td>{{ row.goods_name }}</td>
      <td>￥{{ row.goods_price }}</td>
      <td>
        <input v-focus type="text" v-if="row.inputVisible" class="form-control form-control-sm ipt-tag"
          v-model="row.inputValue" @blur="onInputConfig(row)" @keyup.enter="onInputConfig(row)" @keyup.esc="row.inputValue=''"/>
        <button type="button" class="btn btn-outline-primary rounded-pill" v-else
          @click="row.inputVisible = true">+Tag</button>
        <span class="btn btn-outline-dark btn-sm" v-for="tag in row.tags" :key="tag">{{ tag }}</span>
      </td>
      <td>
        <button class="btn btn-outline-danger btn-sm" @click="onRemove(row.id)">删除</button>
      </td>
    </template>
  </MyTable>
</template>

<script setup>
import { ref } from 'vue'
import MyTable from './components/MyTable.vue';
const goodsList = ref([
  {
    id: 1,
    goods_name: '夏季专柜同款女鞋',
    goods_price: 298,
    tags: ['舒适', '透气'],
    inputVisible: false,
    inputValue: ''
  },
  {
    id: 2,
    goods_name: '冬季保暖女士休闲雪地靴 舒适加绒防水短靴 防滑棉鞋',
    goods_price: 89,
    tags: ['保暖', '防滑'],
    inputVisible: false,
    inputValue: ''
  },
  {
    id: 3,
    goods_name: '秋冬新款女士毛衣 套头宽松针织衫 简约上衣',
    goods_price: 199,
    tags: ['秋冬', '毛衣'],
    inputVisible: false,
    inputValue: ''
  },
  {
    id: 4,
    goods_name: '2023 春秋装新款大码女装 衬衫 上衣',
    goods_price: 19,
    tags: ['雪纺衫', '打底'],
    inputVisible: false,
    inputValue: ''
  },
  {

    id: 5,
    goods_name: '长款长袖圆领女士毛衣 2022 秋装新款假两件连衣裙',
    goods_price: 178,
    tags: ['圆领', '连衣裙'],
    inputVisible: false,
    inputValue: ''
  }
])

const onRemove = id => {
  goodsList.value = goodsList.value.filter(itm => itm.id != id);
}

const vFocus = el => {
  el.focus();
}

const onInputConfig = itm => {
  const val = itm.inputValue;
  itm.inputValue = '';
  itm.inputVisible = false;
  if (val && itm.tags.indexOf(val) == -1) itm.tags.push(val);
}
</script>

<style scoped>
.ipt-tag {
  width: 80px;
  display: inline;
}
</style>