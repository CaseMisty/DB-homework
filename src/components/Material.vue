<style scoped>
.hello {
  width: 400px;
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
</style>

<template>
  <div class="hello">
    <form action="">
      <el-row :gutter="10">
        <el-col :span="18">
          <el-input v-model="materialName" placeholder="添加材料"></el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="addMaterial">提交</el-button>
        </el-col>
      </el-row>
    </form>
    <!--<button @click.prevent="getMaterial">获取</button>-->
    <el-table :data="materialList" style="margin-top: 20px;">
      <el-table-column prop="id" label="材料id"></el-table-column>
      <el-table-column label="材料名" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button @click="delMaterial(scope.row.id)" type="text" size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      materialName: '',
      materialList: []
    }
  },
  methods: {
    addMaterial () {
      let mName = this.materialName
      this.$http.post('/api/material/addMaterial', {
        materialName: mName
      }).then((res) => {
        console.log(res)
      }, (err) => {
        console.log(err)
      })
      this.materialName = ''
      this.getMaterial()
    },
    getMaterial () {
      this.$http.get('/api/material/getMaterial')
        .then((res) => {
          if (res.status === 200) {
            console.log('res.data:')
            console.dir(res.data)
            let a = []
            res.data.forEach((item) => {
              let obj = {
                id: item.material_id,
                name: item.material_name
              }
              a.push(obj)
              this.materialList = a
            })
          }
        }).catch(err => console.log(err))
    },
    delMaterial (id) {
      this.$message.warning('将要删除' + id)
      this.$confirm('确定要删除此材料吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.post('/api/material/delMaterial', {id}).then((res) => {
          console.log('delMaterial' + res)
          if (res.data.status === 'ERROR') {
            this.$message('删除出错')
          } else {
            this.$message.success('删除成功!')
            this.getMaterial()
          }
        })
      }).catch(() => {
        this.$message('删除失败')
      })
    }
  },
  mounted () {
    this.getMaterial()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
