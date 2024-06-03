<template>
    <div>
        <button @click="goBack">后退</button>
        <h3>用户 {{id}} 详情页面</h3>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const props = defineProps({
        id: String
    });

    const goBack = ()=>{
        router.back();
    }
</script>

<style lang="scss" scoped>

</style>