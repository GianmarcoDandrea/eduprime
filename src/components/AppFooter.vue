<script>
import { store } from "../store"
export default {
    props: {
        item: Object,
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template >
    <main class="position-relative">

        <div class="container-fluid">

            <div class="left-section w-33 px-2">

                <div class="logo">
                    <img src="../assets/img/theme_eduprime_logo.png" alt="">
                </div>

                <div class="text">
                    {{ store.eduPrimeDescription }}
                </div>

                <div class="social-icon w-75">
                    <a href="">
                        <i class="fa-brands fa-facebook-f rounded-5"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-x-twitter rounded-5"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-instagram rounded-5"></i>
                    </a>
                </div>
            </div>

            <div class="central-section w-33 px-2">

                <div class="left-section">
                    <ul>
                        <p class="list-title">Get EduPrime</p>
                        <li v-for="link in item.getEduPrime">
                            <a href="" class="text-decoration-none">
                                {{ link }}
                            </a>
                        </li>
                    </ul>

                </div>

                <div class="right-section">
                    <ul>
                        <p class="list-title">Networking</p>
                        <li v-for="link in item.networking">
                            <a href="" class="text-decoration-none">
                                {{ link }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="right-section w-33 px-2">

                <div class="search w-75">
                    <input type="text" placeholder="Search..." class="px-4 py-1">
                    <button>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div class="categories w-75">
                    <p class="categories-title pt-4">
                        Search categories
                    </p>
                    <div class="badges">
                        <div class="badge rounded-5" v-for="badge in store.categoriesList">
                            <a href="" class="text-decoration-none">
                                {{ badge }}
                            </a>
                        </div>

                    </div>
                </div>

                <div class="credits pt-3">
                    <p>
                        ModelTheme. All rigths reserved.
                    </p>
                </div>
            </div>
        </div>

        <div class="float-menu position-absolute">
            <a href="" class="menu-item">
                <img src="../assets/svg/svg-3.svg" alt="">
                <span>Purchase Theme</span>
            </a>

            <a href="" class="menu-item">
                <img src="../assets/svg/svg-2.svg" alt="">
                <span>Releted Themes</span>
            </a>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins.scss" as *;

// COMMON
.w-33 {
    width: calc(100% / 3);
}


main {
    background-color: $bg_color_4;
    padding-top: 3rem;
    padding-bottom: 4rem;

    .container-fluid {
        @include flex(row, center, flex-start);
        width: 75%;

        .left-section {
            @include flex(column, center, flex-start);

            .logo {
                width: 60%;
            }

            .text {
                padding: 2rem 0;
                color: $text_color_1;
                font-size: 0.9rem;
            }

            .social-icon {
                @include flex(row, flex-start, center);
                gap: 1.5rem;
                font-size: 1.2rem;
                color: $text_color_1;

                a {
                    @include flex(row, center, center);
                    text-decoration: none;
                    width: 20%;
                    aspect-ratio: 1;
                    padding: 0.4rem;
                    border: 2px solid $bg_color_3;
                    color: $text_color_1;
                    border-radius: 50%;
                }

            }

        }

        .central-section {
            @include flex(row, center, center);

            .list-title {
                font-family: $title-family;
                font-size: 1.3rem;
                color: $text_color_1;
                padding-bottom: 1rem;
            }

            li {
                line-height: 2.4rem;
                list-style-type: none;

                a {
                    color: $text_color_1;
                    font-size: 0.9rem;
                }
            }

            .left-part {
                width: 50%;
                padding: 0 0.5rem;
            }

            .right-part {
                width: 50%;
                padding: 0 0.5rem;
            }
        }

        .right-section {
            @include flex(column, center, flex-end);

            .search {
                background-color: $bg_color_1;
                border-radius: 50px;

                input {
                    border-radius: 50px;
                    width: 75%;
                    border: none;
                    background-color: $bg_color_1;
                    outline: none;

                    &:focus-visible {
                        border: none;
                        outline: none;
                    }
                }

                button {
                    width: 25%;
                    border-radius: 50px;
                    aspect-ratio: 1;
                    border: none;
                    background-color: $bg_color_3;
                    color: $text_color_1;
                }

            }

            .categories {
                @include flex(column, center, flex-end);

                .categories-title {
                    color: $text_color_1;
                    font-family: $title-family;
                }

                .badges {
                    @include flex(row, flex-end, center, wrap);
                    gap: 0.5rem;

                    .badge {
                        padding: 0.5rem 0.5rem;
                        border: 1px solid $text_color_1;

                        a {
                            text-transform: uppercase;
                            color: $text_color_1;
                        }
                    }

                }
            }

            .credits {
                color: $text_color_2;
            }
        }
    }

    .float-menu {
        width: 10%;
        bottom: 30px;
        left: 30px;


        .menu-item {
            @include flex (row, flex-start, center);
            padding: 0.2rem 0.4rem;
            margin: 0.6rem 0;
            background-color: $bg_color_6;
            border-radius: 3px;
            box-shadow: 0 5px 10px #2c2c2c;
            text-decoration: none;


            img {
                width: 9%;
            }

            span {
                color: $text_color_1;
                margin-left: 0.2rem;
                font-size: 0.8rem;
            }
        }
    }
}</style>