<script>
import '@fontsource/fredoka-one';
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from './components/AppFooter.vue';

export default {
  components : {AppFooter, AppHeader, AppMain}
}

</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />

</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/variables" as *;

</style>
