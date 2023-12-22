<template>
    <ul class="destinations">
        <li v-for="(destination, idx) in destinations" :key="idx">
            <nuxtLink active-class="active-page" :to="`/destinations/${destination.name}`" class="burger-popup">{{ destination.name }}</nuxtLink>
        </li>
    </ul>
</template>

<script setup>
    import JSON from '~/server/destinations.json';

    const { destinations } = JSON;
</script>

<style lang="scss" scoped>
    .destinations {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        border-top: 1px solid $accent;
        border-bottom: 1px solid $accent;
        padding: 2vh;

        li:hover {
            .burger-popup:hover {
                text-decoration: none;
            }
        }

        a {
            text-transform: uppercase;
            color: #050505;
            font-size: 12px;
            letter-spacing: 0.1em;

            &:hover {
                @include link-hover;
            }
        }

        .active-page {
            @include link-hover;
            letter-spacing: 0.1em;
            text-shadow: 0px 1px 0 #050505;
        }
    }
</style>