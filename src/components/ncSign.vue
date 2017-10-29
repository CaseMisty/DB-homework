<template>
  <div>
    <el-form :model="form" ref="form" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="确认密码"  prop="confirmPassword">
        <el-input v-model="form.confirmPassword" type="password" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio v-model="form.gender" label="male">男</el-radio>
        <el-radio v-model="form.gender" label="female">女</el-radio>
      </el-form-item>
      <el-form-item label="爱好" prop="hobbyList">
        <el-checkbox-group v-model="form.hobbyList">
          <el-checkbox label="吃饭"></el-checkbox>
          <el-checkbox label="睡觉"></el-checkbox>
          <el-checkbox label="塞尔达秒了"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style></style>
<script>
export default {
  methods: {
    submitForm (formName) {
      console.dir(this.$refs)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message.success('submit!')
        } else {
          this.$message.error('error submit!')
          return false
        }
      })
    }
  },
  computed: {
    uninputItem () {
      return true
    }
  },
  data () {
    var checkUsername = (rule, value, callback) => {
      if (!value) return callback(new Error('请输入用户名'))
      // setTimeout(() => {

      // })
    }
    var confirm = () => {
      if (this.form.password === this.form.confirmPassword) {
        return true
      } else return false
    }
    var checkPassword = (rule, value, callback) => {
      if (!value) return callback(new Error('请输入密码'))
      if (!confirm() && this.form.confirmPassword) {
        callback(new Error('请重新确认密码'))
      }
    }
    var checkConfirmPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'))
      } else if (!confirm()) {
        setTimeout(() => {
          callback(new Error('两次输入密码不一致'))
        }, 1500)
      } else callback()
    }
    var checkGender = (rule, value, callback) => {
      if (!value) return callback(new Error('请选择性别'))
      // setTimeout(() => {

      // })
    }
    var checkHobbyList = (rule, value, callback) => {
      if (!value.length) return callback(new Error('请选择至少一个爱好'))
      // setTimeout(() => {

      // })
    }
    var checkEmail = (rule, value, callback) => {
      if (!value) return callback(new Error('请输入邮箱'))
      // setTimeout(() => {

      // })
    }
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
        hobbyList: [],
        email: ''
      },
      rules: {
        username: [
          {validator: checkUsername, trigger: 'change'}
        ],
        password: [
          {validator: checkPassword, trigger: 'blur'}
        ],
        confirmPassword: [
          {validator: checkConfirmPassword, trigger: 'change'}
        ],
        gender: [
          {validator: checkGender, trigger: 'change'}
        ],
        hobbyList: [
          {validator: checkHobbyList, trigger: 'change'}
        ],
        email: [
          {validator: checkEmail, trigger: 'blur'}
        ]
      }
    }
  }
}
</script>