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
      },
      footerNavItem : {
        getEduPrime: [
          "Request a website",
          "Browse Themes",
          "Payment options",
          "Support System",
          "Checkout",
          "Purchase Theme"
        ],
        networking: [
          "Purchese Themse",
          "Our Benefits",
          "Our Team",
          "Our Services",
          "Other Product",
          "My Account"
        ]
      }
    }
},
  components : {AppFooter, AppHeader, AppMain}
}

</script>

<template>
  <a href="#AppHeader" class="back-to-top">
    <img src="../src/assets/img/back-to-top-arrow.svg" alt="">
  </a>
  <AppHeader :item="headerNavItem" id="AppHeader"/>
  <AppMain />
  <AppFooter :item="footerNavItem"/>


</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/variables" as *;
@use "./style/partials/mixins" as *;

.back-to-top {
  @include flex(row, center, center);
  background-color: $bg_color_3;
  position: fixed;
  width: 3%;
  aspect-ratio: 1;
  z-index: 999;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
}


</style>
