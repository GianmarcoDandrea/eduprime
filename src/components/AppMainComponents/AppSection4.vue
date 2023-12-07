<script>
export default {
    data() {
        return {
            latestCourses: [
                {
                    icon: "Decisions-icon.png",
                    name: "Make Better Decisions",
                    teacher: "James Colins",
                    price: "$21.00"
                },
                {
                    icon: "Speaker-icon.png",
                    name: "How to be a speaker",
                    teacher: "James Colins",
                    price: "Free"
                },
                {
                    icon: "Network-icon.png",
                    name: "Network Introductions",
                    teacher: "James Colins",
                    price: "Free"
                },
                {
                    icon: "Brand-icon.png",
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

        <div class="details-section">
            <div class="top">
                <div class="container-fluid py-5">
                    <div class="left-section">
                        <img src="../../assets/img/Exam-icon.png" alt="">

                        <div class="title py-2">
                            The most efficient examination method
                        </div>

                        <div class="text">
                            EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the
                            evaluation of our students. Every teacher from our university has an influence on how students
                            are evaluated at his/her subject.
                        </div>

                        <button class="rounded-5">
                            Discover the Method
                        </button>
                    </div>
                    <div class="rigth-section">
                        <img src="../../assets/img/Exam-Illustration.png" alt="">
                    </div>
                </div>

            </div>

            <div class="bottom">
                <div class="container-fluid py-5">
                    <div class="left-section">
                        <img src="../../assets/img/Girl-Illustration.png" alt="">
                    </div>
                    <div class="rigth-section">
                        <img src="../../assets/img/Exam-icon-1.png" alt="">

                        <div class="title py-2">
                            Variable fees for international students
                        </div>

                        <div class="text">
                            EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the
                            evaluation of our students. Every teacher from our university has an influence on how students
                            are evaluated at his/her subject.
                        </div>

                        <button class="rounded-5">
                            List of Fees
                        </button>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;
@use "../../style/partials/mixins" as *;

.container {
    width: 85%;
    padding: 3rem 3rem;

    .section-title {
        font-size: 3rem;
        font-family: $title-family;
        padding: 4rem 0 4rem;
    }

    .card-section {
        @include flex(row, center, center);
        gap: 1.5rem;
        padding-bottom: 5rem;

        .card {
            @include flex(column, center, center);
            padding: 0rem 1rem 3rem;
            border: none;
            text-align: center;
            box-shadow: 0 0 50px #8a8a8a56;

            .card-icon {
                width: 35%;
                padding: 2rem 0;
            }

            .card-title {
                font-size: 1.3rem;
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
                transform: translate(-50%, 50%);

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

    .details-section {
        .top {
            .container-fluid {
                width: 75%;
                @include flex(row, space-between, center);

                .left-section {
                    @include flex(column, center, flex-start);
                    width: 45%;

                    img {
                        width: 15%;
                    }

                    .title {
                        font-family: $title-family;
                        font-size: 2.5rem;
                        color: $text_color_5;
                    }

                    .text {
                        font-family: $text-family;
                        font-size: 0.9rem;
                        color: $text_color_7;
                    }

                    button {
                        margin-top: 2rem;
                        font-family: $title-family;
                        font-size: 0.9rem;
                        border: none;
                        background-color: $bg_color_4;
                        color: $text_color_1;
                        transition: all 0.3s;
                        padding: 1.25rem 2rem;

                        &:hover {
                            background-color: $bg_color_3;
                            transition: all 0.3s;
                        }
                    }
                }

                .rigth-section {
                    width: 45%;
                }
            }
        }

        .bottom {
            .container-fluid {
                width: 75%;
                @include flex(row, space-between, center);

                .left-section {
                    width: 45%;
                }

                .rigth-section {
                    @include flex(column, center, flex-start);
                    width: 45%;

                    img {
                        width: 15%;
                    }

                    .title {
                        font-family: $title-family;
                        font-size: 2.5rem;
                        color: $text_color_5;
                    }

                    .text {
                        font-family: $text-family;
                        font-size: 0.9rem;
                        color: $text_color_7;
                    }

                    button {
                        margin-top: 2rem;
                        font-family: $title-family;
                        font-size: 0.9rem;
                        border: none;
                        background-color: $bg_color_4;
                        color: $text_color_1;
                        transition: all 0.3s;
                        padding: 1.25rem 2rem;

                        &:hover {
                            background-color: $bg_color_3;
                            transition: all 0.3s;
                        }
                    }
                }

            }
        }

    }


}</style>