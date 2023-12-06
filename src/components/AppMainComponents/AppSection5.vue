<script>
export default {
            
}
</script>

<template >
    <main>
        <div class="container">
            <div class="title">
                Subscribe Now to Our Newsletter!
            </div>
    
            <div class="email">
                <div class="email-bar">
                    <input type="email" placeholder="Email address..." class="w-75">
                    <button>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;
@use "../../style/partials/mixins" as *;
main {
    padding: 3rem 0;
    background-color: $bg_color_4;
    .container {
        width: 100%;
        @include flex(row, space-around, center);
    
        .title {
            width: 60%;
            font-family: $title-family;
            font-size: 2rem;
            color: $text_color_1;
        }
    
        .email {
            width: 40%;
            @include flex(row, space-between, center);
            background-color: $bg_color_1;
            border-radius: 50px;
            padding-left: 1rem;

            .email-bar {
                @include flex(row, space-between, center);
                width: 100%;
                input {
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
                    @include flex(row, center, center);
                    width: 10%;
                    padding: 1rem;
                    border-radius: 50px;
                    border: none;
                    background-color: $bg_color_3;
                    color: $text_color_1;
                }
            }
    
                
        }
    }
}
    
</style>