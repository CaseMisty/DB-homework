<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <form action="">
      <input type="text" name="material-name" v-model="materialName">
      <button @click.prevent="addMaterial">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      materialName: ''
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
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
