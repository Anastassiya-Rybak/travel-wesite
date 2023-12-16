<template>
    <div class="post wrapper">
        <section class="post__content">
            <article class="post__article">
                <header>
                    <h1>{{ articleData.title }}</h1>
                </header>
                <section class="post__data">
                    <h6 class="post__destination">{{ articleData.data.destination }}</h6>
                    <time class="post__published-at" :datetime="articleData.data.publishedAt">{{ articleData.data.publishedAt }}</time>
                    <address class="post__author">
                        <nuxt-link to="/profile">{{ articleData.author }}</nuxt-link>
                    </address>
                </section>
                <p class="post__description">
                    {{ articleData.desc }}
                </p>
            </article>
            <div class="post__images images">
                <figure v-for="image in articleData.img.slice(0, 3)" :key="image">
                    <img :src="'/images/posts/' + image" :alt="articleData.title">
                </figure>
                <div class="images__link">
                    <nuxt-link :to="'/blogs/' + articleData.id + '/images'">ВСЕ ФОТО</nuxt-link>
                </div>
            </div>
        </section>
        <section class="post__comments">
            <h2>Коментарии:</h2>
            <TheCommentForm />
            <article class="post__comment" v-for="comment in articleData.data.comments" :key="comment">
                <p>{{ comment }}</p>
                <button @click="reply">Ответить</button>
                <TheCommentForm v-show="replyOn" />
            </article>
        </section>
    </div>
</template>

<script setup>
    import JSON from '~/server/articles.json';
    import { useRoute } from 'vue-router';
    import TheCommentFormVue from '~/components/popups/TheCommentForm.vue';

    const { id } = useRoute().params;
    const articleData = JSON.articles[id-1];

    let replyOn = false;

    const reply = () => {
        replyOn = !replyOn;
    }
</script>

<style lang="scss" scoped>

</style>