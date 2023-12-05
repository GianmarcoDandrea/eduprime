<script>
import "@fortawesome/fontawesome-free/css/all.css";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      headerNavItem : {
        headerLinkMenu: [
            "Home",
            "Courses",
            "About Us",
            "News",
            "Pages",
        ],
        headerLinkList : [
            "Contact",
            "Purchase"
        ],
      }
    }
},
  components : {AppFooter, AppHeader, AppMain}
}

</script>

<template>
  <AppHeader :item="headerNavItem"/>
  <AppMain />
  <AppFooter />

</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
