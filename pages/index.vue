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
        <section class="choose-destanation-wrapper">
            <div class="choose-destanation">
                <h2>Выберите свое следующее путешествие</h2>
                <p> Можете обратиться к нашим менеджерам и мы подберем отдых, который нужен именно Вам.<br>
                    Либо с помощью нашего сайта определитесь с выбором, а мы быстро всё Вам оформим.
                </p>   
            </div>
        </section>
        <section class="call-us-wrapper">
            <div class="call-us wrapper">
                <h2>Времени не тяните, а поскорее ОТДОХНИТЕ!</h2>
                <div class="call-us__content">
                    <p> 
                        Мы всегда ждём Вашего звонка и готовы позвонить сами в любое удобное Вам время.
                    </p>
                    <button class="btn" id="btn-feedback-window" @click.prevent="openPopup">
                        Свяжитесь со мной
                    </button>
                </div>
            </div>
        </section>
        <ModalWindow v-show="modal" type="feedback" @close-modal="modal = false"/>
    </main>
</template>

<script>
import BunnerSlider from '~/components/sliders/BunnerSlider.vue';
import PopularDestinations from '~/components/sliders/PopularDestinations.vue';
import ModalWindow from '~/components/popups/ModalWindow.vue';
export default {
    components: { BunnerSlider, PopularDestinations, ModalWindow },
    data() {
        return {
            modal: false
        }
    },
    methods: {
        openPopup(){
            this.modal === true ? this.modal = false : this.modal = true;
        }
    }
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

.choose-destanation-wrapper {
    background-image: url(/images/index-page/background4.webp);
    background-size: cover;
    background-repeat: no-repeat;
    height: 95%;
    text-align: center;
    margin-bottom: 5vh;

    .choose-destanation {
        h2 {
            color: $accent;
            text-shadow: 1px 2px 2px #6a6a6a;
            font-weight: 600;
            font-size: 42px;
            letter-spacing: 0.1em;
            padding-top: 30vh;

            @include media(680px) {
                font-size: 30px;
                padding-top: 20vh;
            }

            @include media(560px) {
                font-size: 24px;
            }
        }

        p {
            color: #fff;
            font-size: 20px;
            font-weight: 400;
            padding-bottom: 30vh;

            @include media(880px) {
                margin: 0 auto;
                width: 70%;
                padding-bottom: 20vh;
                font-size: 16px;
            }
        }
    }
}

.call-us-wrapper {
    background-image: url(../../images/index-page/collage4.webp);
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 5vh;

    @include media(560px) {
        background-position: center;
    }

    .call-us {
        display: flex;
        align-items: center;
        text-align: left;
        color: #fff;
        padding: 10vh 0;

        h2 {
            width: 60%;
            color: $accent;
            text-shadow: 1px 2px 2px #6a6a6a;
            letter-spacing: 0.06em;
            font-size: 62px;
            font-weight: 800;

            @include media(560px) {
                font-size: 46px;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            width: 40%;

            p {
                font-size: 18px;
                letter-spacing: 0.2em;
                font-weight: 100;
                margin-bottom: 20px;

                @include media(560px) {
                    font-weight: 400;
                }
            }
        }

    }
}
</style>