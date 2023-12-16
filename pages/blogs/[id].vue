<template>
    <div class="post wrapper">
        <section class="post__content">
            <article class="post__article">
                <header>
                    <h1>{{ articleData.title }}</h1>
                </header>
                <section class="post__data">
                    <h5 class="post__destination">{{ articleData.data.destination }}</h5>
                    <time class="post__published-at" :datetime="articleData.data.publishedAt">{{ articleData.data.publishedAt }}</time>
                    <address class="post__author">
                        <nuxt-link to="/profile">{{ articleData.author }}</nuxt-link>
                    </address>
                </section>
                <p class="post__description" ref="postDescriprion">
                    {{ articleData.desc.slice(0,1150) + '...' }}
                </p>
                <!-- <LazyTheButton v-show="articleData.desc.length > postDescription.length" -->
                 class="post__open-btn" text="Развернуть" />
                <div class="post__settings settings">
                    <div v-show="settingsOpen" class="settings__content" ref="settingsContent">
                        <ul>
                            <li>Редактировать</li>
                            <li>Удалить</li>
                        </ul>
                    </div>
                    <div class="settings__img" @click="openSettings">
                        <img src="/images/icons/dots.svg" alt="Настройки">
                    </div>
                </div>
            </article>
            <div class="post__images images">
                <figure v-for="image in articleData.img.slice(0, 3)" ref="imageRefs" :key="image">
                    <img :src="'/images/posts/' + image" :alt="articleData.title">
                </figure>
                <div class="images__link">
                    <span>ВСЕ ФОТО</span>
                </div>
            </div>
        </section>
        <!-- <section class="post__comments">
            <h2>Коментарии:</h2>
            <TheCommentForm />
            <article class="post__comment" v-for="comment in articleData.data.comments" :key="comment">
                <p>{{ comment }}</p>
                <button @click="reply">Ответить</button>
                <LazyPopupsTheCommentForm v-show="replyOn" />
            </article>
        </section> -->
    </div>
</template>

<script setup>
    import JSON from '~/server/articles.json';
    import { ref, onMounted } from 'vue';

    const { id } = useRoute().params;  //Получаю id из params.
    const articleData = JSON.articles[id-1]; //Получаю данные конккретной статьи из бд статей по id.
    const settingsOpen = ref(false); //Объявляю переменную для контроля видимости настроект поста.
    const imageRefs = ref([]); // ?
    const settingsContent = ref(null); // Объявляю ссылку с такимже именем как ref нужного элемента DOM.
    const postDescription = ref(null); // ?

    // Функуия для анимационного открытия и закрытия меню настроек поста, путем удаления и добавления классов.
    const openSettings = () => {
        switch (settingsOpen.value) {
            case true:
                settingsContent.value.classList.remove('settings__content_open');
                settingsContent.value.classList.add('settings__content_close');
                setTimeout(()=>{ settingsOpen.value = !settingsOpen.value; }, 300)
                break;
            case false:
                setTimeout(()=>{
                    settingsContent.value.classList.remove('settings__content_close');
                    settingsContent.value.classList.add('settings__content_open');
                }, 10)
                settingsOpen.value = !settingsOpen.value;
                break;
            default:
                break;
        }
    }

    onMounted(() => {
        settingsContent.value.classList.add('settings__content_close'); // Необходимо для корректной работы анимации появления настроек с первого клика.
    })


</script>

<style lang="scss" scoped>
    .post {
        &__content {
            display: flex;
            justify-content: space-between;
            align-items:flex-start;
            width: 100%;
        }

        &__settings {
            display: flex;
            align-items:end;
            cursor: pointer;
            position: absolute;
            right: 0;
            width: 6%;

            .settings {
                &__content {
                    position: absolute;
                    left: -240%;
                    bottom: 0;
                    overflow: hidden;

                    ul {
                        position: relative;
                        width: 125px;
                        height: 40px;
                        transition: left 0.4s ease;

                        li {
                            font-size: 14px;
                            font-weight: normal;
                            cursor: pointer;
                            &:hover {
                                opacity: 0.7;
                            }
                        }
                    }
                }

                &__content_open ul {
                    left: 0;
                }

                &__content_close ul {
                    left: 100%;
                }

                &__img {
                    display: flex;
                    align-items:end;
                    transition: all 0.4s;
                    width: 100%;

                    &:hover img{
                        filter: brightness(0) saturate(100%) invert(92%) sepia(19%) saturate(1826%) hue-rotate(14deg) brightness(85%) contrast(102%);
                    }
                }
            }
        }

        &__article {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: calc(55% - 2%);
            border-radius: 10px;
            background-color: #fcfcfc;
            padding: 15px;

            header h1 {
                color: $accent;
                text-transform: uppercase;
                font-size: 38px;
                letter-spacing: 0.08em;
                text-shadow: 0 0px 1px #000000;
            }
        }

        &__data {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h5,
            time,
            address a {
                font-size: 16px;
                letter-spacing: 0.07em;
                font-weight: normal;
                color: #070707a1;
                font-style: normal;
            }

            address a:hover,
            h5:hover {
                color: #000000;
                transition: all 0.3s;
                cursor: pointer;
            }
        }

        &__description {
            font-size: 14px;
            text-align: justify;
            letter-spacing: 0.07em;
            line-height: 1.5em;
        }

        &__open-btn {
            font-size: 10px;
        }

        &__images {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 45%;
            border-radius: 10px;
            overflow: hidden;

            &:first-child {
                width: 100%;
            }

            figure:not(:first-child),
            .images__link{
                width: calc(33% - 1%);
            }
        }

        // &__comments {
        // }
    }
</style>