<template>
    <div class="home-container">
        <!-- 头部区域 -->
        <MyHeader></MyHeader>
        <!-- 主体区域 -->
        <div class="home-main-box">
            <!-- 左侧边栏区域 -->
            <MyAside></MyAside>
            <!-- 右侧内容主体区域 -->
            <div class="home-main-body">
                <!-- 路由的视图 -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import MyAside from './subComponents/MyAside.vue'
import MyHeader from './subComponents/MyHeader.vue';


</script>

<style lang="less">
.home-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .home-main-box {
        height: 100%;
        display: flex;

        .home-main-body {
            padding: 15px;
            flex: 1;
        }
    }
}</style>