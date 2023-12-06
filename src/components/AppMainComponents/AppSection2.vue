<script>
import { store } from "../../store";
export default {
    data() {
    return {
        store,
        activeItem: 0,
    };
  },  

  created() {
    this.store.facultyActive = store.facultyList[0]
  },
  
  methods: {
    getImagePath(imageName) {
        return new URL(`../../assets/img/${imageName}`, import.meta.url).href
    },

    changeFaculty(elem, i) {
        this.activeItem = i,
        console.log(store.facultyActive);
        this.store.facultyActive = elem;
    }

  }       
}
</script>

<template >
    <main>
        <div class="container title">
            Faculties available at EduPrime
        </div>
    
        <div class="subtitle">
            A single university with a load of courses, tailored to satisfy any student's need.
        </div>

        <div class="faculty-list ">
            <div class="wrapper">
                <div class="faculty-card position-relative"
                v-for="(card , i) in store.facultyList"
                :key="i"
                @click="changeFaculty(card , i)"
                :class="{ active: i === activeItem}">

                    <div class="card-image">

                        <img :src="getImagePath(card.image)" alt="" class="faculty-image">
                        
                        <p class="faculty-name">
                            {{ card.name }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="faculty-details mb-4 pt-4">
            <div class="left-section">
                <img :src="getImagePath(store.facultyActive.secondImage)" alt="">
            </div>
            <div class="right-section">
                <div class="title">
                    {{store.facultyActive.name}}
                </div>
                <div class="text">
                    {{store.facultyActive.details}}
                </div>

                <button class="rounded-5">
                    Read more
                </button>
            </div>
        </div>

        <div class="bottom-wave ">
        </div>

    </main>

</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;
@use "../../style/partials/mixins" as *;

main {
    margin-top: 5rem;
    
    .title {
        font-family: $title-family;
        text-align: center;
        font-size: 2.5rem;
        color: $bg_color_7;
    }

    .subtitle {
        margin: auto;
        width: 30%;
        text-align: center;
        color: $text_color_7;
        margin-top: 1rem;
    }

    .faculty-list {
        margin: 2rem 0;
        @include flex(column,center,center);
        box-shadow: 0 0 8px lightgray;
        .wrapper {
            @include flex(row,center, stretch);
            width: 65%;
            .faculty-card {
                aspect-ratio: 1.75;
                outline: 1px solid lightgray;
                padding: 1rem 2rem;
                
                .faculty-image {
                    padding: 1.5rem;
                }
                
                .faculty-name {
                    text-align: center;
                    font-family: $title-family;
                    color: $text_color_3;
                }
            }
            .active {
                background-color: $bg_color_4;
                color: $text_color_1;
                position: relative;

                &:after {
                    content: "";
                    position: absolute;
                    padding: 0.8rem;
                    bottom: 0;
                    left: 50%;
                    transform: 
                    translate(-50%, 50%)
                    rotate(45deg);
                    background-color: $bg_color_4;
                }

                & .faculty-image {
                    color: $text_color_1;
                    filter: brightness(100);
                }
        
                & .faculty-name {
                text-align: center;
                font-family: $title-family;
                color: $text_color_1;
            }
        
            }
            
        }
    }

    .faculty-details {
        @include flex(row,center,center);
        width: 55%;
        margin: auto;
        .left-section{
            width: 50%;
        }
        .right-section {
            width: 50%;
            .text {
                padding-top: 2rem;
                color: $text_color_4;
            }

            button {
                font-family: $title-family;
                padding: 1rem 1.5rem;
                border: 0;
                background-color: $bg_color_4;
                color: $text_color_1;
                margin-top: 2rem;

            }
        }
    }

    .bottom-wave {
        background-image: url(../../assets/svg/svg-0.svg);
        height: 17.5vh;
        background-size: cover;
    }
    
}

</style>