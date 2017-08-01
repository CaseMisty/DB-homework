<style scoped>
.hello {
  /*width: 500px;*/
}
table {
  margin: 0 auto;
}
.del {
  visibility: hidden;
}
tr:hover .del{
  visibility: visible;
}
.info-row {
  background: #c9e5f5;
}
</style>

<template>
  <div class="hello">
    <form action="">
      <el-input placeholder="产品名称" v-model="chanpinName" ></el-input>
      <el-input type="textarea" :rows="2" v-model="chanpinDes" placeholder="产品描述"></el-input>
      <el-button type="primary" @click="addChanpin">提交</el-button>
    </form>
    <!--<button @click.prevent="getMaterial">获取</button>-->
    <el-table :data="chanpinList" style="margin-top: 20px; width:100%" :row-class-name="tableRowClassName">
          <el-table-column prop="id" label="材料id" style="width: 100px;"></el-table-column>  
          <el-table-column label="材料名" prop="name" style="width: 100px;"></el-table-column>
          <el-table-column label="描述" prop="des"></el-table-column>
      <!--<el-table-column label="操作">
        <template scope="scope">
          <el-button @click="delMaterial(scope.row.id)" type="text" size="small">移除</el-button>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      chanpinName: '',
      chanpinDes: '',
      chanpinList: []
    }
  },
  methods: {
    tableRowClassName (row, index) {
      if (index % 2 === 0) {
        return 'info-row'
      }
      return ''
    },
    addChanpin () {
      this.$http.post('/api/chanpin/addChanpin', {
        chanpinName: this.chanpinName,
        chanpinDes: this.chanpinDes
      }).then((res) => {
        console.log(res)
      }, (err) => {
        console.log(err)
      })
      this.chanpinName = ''
      this.chanpinDes = ''
      this.getList()
    },
    getList () {
      this.$http.get('/api/chanpin/getChanpin')
        .then((res) => {
          if (res.status === 200) {
            console.log('res.data:')
            console.dir(res.data)
            let a = []
            res.data.forEach((item) => {
              let obj = {
                id: item.chanpin_id,
                name: item.chanpin_name,
                des: item.chanpin_des
              }
              a.push(obj)
              this.chanpinList = a
            })
          }
        }).catch(err => console.log(err))
    }
    // delMaterial (id) {
    //   this.$message.warning('将要删除' + id)
    //   this.$confirm('确定要删除此材料吗?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     this.$http.post('/api/material/delMaterial', {id}).then((res) => {
    //       console.log('delMaterial' + res)
    //       if (res.data.status === 'ERROR') {
    //         this.$message('删除出错')
    //       } else {
    //         this.$message.success('删除成功!')
    //         this.getMaterial()
    //       }
    //     })
    //   }).catch(() => {
    //     this.$message('删除失败')
    //   })
    // }
  },
  mounted () {
    this.getList()
  }
}
</script>
