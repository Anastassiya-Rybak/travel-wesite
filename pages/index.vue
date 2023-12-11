<template>
    <main>
        <BunnerSlider />
        <section class="wrapper">
            <div class="popular-destination">
                <div class="popular-destination__header">
                    <h2>Популярные напрaвления</h2>
                </div>
                <PopularDestinations />
            </div>
        </section>
    </main>
</template>

<script>
import BunnerSlider from '~/components/sliders/BunnerSlider.vue'
import PopularDestinations from '~/components/sliders/PopularDestinations.vue';
export default {
    components: { BunnerSlider, PopularDestinations },
}
</script>

<style lang="scss" scoped>
.popular-destination {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 5vh;

    &__header {
        margin: 40px auto;

        @include media(560px) {
            margin: 20px auto;
        }

        h2 {
            color: $accent;
            font-size: 42px;
            font-weight: 600;
            text-shadow: 1px 0.05em 0.05em #6a6a6a;

            @include media(880px) {
                font-size: 30px;
            }
            @include media(480px) {
                font-size: 20px;
            }
        }
    }
}
</style>