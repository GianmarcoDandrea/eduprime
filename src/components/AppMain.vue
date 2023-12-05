<script>
import AppSection1 from "./AppMainComponents/AppSection1.vue";
import AppSection2 from "./AppMainComponents/AppSection2.vue";
import AppSection3 from "./AppMainComponents/AppSection3.vue";

export default {
    components: {AppSection1, AppSection2, AppSection3}        
}
</script>

<template >
    <AppSection1 />
    <AppSection2 />
    <AppSection3 />
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins.scss" as *;

    
</style>