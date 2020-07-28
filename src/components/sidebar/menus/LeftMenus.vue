<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu mode="vertical"
      :background-color="backgroundColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      :collapse="isCollapse"
      default-active="1"
      @open="handleOpen" @close="handleClose">
      <menu-item :menuData="menuData"></menu-item>
    </el-menu>
  </el-scrollbar>
</template>
<script>
  import { mapGetters } from 'vuex'
  import MenuItem from './modules/MenuItem'
  export default {
    name: 'left-menus',
    components: {
      MenuItem
    },
    props: {
      backgroundColor: {
        type: String,
        default() {
          return '#304156'
        }
      },
      textColor: {
        type: String,
        default() {
          return '#fff'
        }
      },
      activeTextColor: {
        type: String,
        default() {
          return '#ffd04b'
        }
      }
    },
    computed: {
      ...mapGetters([
        'barEffect'
      ]),
      isCollapse() {
        return !this.barEffect.open
      }
    },
    data() {
      return {
        menuData: [
          {
            "id": '1',
            "menu_name": "首页",
            "icon": 'el-icon-s-home'
          },
          {
            "id": '2',
            "menu_name": "嵌套路由",
            "icon": 'el-icon-menu',
            "node": [{
                "id": '3',
                "menu_name": "菜单 1",
                "node": [
                  {
                    "id": '4',
                    "menu_name": "菜单 1-1"
                  },
                  {
                  "id": '5',
                  "menu_name": "菜单 1-2",
                  "node": [{
                      "id": '6',
                      "menu_name": "菜单 1-2-1"
                    },
                    {
                      "id": '7',
                      "menu_name": "菜单 1-2-2"
                    }
                  ]
                },
                {
                  "id": '8',
                  "menu_name": "菜单 1-3"
                }]
              },
              {
                "id": '9',
                "menu_name": "菜单 2",
              }
            ]
          },
          {
            "id": '10',
            "menu_name": "表格",
            "icon": "el-icon-s-order",
            "node": [{
              "id": '11',
              "menu_name": "表格1"
            }]
          },
          {
            "id": '12',
            "menu_name": "图片",
            "icon": "el-icon-picture"
          },
          {
            "id": '13',
            "menu_name": "文档",
            "icon": "el-icon-s-promotion"
          }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
