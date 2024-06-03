<template>
    <div>
        此处播放电影 {{ id }}
    </div>
</template>

<script setup>
    const props = defineProps({
        id: String
    });
</script>

<style scoped>

</style>