<template>
    <ul class="burger__nav" :class="{open: open}">
        <li><nuxtLink to="/">Главная</nuxtLink></li>
        <li>
            <nuxtLink to="" @click.prevent="openPopup">О направлениях</nuxtLink>
            <TheDistanations :open="destinationsOpen" />
        </li>
        <li><nuxtLink to="">Блоги</nuxtLink></li>
        <li><nuxtLink to="">Контакты</nuxtLink></li>
        <li><nuxtLink to="">Новости</nuxtLink></li>
    </ul>
</template>

<script>
import TheDistanations from './TheDistanations.vue';
export default {
    components: { TheDistanations },
    props: {
        open: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data() {
        return {
            destinationsOpen: false,
        }
    },
    methods: {
        openPopup(){
            console.log(this.destinationsOpen);
            this.destinationsOpen === true ? this.destinationsOpen = false : this.destinationsOpen = true;
        }

    },
}
</script>

<style lang="scss" scoped>
.burger__nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    display: none;
    padding: 10px;
    z-index: 3;
    background-color: #fff;
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.301);

    li {
        margin-bottom: 5px;
        width: 100%;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            color: $accent;
            border-bottom: 1px solid $accent;
        }

        a {
            color: black;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 14px;
        }
    }
}
</style>