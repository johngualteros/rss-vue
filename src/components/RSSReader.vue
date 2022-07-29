<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Post from './Post.vue'
</script>
<template>
    <div class="main-container">
        <Header class="header"/>
        <Sidebar/>
        <Post/>
    </div>
</template>
<style scoped>
    .main-container {
        width: 100%;
        height: auto;
        min-height: 100vh;
        background-color:#141414;
        display: grid;
        grid-template-columns: 20% 80%;
        grid-template-rows: 100px auto;
    }
    .header{
        grid-column: 1 / 3;
        border-bottom: 2px solid #83ff8b;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>