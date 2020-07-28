<template>
  <el-menu class="navbar" mode="horizontal">
    <nav-svg class="svg-container" :toggleClick="toggleSideBar" :isActive="barEffect.open"></nav-svg>
  </el-menu>
</template>

<script>
    import NavSvg from './modules/navSvg'
    import { mapGetters } from 'vuex'
		export default {
      name: 'navbar',
			components: { NavSvg },
      computed: {
        ...mapGetters(['barEffect'])
      },
      methods: {
        toggleSideBar() {
          this.$store.dispatch('ToggleBarEffect')
        }
      }
    }
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
.navbar{
  height: 50px;
  line-height: 50px;
  .svg-container {
    float: left;
  }
}
</style>
