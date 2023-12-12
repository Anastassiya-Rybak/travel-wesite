<template>
    <section>
        <Swiper
            :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
            :slides-per-view="3"
            :loop="true"
            :preventClicks = true
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }"
            :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }"
            :breakpoints="{
                481: {
                    slidesPerView: 2,
                },
                680: {
                    slidesPerView: 3,
                }
            }"
            class="slider2"
        >
            <SwiperSlide class="slider2__item">
                <img src="/images/index-page/slide1.webp" alt="">
                <span>Норвегия</span>
            </SwiperSlide>
            <SwiperSlide class="slider2__item">
                <img src="/images/index-page/slide2.webp" alt="">
                <span>Португалия</span>
            </SwiperSlide>
            <SwiperSlide class="slider2__item">
                <img src="/images/index-page/slide3.webp" alt="">
                <span>Канада</span>
            </SwiperSlide>
            <SwiperSlide class="slider2__item">
                <img src="/images/index-page/slide4.webp" alt="">
                <span>Швеция</span>
            </SwiperSlide>
            <SwiperSlide class="slider2__item">
                <img src="/images/index-page/slide5.webp" alt="">
                <span>Франция</span>
            </SwiperSlide>
            <SwiperSlide class="slider2__item">
                <img src="/images/index-page/slide6.webp" alt="">
                <span>США</span>
            </SwiperSlide>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </Swiper>
        <Swiper
            :modules="[SwiperAutoplay]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
            }"
            :freeMode="{
                enabled: true,
                sticky: true,
            }"
            class="slider3"
        >
            <SwiperSlide class="slider3__item">
                <div class="slider3__big">
                    <img src="/images/index-page/slide1.webp" alt="">
                    <span>Норвегия</span>
                </div>
                <div class="slider3__small-wrapp d-flex-c">
                    <div class="slider3__small">
                        <img src="/images/index-page/slide2.webp" alt="">
                        <span>Португалия</span>
                    </div>
                    <div class="slider3__small">
                        <img src="/images/index-page/slide3.webp" alt="">
                        <span>Канада</span>
                    </div>    
                </div>
            </SwiperSlide>
            <SwiperSlide class="slider3__item">
                <div class="slider3__big">
                    <img src="/images/index-page/slide4.webp" alt="">
                    <span>Швеция</span>
                </div>
                <div class="slider3__small-wrapp d-flex-c">
                    <div class="slider3__small">
                        <img src="/images/index-page/slide5.webp" alt="">
                        <span>Франция</span>
                    </div>
                    <div class="slider3__small">
                        <img src="/images/index-page/slide6.webp" alt="">
                        <span>США</span>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .slider2,
    .slider3 {
        width: 100%;
        justify-content: space-between;
    }

    .slider2 {
        @include media(480px) {
            display: none;
        }

        &__item {
            padding: 10px;
            position: relative;
            width: 100%;

            span {
                position: absolute;
                margin: 0 auto;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 0.3em;
                font-size: 18px;
                text-align: center;
                bottom: 15%;
                box-shadow: 1px 0.15em 0.15em #6a6a6a;
                background-color: #fff;
                color: black;

                @include media(680px) {
                    font-size: 14px;
                }
            }
        }
    }

    .slider3 {
        display: none;

        @include media(480px) {
            display: flex;
        }

        &__item {
            display: flex !important;
            justify-content: space-between;
            padding: 10px;
            position: relative;
            width: 100%;
        }

        &__big,
        &__small-wrapp {
            width: calc(50% - 3px);
        }

        &__small,
        &__big {
            position: relative;
            span {
                position: absolute;
                margin: 0 auto;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 0.3em;
                font-size: 18px;
                text-align: center;
                bottom: 15%;
                box-shadow: 1px 0.15em 0.15em #6a6a6a;
                background-color: #fff;
                color: black;
            }
        }

    }

    .swiper-button-next {
        right: 50px;
    }
    .swiper-button-prev {
        left: 50px;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        color: #ffffff9d;

    } 
    .swiper-button-next:hover::after,
        .swiper-button-prev:hover::after {
            color: #ffffff;
            transform: scale(1.2);
        }


</style>