<script>
import AppSection1 from "./AppMainComponents/AppSection1.vue";
import AppSection2 from "./AppMainComponents/AppSection2.vue";
import AppSection3 from "./AppMainComponents/AppSection3.vue";
import AppSection4 from "./AppMainComponents/AppSection4.vue";
import AppSection5 from "./AppMainComponents/AppSection5.vue";
import AppSection6 from "./AppMainComponents/AppSection6.vue";

export default {
    components: { AppSection1, AppSection2, AppSection3, AppSection4, AppSection5, AppSection6 }
}
</script>

<template >
    <AppSection1 />
    <AppSection2 />
    <AppSection3 />
    <AppSection4 />
    <AppSection5 />
    <AppSection6 />
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins.scss" as *;
</style>