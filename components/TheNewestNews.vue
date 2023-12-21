<template>
    <section class="news__newest">
        <h3>Последние</h3>
        <TheNewsCard class="news__item news-item_active" v-for="(article, idx) in Array.from(articles.articles).filter(el => el.title !== '[Removed]')" :key="idx"
        :title="article.title" :desc="article.description" :url="article.url"
        :image="article.urlToImage === null ? '/images/Global-News-APIs-800x420.jpg' : article.urlToImage" :date="article.publishedAt" />
    </section>
</template>

<script setup>
    const { data: articles } = await useFetch(() => 'https://newsapi.org/v2/everything?q=everything&from=2023-12-20&to=2022-11-03&sortBy=publishedAt&apiKey=343ec09004b243529cc28f976c15f840');

</script>

<style lang="scss" scoped>
    .news-item_active {
        transform: translateY(0px) scale(1);
        opacity: 1;
    }

</style>