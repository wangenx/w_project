<template>
  <div class="home">
    <header>
      <div class="header_name">上海市普陀区社会保障管理服务中心</div>
      <div class="header_user" @mouseover="showHeadInfo">
        <div class="head">
          <img src="" alt="">
        </div>
        <div v-show="isSHowHeadInfo" class="user_info" @mouseout="hideHeadInfo">
          <div class="user_info_con">
            <div class="head"></div>
            <div class="name">韩大傻</div>
            <div class="address">龙凤区/大庆市</div>
          </div>
          <div class="Logout">退出登录</div>
        </div>
      </div>
    </header>
    <div class="home_main clearfix">
      <div class="nav_menu">
        <div class="nav_menu_title">功能</div>
        <div :class="[isCollapse?'nav_retract':'nav_fold']" @click="fold"></div>
        <el-menu
          :default-active="activeIndex"
          :collapse="isCollapse"
          class="el-menu-demo"
          mode="vertical"
          text-color="#fff"
          active-text-color="#ffffff">
          <el-menu-item index="/infor">
            <router-link to="/home">
              <i class="infor_icon icon"></i>
              <span class="title">医保信息</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/stream">
            <router-link to="/home/stream">
              <i class="stream_icon icon"></i>
              <span class="title">流水查询</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/personnel">
            <router-link to="/home/personnel">
              <i class="personnel_icon icon"></i>
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
      isCollapse: false,
      isSHowHeadInfo: false
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
    // 导航折叠
    fold () {
      this.isCollapse ? this.isCollapse = false : this.isCollapse = true
    },
    // 是否显示用户信息
    showHeadInfo () {
      this.isSHowHeadInfo = true
    },
    hideHeadInfo () {
      this.isSHowHeadInfo = false
    }
  }
}
</script>
<style lang="stylus" scoped>
$imgUrl = require('@/assets/images/')
.home
  header
    height 48px
    width 100vw
    font-size 16px
    color #1F293D
    background-color #ffffff
    position fixed
    top 0
    z-index 10
    > .header_name
      float left
      font-size 16px
      color #1F293D
      line-height 48px
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
      cursor pointer
      position relative
      > .head
        width 100%
        height 100%
        border-radius 50%
        background url('../assets/images/default_head.png') no-repeat
      > .user_info
        position absolute
        width 246px
        height 286px
        background-color #fff
        right -21px
        bottom -306px
        z-index 10
        box-shadow 0px 8px 14px 0px rgba(0,0,0,0.07)
        > .user_info_con
          height 184px
          padding-top 16px
          border-bottom 1px solid #ebeef5
          > .head
            width 100px
            height 100px
            background url('../assets/images/head_default.png') no-repeat
            border-radius 50%
            margin 0 auto
          > .name
            font-size 14px
            color #000
            text-align center
            line-height 22px
            margin-top 16px
          > .address
            font-size 14px
            color #9e9d9d
            line-height 22px
            text-align center
            margin-top 8px
        > .Logout
          width 123px
          line-height 36px
          text-align center
          border-radius 4px
          background-color #1989fa
          font-size 14px
          color #ffffff
          margin 16px auto

.home_main
  overflow-x scroll
  .nav_menu
    height calc(100vh - 48px)
    background-color #11293E
    border-radius 4px
    top 48px
    position fixed
    z-index 10
    > .nav_menu_title
      line-height 40px
      padding-left 17px
      color #ffffff
      font-size 20px
    > .nav_fold
      width 18px
      height 68px
      background url('../assets/images/nav_fold.png') no-repeat
      position absolute
      right -18px
      top 316px
      cursor pointer
    > .nav_retract
      width 18px
      height 68px
      position absolute
      right -18px
      top 316px
      cursor pointer
      background url('../assets/images/nav_retract.png') no-repeat
    > .el-menu-demo
      width 208px
      .el-menu-item, .el-submenu__title
        padding 0 !important
        background-color #11293E
        height 40px
        line-height 40px
        a
          display inline-block
          width 100%
          height 40px
          line-height 40px
          color #ffffff
          font-size 18px
          i
            float left
            width 20px
            height 20px
            display block
            margin 9px 8px 0 17px
          span
            float left
      .is-active
        background-color #243A4D
    > .el-menu
      border-right none
    > .el-menu--collapse
      width 64px
  .content
    margin-left 208px
    min-width 1184px
    width calc(100vw - 256px)
    height calc(100vh - 48px)
    // margin-top 72px
    position relative
    right 0
    top 48px
    padding 24px 24px 0
    transition width .3s, margin-left .3s
    overflow-y scroll
    overflow-x scroll
  .content_collapse
    margin-left 64px
    width calc(100vw - 112px)

.infor_icon
  background url('../assets/images/infor_nav.png') no-repeat

.stream_icon
  background url('../assets/images/stream_nav.png') no-repeat

.personnel_icon
  background url('../assets/images/personnel_nav.png') no-repeat
</style>
