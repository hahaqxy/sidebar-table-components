<template>
  <div id="app">
    <!-- <itable :tableData="tableData" :options="options" :columns="columns" :operates="operates" @handleSelectionChange="handleSelectionChange">
    </itable> -->
    
    <sidebar></sidebar>
  </div>
</template>

<script>
  import itable from './components/table/index.vue'
  import sidebar from './components/sidebar/index.vue'

  export default {
    name: 'App',
    components: {
      itable,
      sidebar
    },
    data() {
      return {
        tableData: [{
            id: '24',
            age: 22,
            birthDate: '2016-05-03',
            note: '467',
            sex: '男',
            country: '中国'
          },
          {
            id: '25',
            age: 20,
            birthDate: '2006-09-03',
            note: '',
            sex: '女',
            country: '中国'
          },
          {
            id: '38',
            age: 22,
            birthDate: '1996-05-01',
            note: '',
            sex: '男',
            country: '中国'
          },
          {
            id: '25',
            age: 20,
            birthDate: '2006-09-03',
            note: '',
            sex: '女',
            country: '中国'
          }
        ], 
        options: {
          stripe: false, 
          mutiSelect: true
        }, 
        columns: [{
            prop: 'id',
            label: '员工账号',
            align: 'center',
          },
          {
            prop: 'age',
            label: '年龄',
            align: 'center',
          },
          {
            prop: 'birthDate',
            label: '出生日期',
            align: 'center',
          },
          {
            prop: 'note',
            label: '备注',
            align: 'center',
          },
          {
            prop: 'sex',
            label: '性别',
            align: 'center',
          },
          {
            prop: 'country',
            label: '国家',
            align: 'center',
          },
        ], 
        operates: {
          width: 200,
          list: [{
              id: '1',
              label: '编辑',
              type: 'warning',
              icon: 'el-icon-edit',
              disabled: false,
              method: (index, row) => {
                this.handleEdit(index, row)
              }
            },
            {
              id: '2',
              label: '删除',
              type: 'danger',
              icon: 'el-icon-delete',
              disabled: false,
              method: (index, row) => {
                this.handleDel(index, row)
              }
            }
          ]
        }
      }
    },
    methods: {
      handleSelectionChange(val) {
        console.log('val:', val)
      },
      handleEdit(index, row) {
        console.log(' index:', index)
        console.log(' row:', row)
      },
      handleDel(index, row) {
        console.log(' index:', index)
        console.log(' row:', row)
      }
    }
  }
</script>

<style>

</style>
