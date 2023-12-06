<script>
export default {
    data() {
        return {
            upcomingEvents: [
                {
                    type: "Coaching Sessions",
                    date: "20 May 21:30 PM",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nostrum minima laboriosam a quos accusantium sunt quae molestiae quam hic debitis, vel illum. Ipsum dolorem cumque alias blanditiis neque rerum!"
                },
                {
                    type: "Coaching Sessions",
                    date: "24 May 18:00 PM",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nostrum minima laboriosam a quos accusantium sunt quae molestiae quam hic debitis, vel illum. Ipsum dolorem cumque alias blanditiis neque rerum!"
                },
                {
                    type: "Coaching Sessions",
                    date: "12 Feb 13:30 PM",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nostrum minima laboriosam a quos accusantium sunt quae molestiae quam hic debitis, vel illum. Ipsum dolorem cumque alias blanditiis neque rerum!"
                }

            ]
        }
    },

    methods: {
        substringDescription(description) {

            let preview;

            if (description.length > 50) {
                preview = description.substr(0, 50) + '[...]';
            } else {
                preview = description;
            }

            return preview;
        }
    },
}
</script>

<template >
    <main>
        <div class="container">

            <div class="top-section">
                <div class="icon">
                    <img src="../../assets/img/Clock-and-Bell.png" alt="">
                </div>
    
                <div class="section-title">
                    <p class="top-section-title">
                        University Year
                    </p>
                </div>
    
                <div class="container time-line">
                    <div class="top">
                        <div class="description">
                            <div class="title">
                                Demo Class
                            </div>
                            <div class="text">
                                In the first week, students try to accomodatewith the teaching style and choose their optional course.
                            </div>
                        </div>
    
                        <div class="description">
                            <div class="title">
                                Graduation Day
                            </div>
                            <div class="text">
                                On the day of the graduation, all students gather for the ceremony and then network and party among others.
                            </div>
                        </div>
    
                    </div>
    
                    <div class="timeline-img">
                        <img src="../../assets/img/Timeline-Item.png" alt="">
                    </div>
    
                    <div class="bottom">
                        <div class="description">
                            <div class="title">
                                Orentation
                            </div>
                            <div class="text">
                                First day of the University year, all students gather for the opening ceremony and then network with others.
                            </div>
                        </div>
    
                        <div class="description">
                            <div class="title">
                                Evaluation
                            </div>
                            <div class="text">
                                At the end of a semester, students take a general evaluation test for every subject they're learning.
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>

            <div class="bottom-section">
                <div class="icon">
                    <img src="../../assets/img/upcoming-events-calendar-icon.png" alt="">
                </div>

                <div class="section-title">
                    <p class="bottom-section-title">
                        Upcoming Events
                    </p>
                </div>

                <div class="card-section">
                    <div class="card position-relative" v-for="card in upcomingEvents">
                        <div class="card-title">
                            {{ card.type }}
                        </div>

                        <div class="date">
                            <span class="icon-date"><i class="fa-regular fa-calendar-days"></i></span>{{ card.date }}
                        </div>

                        <div class="description">
                            {{ substringDescription(card.description) }}
                        </div>

                        <div class="card-btn position-absolute">
                            <button>
                                <i class="fa-solid fa-plus"></i> 
                                <span>
                                    Find More
                                </span>
                            </button>
                        </div>
                    </div>

                </div>

                <div class="view-btn">
                    <button>
                        View All Events
                    </button>
                </div>
            </div>

            
        </div>
    </main>

    <div class="bottom-wave">
        <img src="../../assets/svg/svg-1.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;
@use "../../style/partials/mixins" as *;

main {
    background-color: $bg_color_4;
    padding: 2rem 0;
    .icon {
        width: 5%;
        margin: auto;
        padding-bottom: 1rem;

    }

    .section-title {
        font-size: 3rem;
        font-family: $title-family;
        color: $text_color_1;
        width: fit-content;
        margin: auto;
    }
    .top-section {
        .top-section-title {
            background-color: $bg_color_010;
        }
        .time-line {
            padding: 3rem;

            .description {
                width: 41.5%;
                text-align: center;
                padding: 0.5rem 3rem;
                color: $text_color_1;
    
                .title {
                    font-family:$title-family;
                    font-size: 1rem;
                    padding-bottom: 0.5rem;
                }
    
                .text {
                    font-size: 0.75rem;
                }
            }
    
            .top {
                @include flex (row, flex-end, flex-start);
            }
            .bottom {
                @include flex (row, flex-start, flex-start);
                .description {
                    width: 37.5%;
                    padding-left: 2rem;
                }
            }
    
        }
    }
    .bottom-section {
        padding-top: 2rem;

        .card-section {
            @include flex(row, center ,center);
            gap: 1rem;
            padding-bottom: 5rem;
            .card {
                @include flex(column, center ,center);
                padding: 2rem 1rem 3rem;
                width: 30%;
                text-align: center;
                box-shadow: 0 0 50px #4545457b;
                .card-title {
                    font-size: 1.5rem;
                    font-family: $title-family;
                    color: text_color_5;
                }

                .date{
                    color: gray;
                    .icon-date {
                        margin-right: 0.5rem;
                    }
                }

                .description {
                    color: grey;
                }

                .card-btn {
                    bottom: 0%;
                    left: 50%;
                    transform: translate(-50%,50%);
                    button {
                        border-radius: 50px;
                        padding: 0.5rem 1rem;
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

        .view-btn {
            text-align: center;

            button {
                box-shadow: 0 0 20px #45454550;;
                border: none;
                border-radius: 50px;
                background-color: $bg_color_3;
                color: $text_color_1;
                font-family: $title-family;
                font-size: 1.5rem;
                padding: 1rem 2rem;
                transition: all 0.3s;

                &:hover {
                    background-color: $bg_color_4;
                    transition: all 0.3s;
                }
            }
        }
    }
}

.bottom-wave {
    position: relative;
    img {
        position: relative;
        left: 0;
        top: -2px;
    }
}


</style>