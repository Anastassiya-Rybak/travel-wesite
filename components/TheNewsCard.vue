<template>
    <article class="news-item">
        <figure class="news-item__img">
            <img :src="image" :alt="title">
        </figure>
        <section class="news-item__content">
            <header>
                <h2>{{ title.slice(0, 35) + '...' }}</h2>
            </header>
            <p>{{ desc }}</p>
            <footer>
                <span>{{ date }}</span>
            </footer>
        </section>
        <div class="news-item__link">
            <a :href="url" target="_blank" rel="noopener noreferrer">Открыть</a>
        </div>
    </article>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
        default: ''
    },
    desc: {
        type: String,
    },
    url: {
        type: String,
        required: true,
        default: ''
    },
    image: {
        type: String,
        required: true,
        default: '/images/Global-News-APIs-800x420.jpg'
    },
    date: {
        type: String,
        required: true,
        default: ''
    }
})

</script>

<style lang="scss" scoped>

.news-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    border-radius: 10px;
    background-color: #fcfcfc;
    box-shadow: 0px 3px 5px #00000071;

    &__img {
        overflow: hidden;
        max-width: 30%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__content {
        padding: 1vh;
        display: flex;
        flex-direction: column;
        gap: 1vh;
        width: 60%;

        header h2 {
            font-size: 18px;
        }

        p {
            font-size: 0.8em;
        }

        footer span {
            font-size: 0.7em;
            opacity: 0.5;
            letter-spacing: 0.7em;
        }
    }

    &__link {
        background-color: #000;
        width: 3vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.4s ease;
        cursor: pointer;

        &:hover {
            background-color: $accent;
            width: 3.3vw;
        }

        a {
            display: block;
            font-size: 14px;
            writing-mode: vertical-rl;
            color: #fff;
        }
    }

}

</style>