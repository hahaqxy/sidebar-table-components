<template>
  <div class="home-wrapper" :class="classObj">
    <left-menus class="menus-container" :backgroundColor="backgroundColor" :textColor="textColor" :activeTextColor="activeTextColor">
    </left-menus>
    <div class="main-container">
      <navbar></navbar>
    </div>
  </div>
</template>

<script>
  import LeftMenus from './menus/LeftMenus'
  import Navbar from './navbar/index'

  export default {
    name: "sidebar",
    components: {
      Navbar,
      LeftMenus
    },
    name: 'home',
    data() {
      return {
        backgroundColor: "#304156",
        textColor: "#fff",
        activeTextColor: "#ffd04b",
      }
    },
    computed: {
      barEffect() {
        return this.$store.state.app.barEffect
      },
      classObj() {
        return {
          hideSidebar: !this.barEffect.open,
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/mixin.scss";

  .home-wrapper {
    @include clearfix;
    position: absolute;
    height: 100%;
    width: 100%

  }
</style>
