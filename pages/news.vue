<template>
    <section class="news wrapper">
        <h1>Последние новости из сферы туризма</h1>
        <div class="news__content">
            <div class="news__main">
                <h3>Главные</h3>
                <TheNewsCard v-for="article in Array.from(articles.articles).filter(el => el.title !== '[Removed]')" :key="article"
                :title="article.title" :desc="article.description" :url="article.url"
                :image="article.urlToImage === null ? '/images/Global-News-APIs-800x420.jpg' : article.urlToImage" :date="article.publishedAt" />
            </div>
            <div class="news__newest">
                <h3>Последние</h3>
                <TheNewsCard v-for="article in Array.from(newestArticles.articles).filter(el => el.title !== '[Removed]')" :key="article"
                :title="article.title" :desc="article.description" :url="article.url"
                :image="article.urlToImage === null ? '/images/Global-News-APIs-800x420.jpg' : article.urlToImage" :date="article.publishedAt" />
            </div>
        </div>
    </section>
</template>

<script setup>

    const { data: articles } = await useFetch(() => 'https://newsapi.org/v2/top-headlines?country=us&apiKey=343ec09004b243529cc28f976c15f840')

    const newest = await useFetch(() => 'https://newsapi.org/v2/everything?q=everything&from=2023-12-20&to=2022-11-03&sortBy=publishedAt&apiKey=343ec09004b243529cc28f976c15f840')

    const newestArticles = newest.data.value;
</script>

<style lang="scss" scoped>
    .news {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3vh 0;

        h1 {
            color: $accent;
            font-size: 50px;
            text-shadow: -1px 1px 3px #000000;
        }

        &__content {
            display: flex;
            justify-content: space-between;
            padding: 7vh 0;
        }

        &__main,
        &__newest {
            width: 49%;
            display: flex;
            flex-direction: column;
            gap: 3vh;
        }
    }

</style>