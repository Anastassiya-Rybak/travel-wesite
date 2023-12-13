<template>
    <section class="modal-window-wrapper" @click="$emit('close-modal')">
        <div class="modal-window" @click.stop>
            <div class="modal-window__header">
                <h3 v-show="type === 'usersProfile'">Вход в аккаунт</h3>
                <h3 v-show="type === 'feedback'">Информация для связи</h3>
                <button class="modal-window__close-btn" ref="close" @click="$emit('close-modal')">
                    <img src="/images/icons/cross.svg" alt="Закрыть">
                </button>
            </div>
            <form class="modal-window__user-form" v-show="type === 'usersProfile'" action="" method="POST">
                <input type="email" name="user-email" id="user-email" placeholder="Введите Ваш email">
                <input type="password" name="user-pass" id="user-pass" placeholder="Введите пароль">
                <button class="btn" @click.prevent="redirectToProfile">Войти</button>
            </form>
            <form class="modal-window__feedback-form" v-show="type === 'feedback'" action="" method="POST">
                <input type="text" name="name" id="user-name" placeholder="Как Вас зовут?">
                <input type="number" name="tell" id="user-number"  placeholder="Укажите номер для связи">
                <button class="btn">Свяжитесь со мной</button>
            </form>
            <span v-show="type === 'usersProfile'">Вы забыли пароль? <nuxtLink to="">Восстановить</nuxtLink></span>
            <span v-show="type === 'usersProfile'">Нет аккаунта? <nuxtLink to="">Зарегистрироваться</nuxtLink></span>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true,
            default: ''
        }
    },
    methods: {
        redirectToProfile() {
            this.$refs.close.click();
            this.$router.push('/profile');
        },
    },
}
</script>

<style lang="scss" scoped>
    .modal-window-wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.185);
        overflow: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center; 
        align-items: center;
        z-index: 99;
        padding: 30px 0;
    }
    .modal-window {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 10px;
        width: 40%;
        max-width: 100%;
        align-items: center;
        transition: transform 0.15s ease 0s, opacity 0.15s ease 0s;
        transform: scale(1);
        padding: 2vw;

        @include media(560px) {
            width: 60%;
        }
        @include media(480px) {
            width: 80%;
        }

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            h3 {
                width: 95%;
                text-align: center;
                font-size: 34px;

                @include media(880px) {
                    font-size: 26px;
                }
                @include media(680px) {
                    font-size: 20px;
                }
                @include media(480px) {
                    font-size: 24px;
                }
            }
        }

        &__close-btn {
            width: 10%;
            background-color: rgba(255, 255, 255, 0);
            border: none;
            cursor: pointer;
            border-radius: 50%;

            &:hover {
                opacity: 0.7;
            }

            &:active {
                transform: scale(0.9);
            }
        }

        form {
            text-align: center;
            margin: 10px 0;
            
            input {
                width: 80%;
                margin: 10px auto;
                font-size: 22px;
                padding: 10px;
                outline: none;

                @include media(880px) {
                    margin: 5px auto;
                    font-size: 14px;
                    padding: 7px;
                }
            }

            button {
                width: 84%;
                @include media(880px) {
                    padding: 10px;
                }
            }

            input,
            button {
                @include media(680px) {
                    font-size: 10px;
                    padding: 5px;
                }
                @include media(480px) {
                    font-size: 16px;
                }
            }
        }

        span {
            @include media(880px) {
                font-size: 10px;
            }
            @include media(680px) {
                font-size: 6px;
            }
            @include media(480px) {
                font-size: 14px;
            }

            a {
                color: rgb(10, 93, 189);
                text-decoration: underline;
                cursor: pointer;

                &:hover {
                    opacity: 0.7;
                }
            }
        }

    }
</style>