<template>
    <div class="article-container">
        <div class="article-header">
            <slot name="header" :author="writer" :pubDate="wrDate"></slot>
        </div>
        <div class="article-content">
            <slot name="content"></slot>
        </div>
        <div class="article-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    const writer = ref('曹操');
    const wrDate = ref((new Date()).toLocaleString())
</script>

<style scoped>
    .article-container{
        border: 1px solid black;
        border-radius: 8px;
        box-shadow: 4px 4px 6px black;
        font-size: 12px;
    }
    .article-header{
        background-color: lightpink;
        padding: 10px;
        border-radius: 8px 8px 0 0;
        font-size: 16px;
        font-weight: bolder;
    }
    .article-content{
        padding: 0 10px;
        padding: 0 1rem;
        text-indent: 2rem;
        text-align: justify;
    }

    .article-content > p{
        padding: 0 1rem;
        text-indent: 2rem;
        text-align: justify;
    }
    .article-footer{
        background-color: lightslategray;
        padding: 10px;
        border-radius: 0 0 8px 8px;
        color: white;
    }
</style>