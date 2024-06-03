<template>
    <div>
        <h1>首页</h1>
        <a href="#" @click.prevent="GotoMovie(2)">直接跳转到电影二</a>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const GotoMovie = mid =>{
        router.replace({name: 'MovieDetails', params: {id: mid}});
    }
</script>

<style scoped>

</style>