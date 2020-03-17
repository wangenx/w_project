<template>
  <div class="home">
    <header>头部</header>
    <div class="home_main clearfix">
      <div class="nav_menu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="vertical"
          text-color="#fff"
          active-text-color="#ffffff">
          <el-menu-item index="/index1">
            <i></i>
            <router-link to="/home">处理中心</router-link>
          </el-menu-item>
          <el-menu-item index="/index2">
            <i class="el-icon-setting"></i>
            <router-link to="/home/index2">开始中心</router-link>
          </el-menu-item>
          <el-menu-item index="/index3">
            <router-link to="/home/index3">消息中心</router-link>
          </el-menu-item>
          <el-menu-item index="/index4">
            <router-link to="/home/index4">订单管理</router-link>
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
      activeIndex: '/index1'
    }
  },
  created () {
    console.log(this.$route)
    this.$route.fullPath === '/home' ? this.activeIndex = '/index1' : this.activeIndex = this.$route.fullPath.slice(5)
  },
  watch: {
    $route (to, from) {
      to.path === '/home' ? this.activeIndex = '/index1' : this.activeIndex = to.path.slice(5)
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.home
  header
    line-height 48px
    font-size 16px
    color #1F293D
    background-color #ffffff

.home_main
  > div
    float left
  .nav_menu
    width 208px
    height calc(100vh - 48px)
    background-color #11293E
    > .el-menu-demo
      .el-menu-item
        padding-left 0 !important
        a
          display inline-block
          width 100%
          line-height 50px
          text-align center
      .is-active
        background-color #243A4D
  .content
    width calc(100vw - 256px)
    height calc(100vh - 72px)
    margin-top 24px
    padding 0 24px
</style>
