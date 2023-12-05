<script>
import { store } from "../../store";
export default {
    data() {
    return {
        store,
        activeItem: 0,
    };
  },  
  
  methods: {
    getImagePath(imageName) {
        return new URL(`../../assets/img/${imageName}`, import.meta.url).href
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

        <div class="faculty-list">
            <div class="wrapper">
                <div class="faculty-card position-relative"
                v-for="(card , i) in store.facultyList"
                :key="i"
                :class="{ active: i === activeItem}"
                @click="activeItem = i">
                    <div class="card-image" 
                        >
                        <img :src="getImagePath(card.image)" alt="" class="faculty-image">
                        
                        <p class="faculty-name">
                            {{ card.name }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="faculty-details">
            <div class="left-section">

            </div>
            <div class="right-section"></div>
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
                    padding: 1rem;
                    bottom: -9px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: $bg_color_4;
                    transform: rotate(45deg);
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
        width: 60%;
        .left-section{
            width: 50%;
        }
        .right-section {
            width: 50%;
        }
    }
    
}

</style>