<script setup>
import { ref } from 'vue';

const header = ref("header");
const title = ref("title");
const slogan = ref("slogan");
</script>

<template>
    <header class="header">
        <h1 class="title">marvin</h1>
        <p class="slogan">FOR THOSE FOND OF FOOD</p>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
    width: fit-content;
}
.title {
    color: #87bba2;
    font-size: 3rem;
    text-align: center;
    padding: 0 1rem;
}
</style>