<template>
    <article class="authors-posts__post post" @click="openArticle">
        <figure class="post__img">
            <img :src="'/images/posts/' + articleData.img[0]" :alt="articleData.title">
        </figure>
        <header class="post__title">
            <h2>{{ articleData.title }}</h2>
        </header>
        <ul class="post__data">
            <li>
                <div class="post__icons"><img src="/images/icons/date.svg" alt="Дата публикации"></div>
                <time :datetime="articleData.data.publishedAt">{{ articleData.data.publishedAt }}</time>            </li>
            <li>
                <div class="post__icons"><img src="/images/icons/save.svg" alt="Лайки"></div>
                {{ articleData.data.likes }}
            </li>
            <li>
                <div class="post__icons"><img src="/images/icons/comment.svg" alt="Коментарии"></div>
                {{ articleData.data.comments.length }}
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    props:{
        articleData: {
            type: Object,
            required: true,
            default: {
                "id": 0,
                "title": "",
                "desc": "",
                "img": [],
                "data": {
                    "publishedAt": "",
                    "destination": "",
                    "likes": 0,
                    "comments": []
                }
            }
        }
    },
    methods: {
        openArticle(){
            this.$router.replace(`/blogs/${this.articleData.id}`);
        }
    }
}
</script>

<style lang="scss" scoped>
    .post {
        overflow: hidden;
        border-radius: 10px;
        background-color: #fcfcfc;
        width: calc(33% - 2%);
        height: fit-content;
        padding-bottom: 10px;
        cursor: pointer;
        box-shadow: 0px 3px 5px #00000071;

        &:hover .post__img img {
            transform: scale(1.2);
        }

        &:hover {
            opacity: 0.8;
        }
        .post {
            &__img {
                overflow: hidden;
                max-height: 140px;
                width: 100%;

                img {
                    transition: all 0.5s;
                    object-fit: cover;
                }
            }

            &__title {
                width: 98%;
                margin: 10px;
                
                h2{
                    font-size: 18px;
                    font-weight: 600;
                    color: $accent;
                    text-shadow: 1px 2px 2px #6a6a6a;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }
            }

            &__data {
                display: flex;
                justify-content: space-around;
                background-color: #c8fb101e;
                padding: 5px 0;
                box-shadow: 0px 1px 5px #0000001a;

                li {
                    display: flex;
                    align-items: center;
                    gap: 5px;

                    .post__icons {
                        width: 20px;
                        padding-top: 3px;
                    }
                }
            }
        }
    }
</style>