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
                    <h3 class="header__burger" data-modal-open="burgernav">МЕНЮ</h3>
                    <ul class="header__nav">
                        <nuxt-link to="">Главная</nuxt-link>
                        <nuxt-link to="" data-anchor="destinationnav">О направлениях</nuxt-link>
                        <nuxt-link to="blogs">Блоги</nuxt-link>
                        <nuxt-link to="">Контакты</nuxt-link>
                        <nuxt-link to="">Новости</nuxt-link>
                    </ul>
                    <div class="header__conaction-links">
                        <div class="header__search">
                            <img src="/images/icons/search.svg" alt="Поиск">
                        </div>
                        <div class="header__user-icon" data-modal-open="usersignin">
                            <img src="/images/icons/user.svg" alt="">
                        </div>
                        <nuxtLink class="header__save" to="">
                            <img src="/images/icons/save.svg" alt="Сохранённое">
                        </nuxtLink>
                    </div>
                </div> 
            </section>
        </header>
        <slot />
    </div>
</template>

<script>
// import { BurgerContent } from '#build/components'

export default {
    // components: {BurgerContent},
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
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
        }

        &__info {
            display: flex;
            align-items: center;

            .info__number {
                display: flex;
                margin-right: 20px;
                align-items: center;
                gap: 10px;

                a {
                    color: #fff;
                    font-size: 14px;

                    &:hover {
                        @include link-hover;
                    }
                }

                img {
                    filter: invert(1);
                    width: 20px;
                }
            }

            .info__work-hours {
                font-weight: 600;
                opacity: 0.8;
                font-size: 14px;
                letter-spacing: 0.3em;
            }
        }

        &__socials {
            display: flex;
            justify-content: space-between;
            width: 15%;

            a {
                width: calc(23% - 10%);

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
            width: 100%;
        }

        &__logo {
            width: 13%;

            a {
                width: 100%;
            }

            &:hover {
                transform: scale(1.1);
            }
        }

        &__burger {
            width: 50%;
            position: relative;
            display: none;
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
            width: 50%;
            justify-content: space-between;
            align-items: center;

            a {
                color: black;
                font-weight: 500;
                text-transform: uppercase;
                font-size: 14px;

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
        }

        &__search,
        &__user-icon,
        &__save {
            width: calc(18% - 3%);
            cursor: pointer;

            &:hover {
                transform: scale(1.07);
            }
        }


    }
</style>