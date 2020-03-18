<template>
  <div class="home">
    <header>
      <div class="header_name">上海市普陀区社会保障管理服务中心</div>
      <div class="header_user">
        <div class="head">
          <img src="" alt="">
        </div>
        <div class="user_info">
        </div>
      </div>
    </header>
    <div class="home_main clearfix">
      <div class="nav_menu">
        <div class="nav_menu_title">功能</div>
        <el-menu
          :default-active="activeIndex"
          :collapse="isCollapse"
          class="el-menu-demo"
          mode="vertical"
          text-color="#fff"
          active-text-color="#ffffff">
          <el-menu-item index="/infor">
            <router-link to="/home">
              <i class="el-icon-setting"></i>
              <span class="title">医保信息</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/stream">
            <router-link to="/home/stream">
              <i class="el-icon-setting"></i>
              <span class="title">流水查询</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/personnel">
            <router-link to="/home/personnel">
              <i class="el-icon-setting"></i>
              <span class="title">人员管理</span>
            </router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div :class="[isCollapse?'content_collapse':'']" class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '/infor',
      isCollapse: false
    }
  },
  created () {
    this.$route.fullPath === '/home' ? this.activeIndex = '/infor' : this.activeIndex = this.$route.fullPath.slice(5)
  },
  watch: {
    $route (to, from) {
      to.path === '/home' ? this.activeIndex = '/infor' : this.activeIndex = to.path.slice(5)
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.home
  header
    height 48px
    font-size 16px
    color #1F293D
    background-color #ffffff
    > .header_name
      float left
      font-size 16px
      color #1F293D
      line-height 40px
      width 300px
      margin-left 24px
    > .header_user
      float right
      width 24px
      height 24px
      background-color #f5f5f5
      border-radius 50%
      margin-right 31px
      margin-top 13px
      > .head
        width 100%
        height 100%
        border-radius 50%

.home_main
  > div
    float left
  .nav_menu
    height calc(100vh - 48px)
    background-color #11293E
    border-radius 4px
    > .nav_menu_title
      line-height 40px
      padding-left 17px
      color #ffffff
    > .el-menu-demo
      width 208px
      .el-menu-item
        padding 0 !important
        background-color #11293E
        a
          display inline-block
          width 100%
          line-height 50px
          color #ffffff
          padding-left 17px
          font-size 18px
      .is-active
        background-color #243A4D
    > .el-menu
      border-right none
    > .el-menu--collapse
      width 64px
  .content
    width calc(100vw - 256px)
    height calc(100vh - 72px)
    margin-top 24px
    padding 0 24px
  .content_collapse
    width calc(100vw - 112px)
</style>
