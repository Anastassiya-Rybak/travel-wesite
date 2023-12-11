<template>
    <Swiper class="slider1"
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
        }"
    >
    <SwiperSlide class="slider1__company-presentation">
        <div class="slide1__content wrapper">
            <h1>Lime Trip</h1>
            <p> Организуем Ваше самое запоминающееся путешествие! <br>
                У нас наибольший выбор направлений среди тур операторов страны и политика абсолютной прозрачности. <br>
                <br> На этом сайте Вы можете ознакомиться с полной информацией по ценам, направлениям и прочитать отзывы реальных людей об их отдыхе, организованном нашей компанией. <br>
                <br> Специально для этого мы открыли отдельный раздел на сайте под названием <nuxtLink to="">"Блоги"</nuxtLink>.
            </p>    
        </div>
    </SwiperSlide>
    <SwiperSlide class="slider1__choose-distanation">
        <div class="slide1__content wrapper">
            <h2>Выберите свое следующее путешествие</h2>
            <p> Можете обратиться к нашим менеджерам и мы определим какой отдых нужен именно Вам.<br>
                Либо с помощью нашего сайта определитесь с выбором, а мы уже просто быстро оформим всё.
            </p>   
        </div>
    </SwiperSlide>
    </Swiper>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.slider1__company-presentation {
    background-image: url(../../images/index-page/background1.webp);
    background-size: cover;
    background-repeat: no-repeat;
    height: 80vh;
    text-align: center;
}

.slider1__choose-distanation {
    background-image: url(../../images/index-page/background2.webp);
    background-size: cover;
    background-repeat: no-repeat;
    height: 80vh;
    text-align: center;
}

.slide1__content {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2vh;

    h1 {
        color: $accent;
        margin-top: 25vh;
        text-shadow: 1px 0.05em 0.05em #6a6a6a;
        letter-spacing: 0.08em;
        font-size: 68px;
        font-weight: 800;
    }

    h2 {
        color: $accent;
        margin-top: 30vh;
        text-shadow: 1px 0.07em 0.07em #6a6a6a;
        font-weight: 600;
        font-size: 42px;
        letter-spacing: 0.1em;
    }

    p {
        color: #fff;
        font-size: 20px;
        font-weight: 400;

        a {
            display: block;
            color: $accent;
            letter-spacing: 0.2em;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
}
</style>