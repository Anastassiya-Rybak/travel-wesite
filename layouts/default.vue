<template>
    <div>
        <header class="header">
            <section class="black-back">
                <div class="first-part-header wrapper d-flex-r">
                    <div class="info-div d-flex-r">
                        <div class="number d-flex-r">
                            <img src="/images/icons/call-svgrepo-com.svg" alt="Контактный номер">
                            <a href="tel:+70007477777">
                                +7 000 747 77 77
                            </a>
                        </div>
                        <span class="work-hours">
                            Работаем каждый день с 9:00 до 19:00
                        </span>
                    </div>
                    <div class="social-div d-flex-r">
                        <a href=""><img src="/images/icons/instagram-svgrepo-com.svg" alt="instagram"></a>
                        <a href=""><img src="/images/icons/whatsapp-svgrepo-com.svg" alt="whatsapp"></a>
                        <a href=""><img src="/images/icons/youtube-168-svgrepo-com.svg" alt="youtube"></a>
                        <a href=""><img src="/images/icons/telegram-fill-svgrepo-com.svg" alt="telegram"></a>
                    </div>
                </div>    
            </section>
            <section class="white-back">
                <div class="second-part-header wrapper d-flex-r">
                    <div class="logo-wrapper"><a href=""><img src="/images/logo.webp" alt="Lime Trip"></a></div>
                    <div class="burger-wrap">
                        <h3 class="burger" data-modal-open="burgernav">МЕНЮ</h3>
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
                    <ul class="nav d-flex-r">
                        <li><a href="">Главная</a></li>
                        <li><a href="" data-anchor="destinationnav">О направлениях</a></li>
                        <li><a href="blogs.html">Блоги</a></li>
                        <li><a href="">Контакты</a></li>
                        <li><a href="">Новости</a></li>
                    </ul>
                    <div class="conaction-btn-link d-flex-r">
                        <div class="search-part">
                            <i class="fa-solid fa-magnifying-glass" id="search-on-the-page"></i>
                        </div>
                        <button class="_btn-modal-open btn-modal-open_profile" data-modal-open="usersignin"><i class="fa-solid fa-user"></i></button>
                        <a class="save" href=""><i class="fa-regular fa-heart"></i></a>
                    </div>
                </div> 
            </section>
            <section class="destination-popup" data-anchor-content="destinationnav">
                <ul class="destination-popup__list d-flex-r">
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
            </section>
        </header>
        <slot />
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
    .header {
        display: flex;
        flex-direction: column;
    }
</style>