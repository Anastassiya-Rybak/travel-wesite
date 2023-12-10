<template>
    <div>
        <p>ffffff</p>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
    div {
        background-color: aqua;
        padding: 100px;
        p {
            @include k-border-debug;
            background-color: $dandy;
        }
    }
</style>