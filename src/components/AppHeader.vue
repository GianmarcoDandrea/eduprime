<script>
import {store} from "../store";

export default {
    data() {
    return {
        store,
    };
  },
            
}
</script>

<template >
    <header>
        <div class="container-fluid">
            <div class=" rigth-section py-3 rigth-section">
                <img src="../assets/img/theme_eduprime_logo.png" alt="" class="logo">
            </div>

            <div class="left-section">
                <ul class="link-list">
                    <li v-for="menu in store.headerLinkMenu" class="link-menu-list">
                        <a href="" class="text-decoration-none link-menu">
                            {{ menu }} <i class="fa-solid fa-caret-down"></i>
                        </a>
                    </li>
                    <li v-for="link in store.headerLinkList">
                        <a href="" class="text-decoration-none">
                            {{ link }}
                        </a>
                    </li>
                </ul>

                <a class="view-btn rounded-5">
                    VIEW COURSES
                </a>
            </div>

        </div>

    </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;
// reset settings

ol, ul, dl {
margin:0;
}

header {
    background-color: $bg_color_4;
    font-family: $title-family;

    .container-fluid {
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
                    margin: 0 0.5rem;
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
                padding: 0.9rem 1.75rem;
                text-decoration: none;
                color:$text_color_1;
                background-color: $bg_color_3;

            }

        }
    }
}
    
</style>