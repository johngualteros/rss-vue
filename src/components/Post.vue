<script setup>
    import {useFeedStore} from "../stores/store";
    const store = useFeedStore();
</script>

<template>
    <div class="main">
        <h1 v-if="store.current.source">{{store.current.source.name}}</h1>
        <details v-for="post in store.current.items" :key="post.title">
            <summary>{{post.title}}</summary>
            <div v-html="post.content" id="content"></div>
        </details>
    </div>
</template>

<style scoped>
    .main{
        color: #fff;
        padding: 20px;
    }
    h1{
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 20px;
        color:#83ff8b;
    }
    details{
        font-size: 1em;
    }
    #content{
        padding: 20px;
        background-color: #141414;
        color: #fff;
        border-radius: 5px;
        margin-bottom: 20px;
        width:50%;
    }
    #content p a{
        color: #83ff8b;
    }
</style>