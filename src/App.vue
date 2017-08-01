<template>
  <div id="app">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="nc注册页" name="zc">
        <ncSign></ncSign>
      </el-tab-pane>
      <el-tab-pane label="材料" name="材料">
        <material></material>
      </el-tab-pane>
      <el-tab-pane label="产品" name="产品">
        <chanpin></chanpin>
      </el-tab-pane>
      <el-tab-pane label="库存" name="库存">
        <kucun></kucun>
      </el-tab-pane>
      <el-tab-pane label="库存流水" name="库存流水">
        <kucunliu></kucunliu>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import chanpin from './components/chanpin'
import material from './components/Material'
import kucun from './components/kucun'
import kucunliu from './components/kucunliu'
import ncSign from './components/ncSign'
export default {
  name: 'app',
  components: {
    chanpin,
    material,
    kucun,
    kucunliu,
    ncSign
  },
  data () {
    return {
      activeTab: 'zc'
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 60px auto 0;
  width: 600px;

}
</style>
