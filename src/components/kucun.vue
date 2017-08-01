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
    <el-table :data="list" style="margin-top: 20px; width:100%">
      <el-table-column prop="name" label="材料" style="width: 100px;"></el-table-column>
      <el-table-column label="库存数" prop="num" style="width: 100px;"></el-table-column>
      <!--<el-table-column label="描述" prop="des"></el-table-column>-->
      <el-table-column label="操作">
        <template scope="scope">
          <el-button @click="open(scope.row, '入库')" type="text" size="small">入库</el-button>
          <el-button @click="chu(scope.row, scope.row.num)" type="text" size="small">出库</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="form.des" :visible.sync="rukuFormActive" >
      <el-form :model="form">
        <el-form-item :label="`${form.des}项目:`">
          {{form.name}}
        </el-form-item>
        <el-form-item :label="`${form.des}数量`">
          <el-input v-model="inpNum"></el-input>
        </el-form-item>
      </el-form>
      {{hint}}
      <div slot="footer" class="dialog-footer">
        <el-button @click="rukuFormActive = false">取消</el-button>
        <el-button @click="run()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    inpNum: {
      get: function () {
        return this.oldNum
      },
      set: function (newValue) {
        this.oldNum = parseInt(newValue.replace(/[^\d]/g, ''))
      }
    }
  },
  data () {
    return {
      oldNum: 0,
      list: [],
      isGetting: false,
      rukuFormActive: false,
      form: {
        id: '',
        name: '',
        num: '',
        des: ''
      },
      kucunNum: 0,
      hint: ''
    }
  },
  methods: {
    run () {
      if (this.form.des === '入库') this.ruku()
      else this.chuku()
    },
    open (row, des) {
      this.rukuFormActive = true
      this.form = row
      this.form.des = des
    },
    chu (row) {
      this.rukuFormActive = true
      this.kucunNum = row.num
      this.form = row
      this.form.des = '出库'
      this.hint = `出库数量应小于${this.kucunNum}`
    },
    chuku () {
      if (this.inpNum > this.kucunNum) {
        this.$message.error('数量过大')
      } else if (this.form.des === '出库') {
        this.$http.post('/api/kucun/ruku', {
          num: this.inpNum,
          id: this.form.id
        }).then((res) => {
          console.log(res)
        }, (err) => {
          console.log(err)
        })
        this.$http.post('/api/kucunliu/addKucunLiu', {
          id: this.form.id,
          des: this.form.des,
          num: this.inpNum
        }).then(res => console.log(res), err => console.log(err))
        this.$message.success('出库成功')
        this.rukuFormActive = false
        this.getList()
      }
    },
    ruku () {
      if (isNaN(this.inpNum)) {
        this.$message.error('请输入合法值')
      } else if (this.form.des === '入库') {
        this.$http.post('/api/kucun/ruku', {
          num: this.inpNum,
          id: this.form.id
        }).then((res) => {
          console.log(res)
        }, (err) => {
          console.log(err)
        })
        this.$http.post('/api/kucunliu/addKucunLiu', {
          id: this.form.id,
          des: this.form.des,
          num: this.inpNum
        }).then(res => console.log(res), err => console.log(err))
        this.$message.success('入库成功')
        this.rukuFormActive = false
        this.getList()
      }
    },
    getList () {
      this.isGetting = true
      this.$http.get('/api/kucun/getKucunList')
        .then((res) => {
          if (res.status === 200) {
            console.log('res.data:')
            console.dir(res.data)
            let a = []
            res.data.forEach((item) => {
              let obj = {
                num: item.num,
                name: item.name,
                id: item.id
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
