<template>
    <div>
        <header class="header">
            <section class="header__black-back-wrapper">
                <div class="header__black-back wrapper">
                    <div class="header__info info">
                        <div class="info__number">
                            <img src="/images/icons/call-svgrepo-com.svg" alt="Контактный номер">
                            <a href="tel:+70007477777">
                                +7 000 747 77 77
                            </a>
                        </div>
                        <span class="info__work-hours">
                            Работаем каждый день с 9:00 до 19:00
                        </span>
                    </div>
                    <div class="header__socials">
                        <a href=""><img src="/images/icons/instagram-svgrepo-com.svg" alt="instagram"></a>
                        <a href=""><img src="/images/icons/whatsapp-svgrepo-com.svg" alt="whatsapp"></a>
                        <a href=""><img src="/images/icons/youtube-168-svgrepo-com.svg" alt="youtube"></a>
                        <a href=""><img src="/images/icons/telegram-fill-svgrepo-com.svg" alt="telegram"></a>
                    </div>
                </div>    
            </section>
            <section class="header__white-back-wrapper">
                <div class="header__white-back wrapper">
                    <div class="header__logo"><a href=""><img src="/images/logo.webp" alt="Lime Trip"></a></div>
                    <div class="header__burger-wrapper">
                        <h3 class="header__burger" @click.prevent="openPopup('burger')">МЕНЮ</h3>
                        <BurgerContent :open="open.burger" />
                    </div>
                    <ul class="header__nav">
                        <nuxt-link to="">Главная</nuxt-link>
                        <nuxt-link to="" @click.prevent="openPopup('destinations')">О направлениях</nuxt-link>
                        <nuxt-link to="">Блоги</nuxt-link>
                        <nuxt-link to="">Контакты</nuxt-link>
                        <nuxt-link to="">Новости</nuxt-link>
                    </ul>
                    <div class="header__conaction-links">
                        <div class="header__search">
                            <img src="/images/icons/search.svg" alt="Поиск">
                        </div>
                        <div class="header__user-icon" @click.prevent="openPopup('modal')" >
                            <img src="/images/icons/user.svg" alt="Войти/Зврегистрироваться">
                        </div>
                        <nuxtLink class="header__save" to="">
                            <img src="/images/icons/save.svg" alt="Сохранённое">
                        </nuxtLink>
                    </div>
                </div>
            </section>
            <TheDistanations :open="open.destinations" />
        </header>
        <ModalWindow v-show="open.modal" type="usersProfile" @close-modal="open.modal = false" />
        <slot />
    </div>
</template>

<script>
import TheDistanations from '~/components/popups/TheDistanations.vue';
import BurgerContent from '~/components/popups/BurgerContent.vue';
import ModalWindow from '~/components/popups/ModalWindow.vue';

export default {
    components: { TheDistanations, BurgerContent, ModalWindow },
    data() {
        return {
            open: {
                destinations: false,
                burger: false,
                modal: false
            }
        }
    },
    methods: {
        openPopup(dir){
            this.open[dir] === true ? this.open[dir] = false : this.open[dir] = true;
        }
    }
           
}
</script>

<style lang="scss">
    .header {
        display: flex;
        flex-direction: column;
        position: relative;
        
        &__black-back-wrapper {
            background-color: #121212;
            color: #fff;
        }

        &__black-back {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;

            @include media(560px) {
                flex-wrap: wrap;
                row-gap: 10px;
                justify-content: space-between;
            }
        }

        &__info {
            display: flex;
            align-items: center;
            @include media(560px) {
                width: 70%;
                margin: 0 auto;
            }

            .info__number {
                display: flex;
                margin-right: 20px;
                align-items: center;
                gap: 10px;

                a {
                    color: #fff;
                    font-size: 14px;
                    @include media(680px) {
                        font-size: 10px;
                    }
                    @include media(560px) {
                        font-size: 8px;
                    }

                    &:hover {
                        @include link-hover;
                    }
                }

                img {
                    filter: invert(1);
                    width: 20px;
                    @include media(680px) {
                        width: 15px;
                    }
                }
            }

            .info__work-hours {
                font-weight: 600;
                opacity: 0.8;
                font-size: 14px;
                @include media(680px) {
                    font-size: 8px;
                }
                @include media(560px) {
                    font-size: 8px;
                    letter-spacing: 0.1em;
                }
                letter-spacing: 0.3em;
            }
        }

        &__socials {
            display: flex;
            justify-content: space-between;
            width: 15%;
            @include media(560px) {
                width: 70%;
                margin: 0 auto;
            }

            a {
                width: calc(23% - 10%);
                @include media(560px) {
                    width: 7%;
                }

                img {
                    filter: invert(1);
                    opacity: 0.7;
                    transition: 0.3s;

                    &:hover {
                        opacity: 1;
                    }
                }
            }

        }

        &__white-back-wrapper {
            background-color: #fff;
            color: #121212;
        }

        &__white-back {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px 0;
            @include media(1100px) {
                padding: 20px 0;
            }
        }

        &__logo {
            width: 13%;
            @include media(880px) {
                width: 20%;
            }
            @include media(680px) {
                width: 10%;
            }
            @include media(560px) {
                width: 25%;
            }

            a {
                width: 100%;
            }

            &:hover {
                transform: scale(1.1);
            }
        }

        &__burger-wrapper {
            width: 50%;
            position: relative;
            display: none;
            @include media(560px) {
                display: block;
            }
        }

        &__burger {
            width: 100%;
            text-align: center;
            color: #b2e400;
            font-size: 16px;
            letter-spacing: 0.5em;
            border-bottom: 0.5px solid rgba(0, 0, 0, 0.767);
            border-top: 0.5px solid rgba(0, 0, 0, 0.788);
            transition: all 0.3s;
            cursor: pointer;

            &:hover {
                background-color: #b1e20085;
                color: #050505;
            }
        }

        &__nav {
            display: flex;
            @include media(560px) {
                display: none;
            }
            width: 50%;
            @include media(1100px) {
                width: 60%;
            }
            @include media(680px) {
                width: 70%;
            }
            justify-content: space-between;
            align-items: center;

            a {
                color: black;
                font-weight: 500;
                text-transform: uppercase;
                font-size: 14px;
                @include media(880px) {
                    font-size: 10px;
                }

                &:hover {
                    @include link-hover;
                }
            }
        }

        &__conaction-links {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 12%;
            @include media(1100px) {
                width: 10%;
            }
            @include media(560px) {
                width: 18%;
            }
        }

        &__search,
        &__user-icon,
        &__save {
            width: calc(18% - 3%);
            cursor: pointer;
            @include media(560px) {
                width: calc(25% - 3%);
            }

            &:hover {
                transform: scale(1.07);
            }
        }
    }
</style>