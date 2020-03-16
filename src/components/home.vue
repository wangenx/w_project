<template>
  <div class="home">
    <header>头部</header>
    <div class="home_main clearfix">
      <div class="nav_menu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="vertical"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="index1">
            <router-link to="/index1">处理中心</router-link>
          </el-menu-item>
          <el-menu-item index="index2">
            <router-link to="/index2">开始中心</router-link>
          </el-menu-item>
          <el-menu-item index="index3">
            <router-link to="/index3">消息中心</router-link>
          </el-menu-item>
          <el-menu-item index="index4">
            <router-link to="/index4">订单管理</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: 'index1'
    }
  },
  created () {
    if (window.localStorage.getItem('path')) {
      this.activeIndex = window.localStorage.getItem('path')
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key)
      console.log(keyPath)
      window.localStorage.setItem('path', key)
    }
  },
  destroyed () {
    window.localStorage.setItem('path', '')
  }
}
</script>
<style lang="stylus" scoped>
.home
  header
    line-height 100px
    font-size 26px
    color #333333
    background-color #f5f5f5

.home_main
  margin-top 20px
  > div
    float left
  .nav_menu
    width 200px
    > .el-menu-demo
      li
        padding-left 0 !important
        a
          display block
          width 100%
          line-height 50px
          text-align center
  .content
    width 1000px
    height 500px
    margin-left 20px
    background-color #f5f5f5
</style>
