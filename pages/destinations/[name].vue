<template>
    <section class="destination wrapper">
        <div class="destination__jumbo">
            <img :src="`/images/destinations/${currentDestination.name}/${currentDestination.images[0]}`" :alt="currentDestination.name">
        </div>
        <article>
            <header>
                <h1>{{ currentDestination.name }}</h1>
            </header>
            <p class="destination__description">{{ currentDestination.description }}</p>
            <footer>
                <p>
                    <nuxt-link :to="`/blogs/${currentDestination.name}`">ТУТ</nuxt-link> Вы можете почитать исотрии туристов уже путешествовавших по этому направлению.
                </p>
            </footer>
        </article>
        <div class="destination__images">
            <figure v-for="img in currentDestination.images" :key="img">
                <img :src="`/images/destinations/${currentDestination.name}/${img}`" :alt="currentDestination.name">
            </figure>
        </div>
    </section>
</template>

<script setup>
    import JSON from '~/server/destinations.json';

    const { name } = useRoute().params;  //Получаю name из params.
    const { destinations } = JSON;

    const currentDestination = destinations.find(el => el.name === name);


</script>

<style lang="scss" scoped>

    .destination {
        &__jumbo {
            width: 100%;
            height: 40vh;

            img {
                height: 100%;
                object-fit: cover;
            }
        }

        h1 {
            text-align: center;
            margin: 3vh;
            color: $accent;
            font-size: 42px;
            font-weight: 600;
            text-shadow: 1px 0.05em 0.05em #6a6a6a;
        }

        &__description {
            text-align: justify;
            line-height: 1.5em;
        }

        footer {
            border-bottom: 1px solid $accent;
            border-top: 1px solid $accent;
            margin: 2vh;
            
            p {
                text-align: center;
                padding: 1vh;

                a {
                    color: $accent;
                    text-shadow: 0 1px 1px #0e0e0e;
                    letter-spacing: 0.3em;
                    line-height: 1em;

                    &:hover {
                        @include link-hover;
                    }
                }
            }
        }

        &__images {
            display: flex;
            justify-content: space-between;

            figure {
                // height: 17vh;
                // width: calc(fit-content - 2%);
                flex: 1;

                img {
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
            
    }

</style>