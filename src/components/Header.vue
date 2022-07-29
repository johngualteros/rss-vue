<script setup>
    import {useFeedStore} from "../stores/store";
    import {ref} from "vue";
    const url = ref("");
    const store = useFeedStore();
    const handleSubmit=()=>{
        if(!!url.value){
            store.registerNewSource(url.value);
        }
    }
</script>
<template>
    <div class="header">
        <form action="" @submit.prevent="handleSubmit" class="box">
            <input type="url" required v-model="url">
            <button type="submit">Add Source</button>
        </form>
    </div>
</template>
<style scoped>
    .box{
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    input{
        padding:8px 20px;
        border:1px solid #83ff8b;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background: transparent;
        outline: none;
        color: #fff;
        font-size: 1em;
        font-weight: bold;
    }
    button{
        padding:8px 20px;
        border:1px solid #83ff8b;
        background-color: #83ff8b;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #121212;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
    }
</style>