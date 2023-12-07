<script>
export default {
    data() {
        return {
            logoImg: [
                "partner-2.png",
                "partner-3.png",
                "partner-4.png",
                "partner-5.png",
                "partner-6.png",
                "partner-8.png",
                "partner-1.png",
                "partner-7.png",
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
        <div class="section-title text-center">
            Partners
        </div>
    
        <div class="text text-center m-auto">
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy
        </div>

        <div class="partners-logos">
    
            <div class="logo" v-for="logo in logoImg">
                <img :src="getImagePath(logo)" alt="">
            </div>

        </div>

        
    </div>

    <div class="bottom-wave">
    </div>

</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;
@use "../../style/partials/mixins" as *;
.container {
    padding: 2rem 0;
    .section-title {
        font-family: $title-family;
        font-size: 3rem;
        color: $text_color_5;
        padding-bottom: 2rem;
    }

    .text {
        width: 40%;
        font-size: 1rem;
        color: $text_color_7;
    }

    .partners-logos {
        padding-top: 2rem;
        @include flex(row, center, flex-start);
        gap: 2rem;
        .logo {
            height: 8vh;
            width: fit-content;
            opacity: 0.4;
            &:hover {
                opacity: 1;
            }

            img {
                height: 100%;
            }
        }
    }

    
}

.bottom-wave {
    height: 40vh;
    background-color: $bg_color_011;
    background-image: url(../../assets/img/background-wave3.png);
}

    
</style>