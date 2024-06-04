<template>
    
    <el-table :data="tableData" :style="{ width: '100%' }" >
        <el-table-column prop="date" label="Date" width="120" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="address" label="Address" width="120" />
    </el-table>
    <hr>
    <h1>vant</h1>
    <hr>
    <van-grid>
        <van-grid-item icon="wap-home-o" text="首页"></van-grid-item>
        <van-grid-item icon="chat-o" text="聊天"></van-grid-item>
        <van-grid-item icon="phone-o" text="电话"></van-grid-item>
        <van-grid-item icon="user-o" text="我的"></van-grid-item>
    </van-grid>
    <van-grid :column-num="3" square :gutter="5">
        <var-grid-item icon="more-o" text="文字">
            <van-image src="/images/img100.jpg"></van-image>
        </var-grid-item>

    </van-grid>

</template>

<script setup>
    const tableData = [
    {
            date: '2020-02-02',
            name: '曹操',
            address: '洛阳'
        },
        {
            date: '2020-02-02',
            name: '孙权',
            address: '建邺'
        },
        {
            date: '2020-02-02',
            name: '刘备',
            address: '成都'
        },
    ]
</script>

<style scoped>

</style>