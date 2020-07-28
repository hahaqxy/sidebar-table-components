<template>
  <div class="table">
    <el-table :data="tableData" :stripe="options.stripe" style="width: 100%" border
      @selection-change="handleSelectionChange">
      <!--增加索引-->
      <el-table-column type="index" min-width="1" align="center">
      </el-table-column>
      <!--选择框-->
      <el-table-column type="selection" min-width="3" align="center">
      </el-table-column>
      <!--数据列-->
      <template v-for="(column, index) in columns">
        <el-table-column :prop="column.prop" :label="column.label" :align="column.align" min-width="2">
        </el-table-column>
      </template>
      <!-- 操作组 -->
      <el-table-column label="操作" align="center" min-width="4">
        <template slot-scope="scope">
          <template v-for="(btn, index) in operates.list">
            <el-button :type="btn.type" size="mini" :icon="btn.icon" :disabled="btn.disabled" @click="btn.method(scope.$index,scope.row)">{{ btn.label }}
            </el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "itable",
    props: {
      tableData: {
        type: Array,
        default () {
          return []
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      operates: {
        type: Object,
        default () {
          return {}
        }
      },
      options: {
        type: Object,
        default () {
          return {
            stripe: false,
            highlightCurrentRow: false
          }
        }
      }
    },
    data() {
      return {
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val
        this.$emit('handleSelectionChange', val)
      }
    }
  }
</script>

<style scoped>

</style>
