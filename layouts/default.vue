<template>
    <section>
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
                    <div class="header__logo"><nuxtLink to="/"><img src="/images/logo.webp" alt="Lime Trip"></nuxtLink></div>
                    <div class="header__burger-wrapper">
                        <h3 class="header__burger" @click.prevent="openPopup('burger')">МЕНЮ</h3>
                        <LazyPopupsBurgerContent v-show="open.burger" />
                    </div>
                    <ul class="header__nav">
                        <nuxt-link active-class="active-page" to="/">Главная</nuxt-link>
                        <nuxt-link active-class="active-page" to="" @click.prevent="openPopup('destinations')">О направлениях</nuxt-link>
                        <nuxt-link active-class="active-page" to="/blogs">Блоги</nuxt-link>
                        <nuxt-link active-class="active-page" to="/contacts">Контакты</nuxt-link>
                        <nuxt-link active-class="active-page" to="/news">Новости</nuxt-link>
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
            <LazyTheDestinations v-show="open.destinations" />
        </header>
        <LazyPopupsModalWindow v-show="open.modal" type="usersProfile" @close-modal="open.modal = false" />
        <slot />
        <section class="email-form-wrapper">
            <div class="email-form wrapper">
                <div class="email-form__text">
                    <h4>Мы постоянно мониторим лучшие акции для своих клиентов!</h4>
                    <p>Если хотите получать актуальную информацию о акциях - просто подпишитесь на наши рассылки!</p>
                </div>
                <form action="" method="POST">
                    <input type="email" name="" id="mainemail" placeholder="Введите свой Email">
                    <TheButton type="submit" text="ПОДПИСАТЬСЯ" />
                </form>
            </div>
            <hr>
        </section>
        <footer class="footer wrapper">
            <div class="footer__contact">
                <div><img src="/images/logo.webp" alt="LimeTrip"></div>
                <span>
                    <img src="/images/icons/call-svgrepo-com.svg" alt="">
                    <a href="tel:+70007477777">Тел:+70007477777</a>
                </span>
                <span>
                    <img src="/images/icons/mail.svg" alt="">
                    <a href="email:lime_trip@gmail.com">Email:lime_trip@gmail.com</a>
                </span>
            </div>
            <div class="footer__nav">
                <div>
                    <h4>LIME TRIP</h4>
                    <ul>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Контакты</a></li>
                        <li><a href="">Блоги</a></li>
                        <li><a href="">Политика сайта</a></li>
                    </ul>    
                </div>
                <div>
                    <h4>ИНФОРМАЦИЯ</h4>
                    <ul>
                        <li><a href="">О странах</a></li>
                        <li><a href="">Новости</a></li>
                        <li><a href="">Акции</a></li>
                    </ul>    
                </div>
                <div>
                    <h4>ЛИЧНОЕ</h4>
                    <ul>
                        <li><a href="">Аккаунт</a></li>
                        <li><a href="">Избранное</a></li>
                    </ul>    
                </div>
        
            </div>
        </footer>
    </section>
</template>

<script>
import TheDestinations from '~/components/TheDestinations.vue';
import TheDistanations from '~/components/popups/TheDistanations.vue';
import BurgerContent from '~/components/popups/BurgerContent.vue';
import ModalWindow from '~/components/popups/ModalWindow.vue';
import TheButton from '~/components/TheButton.vue';

export default {
    components: { TheDistanations, BurgerContent, ModalWindow, TheButton, TheDestinations },
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

            .active-page {
                @include link-hover;
                letter-spacing: 0.1em;
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

    .email-form-wrapper {
        background-color: #fff;
        padding: 5vh 0 0;

        .email-form {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 60px;

            @include media(680px) {
                flex-direction: column;
                gap: 1.5vh;
            }

            &__text {
                width: 50%;

                @include media(680px) {
                    width: 100%;
                }

                h4 {
                    font-size: 30px;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    margin-bottom: 10px;
                }
            }

            form {
                width: 50%;
                display: flex;
                justify-content: space-around;
                align-items: center;

                @include media(1100px) {
                    flex-direction: column;
                    align-items: center;
                }

                @include media(680px) {
                    width: 100%;
                }

                input {
                    margin-right: 10px;
                    padding: 10px;
                    width: 60%;
                    box-shadow: 1px 2px 2px #6a6a6a;

                    @include media(1100px) {
                        margin-right: 0;
                    }
                }

                button {
                    @include media(1100px) {
                        margin-top: 20px;
                        width: 67%;
                    }
                }

                input,
                button {
                    @include media(680px) {
                        width: 95%;
                    }
                }
            }
        }
    }

    .footer {
        display: flex;
        justify-content: space-between;
        padding: 40px 0;

        @include media(560px) {
            flex-direction: column;
            align-items: center;
            gap: 2.5vh;
        }

        a {
            color: #050505;
        }

        &__contact { 
            display: flex;
            flex-direction: column;
            gap: 10px;

            span {
                display: flex;
                column-gap: 10px;
                align-items: center;

                img {
                    width: 25px;
                }
                
                a {
                    padding-top: 5px;
                    @include media(880px) {
                        font-size: 14px;
                    }

                   &:hover {
                        color: $accent;
                        text-decoration: underline;
                        transition: 0.3s;
                    } 
                }
            }
        }

        &__nav {
            width: 50%;
            display: flex;
            justify-content: space-between;

            @include media(1100px) {
                width: 70%;
            }
            @include media(880px) {
                width: 60%;
            }
            @include media(680px) {
                width: 55%;
            }

            h4 {
                font-size: 24px;
                font-weight: 600;
                @include media(880px) {
                    font-size: 14px;
                }
            }

            li {
                margin-top: 15px;
                @include media(880px) {
                    font-size: 10px;
                }
            }
        }

        &__contact,
        &__nav {
            @include media(560px) {
                width: 100%;
            }
        }
    }
</style>