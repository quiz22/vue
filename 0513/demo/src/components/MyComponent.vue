<template>
    <div>
        <h3>子组件</h3>
        <p>{{title}}</p>
        <p>{{count +1 }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        count: {required: true}
    })
</script>

<style scoped>


</style>