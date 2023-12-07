<script>
import {store} from "../store";

export default {
    props : {
        item: Object,
    },
    data() {
    return {
        store,
    };
  },
            
}
</script>

<template >
    <header>
        <nav class="container-fluid">
            <div class=" rigth-section rigth-section">
                <img src="../assets/img/theme_eduprime_logo.png" alt="" class="logo">
            </div>

            <div class="left-section">
                <ul class="link-list">
                    <li v-for="menu in item.headerLinkMenu">
                        <a href="" class="text-decoration-none">
                            {{ menu }} <i class="fa-solid fa-caret-down"></i>
                        </a>
                    </li>
                    <li v-for="link in item.headerLinkList">
                        <a href="" class="text-decoration-none">
                            {{ link }}
                        </a>
                    </li>
                </ul>

                <button class="view-btn rounded-5 text-decoration-none">
                    VIEW COURSES
                </button>
            </div>

        </nav>

        <div class="hero position-relative">
            <div class="container">
                <div class="wrapper">

                    <div class="hero-title">
                        Key To Your Success  
                    </div>
    
                    <div class="hero-text">
                        {{ store.eduPrimeDescription }}
                    </div>
                    <div class="hero-btn">
                        <button class="search-btn rounded-5">
                            <span>
                                <i class="fa-solid fa-magnifying-glass me-1"></i>
                            </span>
                            Search courses
                        </button>

                        <button class="apply-btn rounded-5">
                            <span>
                                <i class="fa-solid fa-user-plus"></i>
                            </span>
                            Apply for university
                        </button>
                    </div>

                </div>


            </div>
            <div class="side-menu position-absolute rounded-end">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-book-open"></i>
                <i class="fa-solid fa-gear"></i>
    
            </div>
        </div>

        <div class="bottom-wave position-relative">
            <img src="../assets/img/Wave-1.png" alt="">

            <div class="pop-up position-absolute">
                Purchese EduPrime on Envato Marker.
            </div>
        </div>


    </header>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

// reset settings
ul{
margin:0;
}

header {
    background-image:
    linear-gradient($bg_color_5, $bg_color_5,),
    url(../assets/img/theme_slider2_bg-1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 0.5rem;

    nav {
        font-family: $title-family;
        width: 90%;
        @include flex(row, space-between, center);
        .rigth-section {
            width: 20%
        }

        .left-section {
            @include flex(row, center, center);
            .link-list {
                @include flex(row, center, center );
                list-style-type: none;
                font-size: 0.9rem;
        
                li {
                    margin: 0 0.65rem;
                }
                
                a {
                    @include flex(row, center, center);
                    color:$text_color_1;
                    .fa-caret-down {
                        font-size: 0.5rem;
                        margin-left: 0.4rem;
                    }
                }
    
                li:first-of-type a:first-child {
                    color:$text_color_2;
                }    
                
            }

            .view-btn {
                font-size: 0.9rem;
                margin-left: 1.5rem;
                padding: 1rem 2rem;
                color:$text_color_1;
                background-color: $bg_color_3;
                transition: all 0.3s;
                border: none;

                &:hover {
                    background-color: $bg_color_1;
                    color: $text_color_3;
                    transition: all 0.3s;
                }

            }

        }
    }

    .hero {
        @include flex(row, center, center);
        .container {
            @include flex(column, center, center);
            margin-top: 3rem;
            .wrapper {
                @include flex(column, center, center);
                margin-top: 3rem;
                width: 50%;
                .hero-title {
                    margin-top: 3rem;
                    color: $text_color_1;
                    font-family: $title-family;
                    font-size: 3.5rem;
                }
                .hero-text {
                    padding-top: 1.5rem;
                    padding-bottom: 2rem;

                    color: $text_color_1;
                    font-size: 1.2rem;
                    text-align: center;
                }

                .hero-btn {
                    @include flex(row, center, center);
                    padding: 1rem 0;
                    gap: 2rem;
                    margin-bottom: 5rem;
                    button {
                        font-family: $title-family;
                        font-size: 0.9rem;
                        border: none;
                        background-color: rgba(0,0,0,0);
                        padding: 1.3rem 2.3rem;
                    }

                    .search-btn {
                        background-color: $bg_color_3;
                        color: $text_color_1;
                    }

                    .apply-btn {
                        background-color: $bg_color_1;
                        color: $text_color_3;
                    }

                }

            }
        }

        .side-menu {
            font-size: 1.15rem;
            @include flex(column, center, center);
            padding: 1rem 0.6rem;
            gap: 1rem;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background-color: $bg_color_3;
            color: $text_color_1;
            box-shadow: 0px 0px 15px $text_color_7;
        }


    }

    .bottom-wave {
        .pop-up {
            text-align: center;
            left: 30px;
            bottom: 5px;
            background-color: $bg_color_012;
            color: $text_color_1;
            border-radius: 5px;
            font-size: 0.7rem;
            padding: 0.3rem 0.5rem;

            &:after {
                content: "";
                position: absolute;
                padding: 0.2rem;
                bottom: 0;
                left: 50%;
                transform: 
                translate(-50%, 50%)
                rotate(45deg);
                background-color: $bg_color_8;
                z-index: 0;
            }

        }
    }
}

    
</style>