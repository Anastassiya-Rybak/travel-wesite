<template>
    <section class="destination-popup">
        <ul class="destination-popup__list">
            <li v-for="(destination, idx) in destinations" :key="idx">
                <nuxtLink :to="`/destinations/${destination.name}`" class="burger-popup">{{ destination.name }}</nuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>
    import JSON from '~/server/destinations.json';

    const { destinations } = JSON;
</script>

<style lang="scss">
    .destination-popup {
        transition: all 0.3s;
        display: block;
        width: 45%;
        margin: 0 auto;
        position: absolute;
        bottom: -25%;
        @include media(1440px) {
            bottom: -45%;
        }
        @include media(1100px) {
            bottom: -80%;
            width: 60%;
        }
        @include media(880px) {
            bottom: -40%;
            padding: 10px;
        }
        left: 50%;
        -webkit-transform: translate(-50%,0);
        -ms-transform: translate(-50%,0);
            transform: translate(-50%,0);
        background-color: #fff;
        border: 1px solid $accent;
        padding: 20px;
        border-radius: 10px;
        z-index: 3;
        @include media(560px) {
            position: relative;
            border: none;
            left: 0;
            transform: translate(0, 0);
                -webkit-transform: translate(0,0);
                -ms-transform: translate(0,0);
            padding: 0;
            width: 90%;
        }

        &__list {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            gap: 15px;
            @include media(880px) {
                gap: 5px;
            }
            @include media(560px) {
                gap: 0;
                flex-direction: column;
            }

            li:hover {
                @include media(560px) {
                    border-bottom: 1px solid $accent;
                }
                
                .burger-popup:hover {
                    text-decoration: none;
                }
            }

            a {
                text-transform: uppercase;
                color: #050505;
                font-size: 12px;
                @include media(1100px) {
                    font-size: 10px;
                }
                @include media(880px) {
                    font-size: 6px;
                }
                letter-spacing: 0.1em;

                &:hover {
                    @include link-hover;
                }
            }
        }
    }
</style>