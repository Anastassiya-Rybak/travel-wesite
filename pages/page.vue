<template>
    <main>
        <section class="user-profile wrapper">
            <div class="user-profile__authors-posts authors-posts">
                <div class="authors-posts__header">
                    <h1>Ваши посты</h1>
                    <button class="btn">Добавить пост</button>
                </div>
                <div class="authors-posts__list">
                    <div class="authors-posts__post post">
                        <div class="post__img">
                            <img src="/images/index-page/slide2-5.webp" alt="">
                        </div>
                        <div class="post__title">
                            <h2>Заголовок поста</h2>
                            <div class="post__edit-dots edit-dots" ref="editDotsContainer">
                                <div v-show="dotsOpen" ref="dotsOptions" class="edit-dots__content" >
                                    <ul>
                                        <li>Редактировать</li>
                                        <li>Удалить</li>
                                    </ul>
                                </div>
                                <div class="edit-dots__img" @click="openDots">
                                    <img src="/images/icons/dots.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="post__description">
                            <p>Красочное подробное и интересное описание моего путешествия
                                в страну о которой я мечтала еще с детства и вот благодаря лфйм трип моя 
                                мечта свершилась. Вернулась домой распоковала чамоданы и спешу 
                                поделиться с вами впечатлениями...
                            </p>
                        </div>
                        <div class="post__data">
                            <p><i class="fa-solid fa-calendar-days"></i>07.09.22</p>
                            <p><i class="fa-solid fa-eye"></i>377</p>
                            <a href=""><i class="fa-solid fa-comment"></i>4</a>
                            <a href=""><i class="fa-solid fa-user"></i>Anastassiya</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="user-profile__bio">
                <div class="user-block-wrapper d-flex-c">
                    <div class="avatar">
                        <img src="https://mir-vkontakte.ru/wp-content/uploads/2020/12/cf06f4deb3b18195f99147cd55b5fab4.jpg" alt="">
                    </div>
                    <span class="user-name">
                        Анастасия
                    </span>
                    <span class="user-email">еще-непрописала@мейл.ру</span>
                    <span class="view-info">244 поста</span>
                    <button class="btn-edit btn"><a href="">Редактировать профиль</a></button>
                    <button class="btn-add-destination btn"><a href="">Добавить направление</a></button>
                    <button class="btn-logout btn"><a href="">ВЫХОД</a></button>
                </div>
            </div>
        </section>
    </main>        
</template>

<script>
    import JSON from '~/server/posts.json';

    export default {
        data() {
            return {
                dotsOpen: false,
                userPostsList: JSON.blogs[0].posts
            }
        },
        mounted() {
            document.addEventListener('click', this.handleClickOutside);
        },
        methods: {
            handleClickOutside(event) {
                if (
                    this.dotsOpen &&
                    this.$refs.editDotsContainer &&
                    !this.$refs.editDotsContainer.contains(event.target)
                ) { this.dotsOpen = !this.dotsOpen; }
            },
            openDots(){
                const dotsContent = this.$refs.dotsOptions;
                switch (this.dotsOpen) {
                    case true:
                        dotsContent.classList.remove('edit-dots__content_open');
                        dotsContent.classList.add('edit-dots__content_close');
                        setTimeout(()=>{ this.dotsOpen = !this.dotsOpen; }, 300)
                        break;
                    case false:
                        setTimeout(()=>{
                            dotsContent.classList.remove('edit-dots__content_close');
                            dotsContent.classList.add('edit-dots__content_open');
                        }, 10)
                        this.dotsOpen = !this.dotsOpen;
                        break;
                    default:
                        break;
                }
            }
        },
        beforeDestroy() {
            document.removeEventListener('click', this.handleClickOutside);
        }
    }
</script>

<style lang="scss" scoped>
.user-profile {
    display: flex;
    justify-content: space-between;
    padding-bottom: 60px;

    &__authors-posts {
        display: flex;
        flex-direction: column;
        width: 56%;

        .authors-posts {
            &__header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 46px;
                font-weight: 600;
                margin-bottom: 40px;
            }

            &__post {
                overflow: hidden;
                border-radius: 10px;
                background-color: #fcfcfc;
                .post {
                    &__img {
                        overflow: hidden;
                        width: 100%;
                        height: 40vh;

                        img {
                            object-fit: cover;
                        }
                    }

                    &__title {
                        display: flex;
                        justify-content: space-between;
                        width: 98%;
                        align-items: center;
                        margin: 20px auto;
                        
                        h2{
                            width: 90%;
                            font-size: 34px;
                            font-weight: 600;
                            color: $accent;
                            text-shadow: 1px 2px 2px #6a6a6a;
                            letter-spacing: 0.07em;
                        }
                    }

                    &__edit-dots {
                        display: flex;
                        align-items:end;
                        cursor: pointer;
                        position: relative;
                        width: 5%;

                        .edit-dots {
                            &__content {
                                position: absolute;
                                left: -270%;
                                bottom: 0;
                                overflow: hidden;

                                ul {
                                    position: relative;
                                    width: 125px;
                                    height: 40px;
                                    transition: left 0.4s ease;

                                    li {
                                        font-size: 14px;
                                        font-weight: normal;
                                        cursor: pointer;
                                        &:hover {
                                            opacity: 0.7;
                                        }
                                    }
                                }
                            }

                            &__content_open ul {
                                left: 0;
                            }

                            &__content_close ul {
                                left: 100%;
                            }

                            &__img {
                                display: flex;
                                align-items:end;
                                transition: all 0.4s;
                                width: 100%;

                                &:hover img{
                                    filter: brightness(0) saturate(100%) invert(92%) sepia(19%) saturate(1826%) hue-rotate(14deg) brightness(85%) contrast(102%);
                                }
                            }
                        }
                    }

                    &__description p {
                        text-align: justify;
                        width: 98%;
                        margin: 0 auto;
                    }

                    &__data {
                        display: flex;
                        justify-content: space-around;
                        background-color: #c8fb101e;
                        margin-top: 20px;
                    }
                }
            }

        }
    }

    &__bio {
        width: 42%;
    }
}
.user-block-wrapper {
    align-items: center;
    width: 100%;
}
.user-block button {
    width: 70%;
    margin-bottom: 15px;
}
.user-block button a {
    color: #000000;
}
.avatar {
    width: 30%;
    border-radius: 50%;
    overflow: hidden;
}
.avatar img {
    width: 100%;
    object-fit: cover;
}
.user-name {
    color: #CAFB10;
    text-shadow: 1px 2px 2px #6a6a6a;
    letter-spacing: 2px;
    font-size: 32px;
    font-weight: 800;
    margin-top: 20px;
}
.user-email {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 600;
}
.view-info {
    margin-bottom: 20px;
    
}
</style>