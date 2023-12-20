<template>
    <div class="contacts wrapper">
        <section class="contacts__info">
            <h1>Контакты и адреса офисов:</h1>
            <ul class="contacts__towns">
                <li>г. Астана ул. Кабанбай Батыра 1
                    <ul>
                        <li><a href="tel:+77776541111">+77776541111</a></li>
                        <li><a href="tel:+77766545511">+77766545511</a></li>
                    </ul>
                </li>
                <li>г. Актау ул. Некрасина 43\3
                    <ul>
                        <li><a href="tel:+77776541111">+77776541111</a></li>
                        <li><a href="tel:+77766544774">+77766544774</a></li>
                    </ul>
                </li>
                <li>г. Шимкент ул. Иманбаева 7
                    <ul>
                        <li><a href="tel:+77776541111">+77776541111</a></li>
                        <li><a href="tel:+77766548711">+77766548711</a></li>
                    </ul>
                </li>
            </ul>
        </section>
        <div class="contacts__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.096113823097!2d71.42615724304467!3d51.15034196136557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586c8f63ab2b7%3A0x31c7816cca42b62e!2sThe%20St.%20Regis%20Astana!5e0!3m2!1sru!2skz!4v1703049444022!5m2!1sru!2skz" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .contacts {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 10vh auto;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;

        &__info {
            display: flex;
            flex-direction: column;
            padding: 5vh 0;
            gap: 2vh;

            h1 {
                font-size: 32px;
            }
        }

        &__towns {
            display: flex;
            flex-direction: column;
            gap: 2vh;
            font-size: 18px;

            li ul {
                padding-left: 1vw;
                font-size: 14px;

                li a {
                    letter-spacing: 0.2em;
                    color: #747474;

                    &:hover {
                        @include link-hover;
                    }
                }
            }
        }
    }
</style>