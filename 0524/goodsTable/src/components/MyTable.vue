<template>
  <table class="table table-striped table-bordered">
 <!-- 表格标题区域 -->
 <thead>
 <tr>
 <th scope="col">#</th>
 <th scope="col">商品名称</th>
 <th scope="col">价格</th>
 <th scope="col">标签</th>

 <th scope="col">操作</th>
 </tr>
 </thead>
 <!-- 表格主体区域 -->
 <tbody></tbody>
 </table>
</template>

<script setup>
const props = defineProps({
 goodsList: {
 type: Array,
 required: true,
 default: []
 }
 })
</script>

<style scoped>

</style>