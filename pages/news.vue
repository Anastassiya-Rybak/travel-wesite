<template>
    <section class="news wrapper">
        <h1>Последние новости из сферы туризма</h1>
        <div v-cloak class="news__content">
            <TheMainNews />
            <TheNewestNews />
        </div>
    </section>
</template>

<script setup>

    //     postsObserver.observe(post)
    // })
</script>

<style lang="scss" scoped>
    [v-cloak] {
        display: none;
        padding: 50px 0;

        @keyframes spinner {
            to {
            transform: rotate(360deg);
            }
        }

        &:before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin-top: -10px;
            margin-left: -10px;
            border-radius: 50%;
            border: 2px solid #ccc;
            border-top-color: #333;
            animation: spinner .6s linear infinite;
            text-indent: 100%;
            white-space: nowrap;
            overflow: hidden;
        }

        & > div {
            display: none;
        }
    }
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