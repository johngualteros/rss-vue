<script setup>
    import { useFeedStore } from "../stores/store";
    const store = useFeedStore();
    function handleClick(source) {
        store.loadSource(source);
    }
</script>
<template>
    <div class="sidebar">
        <div v-for="(source, index) in store.sources" :key="index">
            <a href="#" @click.prevent="()=>handleClick(source)">{{source.name}}</a>
        </div>
    </div>
</template>
<style scoped>
    .sidebar{
        background-color: transparent;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:20px 0;
    }
    a{
        text-decoration: none;
        color: #83ff8b;
        font-size: 1.3em;
        font-weight: bold;
        background-color: transparent;
        padding: 5px 10px;
        border: 1px solid #83ff8b;
        border-radius: 5px;
        cursor: pointer;
    }
</style>