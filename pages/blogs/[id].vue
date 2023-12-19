<template>
    <div class="post wrapper">
        <span class="post__back" @click="$router.push('/blogs')">ОБРАТНО</span>
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
                <p class="post__description" ref="postDescription">
                    {{ acceptableAmountDescription }}
                </p>
                <LazyTheButton v-show="postDescriptionOverfull" :class="{'post__open-btn_dimmer': postOpenFull}"
                 class="post__open-btn" :text="postOpenFull ? 'Свернуть' : 'Развернуть'"
                 @click.prevent="editPostLength(postOpenFull ? 'cut' : 'full')"/>
                <div v-show="articleData.author === 'Анастаfeffebссия'" class="post__settings settings">
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
                <figure v-for="image in articleData.img.slice(0, 3)" :key="image">
                    <img :src="'/images/posts/' + image" :alt="articleData.title">
                </figure>
                <figure v-show="postImagesOverfull" class="images__link" @click="openAllImages">
                    <figcaption>ВСЕ ФОТО</figcaption>
                    <img :src="'/images/posts/' + articleData.img[3]" alt="Остальные фото">
                </figure>
            </div>
        </section>
        <LazyPopupsTheModalImages v-show="postImagesOpenFull" :imges="articleData.img" @close-modal="postImagesOpenFull = false"/>
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
    const settingsContent = ref(null); // Объявляю ссылку с такимже именем как ref нужного элемента DOM.
    
    const openSettings = () => { // Функуия для анимационного открытия и закрытия меню настроек поста, путем удаления и добавления классов.
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

    const postDescription = ref(null); // Объявляю ссылку с такимже именем как ref нужного элемента DOM.
    const postDescriptionOverfull = ref(false); // Объявляю переменную для контроля отображения кнопки при переполненном описании статьи.
    const postOpenFull = ref(false); // Переменная для отслеживания развернут ли пост пользователем.

    const acceptableAmountDescription = computed(() => { // Допустимый раззмер текста описания поста.
        return articleData.desc > 2090 ? articleData.desc.slice(0,2090) : articleData.desc;
    })

    const editPostLength = (arg) => { // Разворачивает/сворачивает контент статьи.
        if ( arg === 'full' || arg === 'cut' ) {
            switch (arg) {
                case 'full':
                postDescription.value.innerText = articleData.desc;
                postOpenFull.value = true;
                    break;
                case 'cut':
                postDescription.value.innerText = articleData.desc.slice(0,2090) + ' . . .';
                postOpenFull.value = false;
                    break;
                default:
                    break;
            }
        } else { console.log('Invalid argument has been used'); }
    }

    const postImagesOverfull = ref(false); // Объявляю ссылку для ref блока изображений, сигнализирующую о том, переполнен ли блок изображений.
    const postImagesOpenFull = ref(false); // Переменная для отслеживания развернуты ли все изображения пользователем.
    
    const openAllImages = () => {
        postImagesOpenFull.value = true;
    }


    onMounted(() => {
        settingsContent.value.classList.add('settings__content_close'); // Необходимо для корректной работы анимации появления настроек с первого клика.

        articleData.desc.length > 2090 ? postDescriptionOverfull.value = true : postDescriptionOverfull.value = false; // При рендеренге определяю нужно ли отображать кнопку развертывания статьи.
        if (articleData.desc.length > 2090) editPostLength('cut');

        articleData.img.length > 3 ? postImagesOverfull.value = true : postImagesOverfull.value = false; // При рендеринге определяю переполнен ли блок с картинками, если да, то сообщаю в ссылку контроля.
    })

</script>

<style lang="scss" scoped>
    .post {
        &__back {
            position: absolute;
            left: 5%;
            top: 5%;
            background-color: $accent;
            padding: 5px 10px;
            border-radius: 10px;
            box-shadow: 0 1px 1px #000;
            cursor: pointer;

            &:hover {
                opacity: 0.7;
            }

            &:active {
                box-shadow: none ;
            }
        }

        &__content {
            display: flex;
            justify-content: space-between;
            align-items:flex-start;
            width: 100%;
        }

        &__settings {
            display: flex;
            align-items: flex-end;
            cursor: pointer;
            position: absolute;
            right: 0;
            width: 6%;

            .settings {
                &__content {
                    position: absolute;
                    right: -240%;
                    bottom: 0;
                    overflow: hidden;

                    ul {
                        position: relative;
                        width: 125px;
                        height: 47px;
                        transition: right 0.4s ease;
                        backdrop-filter: blur(3px);
                        border: 0.3px solid $accent;
                        border-left: none;
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                        padding: 7px;

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
                    right: 0;
                }

                &__content_close ul {
                    right: 100%;
                }

                &__img {
                    display: flex;
                    align-items: flex-end;
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

            &_dimmer {
                opacity: 0.5;
            }
        }

        &__images {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 45%;
            border-radius: 10px;
            gap: 5px;
            overflow: hidden;

            figure {
                overflow: hidden;
                img {
                    object-fit: cover;
                }

                &:first-child {
                    width: 100%;
                    max-height: 38vh;
                }

                &:not(:first-child) {
                    width: calc(50% - 5px);
                    max-height: 21vh;
                }

                &:last-child {
                    position: relative;
                    width: 100%;
                    max-height: 15vh;
                    cursor: pointer;
                    transition: all 0.4s;

                    &:hover img{
                        @include img-hover;
                    }

                    figcaption {
                        transition: all 0.4s;
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #fcfcfc5b;
                        backdrop-filter: blur(3px);
                    }
                }
            } 

        }

        // &__comments {
        // }
    }
</style>