<script>
export default {
            
}
</script>
<template >
    <div class="browse-course">
        <div class="container-fluid py-5">
            <div class="left-section">
                <img src="../../assets/img/Books-icon.png" alt="">

                <div class="title py-2">
                    Thousands of coures for any type of students
                </div>

                <div class="text">
                    At EduPrime , it doesn't matter what domain you wish to pursue a carrer in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the numbers of courses it provides.
                </div>

                <button class="rounded-5">
                    Browse through courses
                </button>
            </div>
            <div class="rigth-section">
                <img src="../../assets/img/Graduation-Illustration.png" alt="">
            </div>

            
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/variables" as *;
@use "../../style/partials/mixins" as *;

.browse-course {
    background-image: url(../../assets/img/home-background.png);
    background-size: cover;
    background-repeat: no-repeat;

    .container-fluid {
        width: 65%;
        @include flex(row, flex-start, center);

        .left-section {
            @include flex(column, center, flex-start);
            width: 50%;

            img {
                width: 10%;
            }
            .title {
                font-family: $title-family;
                font-size: 2rem;
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
                background-color: $bg_color_3;
                color: $text_color_1;
                transition: all 0.3s;
                padding: 1rem 2rem;

                &:hover {
                    background-color: $bg_color_4;
                    transition: all 0.3s;
                }
            }
        }

        .rigth-section {
            width: 50%;
        }
    }
}
    
</style>