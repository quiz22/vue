<template>
    <table class="table table-striped table-bordered">
        <!-- 表格标题区域 -->
        <thead>
            <tr>
                <slot name="header"></slot>
            </tr>
        </thead>
        <!-- 表格主体区域 -->
        <tbody>
            <tr v-for="(item,idx) in goodsList" :key="item.id">
                <slot name="body" :row="item" :idx="idx"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const props = defineProps({
    goodsList: {
        type: Array,
        required: true,
        default: []
    }
});
</script>

<style scoped></style>