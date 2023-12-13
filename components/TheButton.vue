<template>
    <button class="btn">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn {
        font-family: 'Montserrat', sans-serif;
        background-color: $accent;
        box-shadow: 1px 2px 5px $accent;
        border: none;
        color: #000000;
        text-shadow: 1px 1px 1px #0c0c0c36;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 0.2em;
        padding: 1.3em;
        cursor: pointer;

        &:hover {
            cursor: pointer;
            background-color: #c8fb107a;
        }

        &:active {
            background-color: #8db400e8;
            box-shadow: -1px -2px 5px $accent;    
        }
    }

</style>