<template>
    <div>
        <ul class="burger__nav d-flex-c" data-modal="burgernav">
            <li><a href="">Главная</a></li>
            <li>
                <a href="" data-anchor="destination">О направлениях</a>
                <ul class="destination-popup__list d-flex-r" data-anchor-content="destination">
                    <li><a href="/distanation.html" class="burger-popup">Lorem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Lorqfem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Lem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Lordfvem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Lorem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Lorerem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Lorem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Lorfffem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Loream</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Lorbutem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Lorgaaem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Loreddm</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Longrem</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Loremsa</a></li>
                    <li><a href="/distanation.html" class="burger-popup">Lorem</a></li>
                </ul>                
            </li>
            <li><a href="blogs.html">Блоги</a></li>
            <li><a href="">Контакты</a></li>
            <li><a href="">Новости</a></li>
        </ul>
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
.burger__nav {
    position: absolute;
    display: none;
    padding: 10px;
    z-index: 3;
    background-color: #fff;
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.301);
}

.burger__nav li {
    margin-bottom: 5px;
    width: 100%;
    transition: 0.3s;
}

.burger__nav a {
    color: black;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
}


</style>