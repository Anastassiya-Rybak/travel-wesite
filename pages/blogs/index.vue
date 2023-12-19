<template>
    <section class="blogs-wrapper wrapper">
        <h1>ВСЕ ПОСТЫ НАШИХ ТУРИСТОВ</h1>
        <div class="blogs">
            <TheArticleCard class="blogs__card" v-for="(post, idx) in posts" :key="idx"
            :articleData="posts[idx]"/>
        </div>
    </section>
</template>

<script setup>
import JSON from '~/server/articles.json'

const posts = JSON.articles;
</script>

<style lang="scss" scoped>
    .blogs-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5vh;
    }

    .blogs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &__card {
            width: 24%;
        }
    }
</style>