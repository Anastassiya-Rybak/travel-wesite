<template>
    <div class="modal-wrapper" @click="$emit('close-modal')">
        <div class="modal" @click.stop>
            <figure class="modal__all" v-show="!openFocus" v-for="(image, idx) in imges" :key="idx" @click="openOneImage(idx)">
                <img :src="'/images/posts/' + image" :alt="image">
            </figure>
            <figure v-show="openFocus" class="modal__focus">
                <img :src="'/images/posts/' + imges[focusImg]" alt="">
            </figure>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, ref } from 'vue';

    const props = defineProps({
        imges: {
            type: Array,
            required: true            
        }
    })

    const focusImg = ref(0);
    const openFocus = ref(false);

    const openOneImage = (idx) => {
        focusImg.value = idx;
        openFocus.value = true;
    }
</script>

<style lang="scss" scoped>
    .modal {
        width: 50%;
        height: 70vh;
        overflow-y: scroll;
        z-index: 5555;
        padding: 20px;
        background-color: #fff;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        border-radius: 10px;
        gap: 5px;

        &__all {
            overflow: hidden;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
            img {
                object-fit: cover;
            }

            &:first-child {
                width: 100%;
                max-height: 38vh;
            }

            &:not(:first-child) {
                width: calc(50% - 5px);
                max-height: 21vh;
            }
        }

        &__focus {
            width: 100% !important;
        }
    }
</style>