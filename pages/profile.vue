<template>
    <main>
        <section class="user-profile wrapper">
            <div class="user-profile__authors-posts authors-posts">
                <div class="authors-posts__header">
                    <h1>Ваши посты <span>({{ userData.posts.length }})</span></h1>
                    <TheButton class="authors-post__btn-new-post" text="Новый пост" />
                </div>
                <div class="authors-posts__list">
                    <article class="authors-posts__post post"
                    v-for="userPost in userData.posts" :key="userPost">
                        <div class="post__img">
                            <img :src="'/images/posts/' + userPost.img" :alt="userPost.title">
                        </div>
                        <div class="post__title">
                            <h2>{{ userPost.title }}</h2>
                        </div>
                        <ul class="post__data">
                            <li>
                                <div class="post__icons"><img src="/images/icons/date.svg" alt="Дата публикации"></div>
                                {{ userPost.data.publishedAt }}
                            </li>
                            <li>
                                <div class="post__icons"><img src="/images/icons/save.svg" alt="Лайки"></div>
                                {{ userPost.data.likes }}
                            </li>
                            <li>
                                <div class="post__icons"><img src="/images/icons/comment.svg" alt="Коментарии"></div>
                                {{ userPost.data.comments.length }}
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
            <div v-show="!editUserProfileInfo" class="user-profile__bio bio">
                <div class="bio__avatar">
                    <img :src="'/images/avatars/' + userData.photo" :alt="userData.user">
                </div>
                <span class="bio__name" ref="bioName">{{ userData.user }}</span>
                <span class="bio__email" ref="bioEmail">{{ userData.email }}</span>
                <TheButton class="bio__btn-edit" text="Редактировать профиль" @click.prevent="toswitch('editUserProfileInfo')" />
                <TheButton class="bio__btn-exit" text="ВЫЙТИ" @click.prevent="redirectToMainPage"/>
            </div>
            <div v-show="editUserProfileInfo" class="user-profile__edit edit">
                <form action="" method="POST">
                    <div class="edit__avatar">
                        <img :src="'/images/avatars/' + userData.photo" :alt="userData.user">
                    </div>
                    <label class="edit__name" for="username">Имя: 
                        <input type="text" name="username" id="usernameEdit" ref="editName" :value="userData.user">
                    </label>
                    <label class="edit__email" for="useremail">Email: 
                        <input type="text" name="useremail" id="useremailEdit" ref="editEmail" :value="userData.email">
                    </label>
                </form>
                <TheButton class="edit__btn-save" type="submit" text="Сохранить" @click="editProfileInfo" />
            </div>
        </section>
    </main>        
</template>

<script>
    import JSON from '~/server/posts.json';
    import TheButton from '~/components/TheButton.vue';

    export default {
        components: { TheButton },
        data() {
            return {
                dotsOpen: false,
                editUserProfileInfo: false,
                userData: JSON.blogs[0]
            }
        },
        methods: {
            redirectToMainPage() {
                this.$router.replace('/');
            },
            toswitch(data) {
                this[data] = !this[data];
            },
            editProfileInfo() {
                this.$refs.bioName.innerText = this.$refs.editName.value;
                this.$refs.bioEmail.innerText = this.$refs.editEmail.value;

                this.toswitch('editUserProfileInfo');
            }
        },
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
        width: 70%;

        .authors-posts {
            &__header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                h1 {
                    font-size: 28px;
                    text-transform: uppercase;
                    font-weight: 600;

                    span {
                        font-size: 22px;
                        font-weight: 100;
                    }
                }

                .authors-post__btn-new-post {
                    font-size: 10px;
                }
            }

            &__list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 2vh 0;
            }

            &__post {
                overflow: hidden;
                border-radius: 10px;
                background-color: #fcfcfc;
                width: calc(33% - 2%);
                height: fit-content;
                padding-bottom: 10px;
                cursor: pointer;
                box-shadow: 0px 3px 5px #00000071;

                &:hover .post__img img {
                    transform: scale(1.2);
                }

                &:hover {
                    opacity: 0.8;
                }
                .post {
                    &__img {
                        overflow: hidden;
                        max-height: 140px;
                        width: 100%;

                        img {
                            transition: all 0.5s;
                            object-fit: cover;
                        }
                    }

                    &__title {
                        width: 98%;
                        margin: 10px;
                        
                        h2{
                            font-size: 18px;
                            font-weight: 600;
                            color: $accent;
                            text-shadow: 1px 2px 2px #6a6a6a;
                            letter-spacing: 0.1em;
                            text-transform: uppercase;
                        }
                    }

                    &__data {
                        display: flex;
                        justify-content: space-around;
                        background-color: #c8fb101e;
                        padding: 5px 0;
                        box-shadow: 0px 1px 5px #0000001a;

                        li {
                            display: flex;
                            align-items: center;
                            gap: 5px;

                            .post__icons {
                                width: 20px;
                                padding-top: 3px;
                            }
                        }
                    }
                }
            }
        }
    }

    &__bio,
    &__edit {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .bio {
        &__avatar {
            width: 40%;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
                object-fit: cover;
            }
        }

        &__name {
            color: #000000;
            letter-spacing: 0.07em;
            font-size: 32px;
            font-weight: 800;
        }

        &__email {
            font-size: 14px;
            font-weight: 600;
        }

        &__btn-edit,
        &__btn-exit {
            width: 70%;
            font-size: 10px;
        }

        &__btn-exit {
            opacity: 0.8;
            background-color: #c41010;
            box-shadow: 1px 2px 5px #00000046;

            &:hover {
                opacity: 1;
            }
        }
    }
    .edit {
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        &__avatar {
            width: 40%;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            cursor: pointer;

            &:hover::after {
                background-size: 35px;
                background-repeat: repeat;
            }

            &::after {
                content: '';
                position: absolute;
                background-image: url('/images/icons/edit.svg');
                background-position: center;
                background-size: 40px;
                background-repeat: no-repeat;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #f0f0f04b;
                transition: all 0.6s ease;
            }

            img {
                width: 100%;
                object-fit: cover;
                filter: blur(1px);
            }
        }

        &__name,
        &__email {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.07em;

            input {
                color: #000000ab;
                padding: 5px;

                &:focus {
                    color: #000000;
                }
            }
        }

        &__btn-save {
            width: 70%;
            font-size: 10px;
        }
    }
}
</style>