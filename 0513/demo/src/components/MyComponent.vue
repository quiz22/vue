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
        count: {
            validator(value){
                if(value <= 10){
                    return true;
                }else{
                    alert("数据超出范围！");
                    return false;
                }
            }
        }
    })
</script>

<style scoped>


</style>