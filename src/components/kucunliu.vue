<style scoped>
.hello {
  width: 500px;
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
    <el-button @click.prevent="getList" :loading="isGetting">刷新列表</el-button>
    <!--<form action="">
      <el-input placeholder="产品名称" v-model="chanpinName" ></el-input>
      <el-input v-model="chanpinDes" placeholder="产品描述"></el-input>
      <el-button type="primary" @click="addChanpin">提交</el-button>
    </form>-->
    <!--<button @click.prevent="getMaterial">获取</button>-->
    <el-table :data="list" style="margin-top: 20px;">
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column label="类型" prop="des"></el-table-column>
      <el-table-column label="时间" prop="time"></el-table-column>
      <el-table-column label="操作数量" prop="num"></el-table-column>
      <!--<el-table-column label="操作">
        <template scope="scope">
          <el-button @click="open(scope.row)" type="text" size="small">入库</el-button>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
  },
  data () {
    return {
      oldNum: 0,
      list: [],
      isGetting: false
    }
  },
  methods: {
    open (row) {
      this.rukuFormActive = true
      this.form = row
    },
    ruku () {
      if (isNaN(this.inpNum)) {
        this.$message.error('请输入合法值')
      } else {
        this.$http.post('/api/kucun/ruku', {
          num: this.inpNum,
          id: this.form.id
        }).then((res) => {
          console.log(res)
        }, (err) => {
          console.log(err)
        })
        this.$message.success('入库成功')
        this.rukuFormActive = false
        this.getList()
      }
    },
    getList () {
      this.isGetting = true
      this.$http.get('/api/kucunliu/getList')
        .then((res) => {
          if (res.status === 200) {
            console.log('res.data:')
            console.dir(res.data)
            let a = []
            res.data.forEach((item) => {
              let obj = {
                num: item.num,
                time: item.time,
                id: item.id,
                des: item.des
              }
              a.push(obj)
              this.list = a
            })
            this.isGetting = false
          }
        }).catch(err => console.log(err))
    }
  },
  mounted () {
    this.getList()
  }
}
</script>
