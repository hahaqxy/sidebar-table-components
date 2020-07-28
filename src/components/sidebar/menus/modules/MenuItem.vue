<template>
  <div class="menu-item-wrapper">
    <template v-for="item in menuData">
      <el-submenu v-if="item.node" :index="item.id" popper-append-to-body>
        <template slot="title">
          <i :class="item.icon" class="svg-icon sub-el-icon"></i>
          <span slot="title">{{item.menu_name}}</span>
        </template>
        <menu-item :menuData="item.node"></menu-item>
      </el-submenu>

      <el-menu-item v-else :index="item.id" :key="item.id">
        <i :class="item.icon" class="svg-icon"></i>
        <span slot="title">{{item.menu_name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
    export default {
      name: 'menu-item',
      props: {
        menuData: {
          type: Array,
          default () {
            return []
          }
        }
      }
    }
</script>
