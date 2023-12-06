<script>
export default {
    data() {
        return {
            latestCourses: [
                {   
                    icon:"Decisions-icon.png",
                    name: "Make Better Decisions",
                    teacher: "James Colins",
                    price: "$21.00"
                },
                {
                    icon:"Speaker-icon.png",
                    name: "How to be a speaker",
                    teacher: "James Colins",
                    price: "Free"
                },
                {
                    icon:"Network-icon.png",
                    name: "Network Introductions",
                    teacher: "James Colins",
                    price: "Free"                   
                },
                {
                    icon:"Brand-icon.png",
                    name: "Brand Management",
                    teacher: "James Colins",
                    price: "Free"
                }

            ]
        }
    },
    
    methods: {
    getImagePath(imageName) {
        return new URL(`../../assets/img/${imageName}`, import.meta.url).href
    }
  }
}
</script>

<template >
    <div class="container">
        <div class="section-title">
            Latest Courses
        </div>

        <div class="card-section">
                    <div class="card position-relative" v-for="card in latestCourses">
                        <div class="card-icon">
                            <img :src="getImagePath(card.icon)" alt="">
                        </div>
                        <div class="card-title">
                            {{ card.name }}
                        </div>

                        <div class="teacher">
                            <span class="icon-teacher"><i class="fa-regular fa-user"></i> Teacher:</span>{{ card.teacher }}
                        </div>

                        <div class="price">
                            <span class="icon-price"><i class="fa-solid fa-money-bill"></i> Price:</span>{{ card.price }}
                        </div>

                        <div class="card-btn position-absolute">
                            <button class="rounded-5">
                                <i class="fa-regular fa-eye"></i>
                                <span>
                                    View Course
                                </span>
                            </button>
                        </div>
                    </div>

        </div>

        
    </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;
@use "../../style/partials/mixins" as *;

.container{
    width: 85%;
    padding-top: 3rem;

    .section-title {
        font-size: 3rem;
        font-family: $title-family; 
        padding: 4rem 0 4rem;
    }
    .card-section {
        @include flex(row, center ,center);
        gap: 1.5rem;
        padding-bottom: 5rem;

        .card {
            @include flex(column, center ,center);
            padding: 0rem 1rem 3rem;
            border: none;
            text-align: center;
            box-shadow: 0 0 50px #8a8a8a56;
    
        }        
        .card-icon {
            width: 35%;
            padding: 2rem 0;
        }
        .card-title {
            font-size: 1.5rem;
            font-family: $title-family;
            color: text_color_5;
        }

        .teacher {
            font-size: 1rem;
            color: $text_color_4;
            font-weight: bold;
            .icon-teacher {
                font-family: $text-family;
                color: grey;
                font-weight: lighter;
            }
        }

        .price {
            padding-top: 0.5rem;
            font-size: 1rem;
            color: $text_color_4;
            font-weight: bold;
            .icon-price {
                font-family: $text-family;
                color: grey;
                font-weight: lighter;
            }
        }
        .card-btn {
            width: 80%;
            bottom: 0%;
            left: 50%;
            transform: translate(-50%,50%);

            button {
                width: 85%;
                padding: 1rem 1rem;
                border-radius: 50px;
                border: none;
                background-color: $bg_color_4;
                color: $text_color_1;
    
                span {
                    font-family: $title-family;
                }
            }
        }
    }


}


    
</style>