<template>
  <div class="login clearfix">
    <div class="login_content">
      <div class="login_left">
        <div class="lohin_company">上海市普陀区社会保障管理服务中心</div>
        <div class="login_software">征地养老人员医保报销软件</div>
      </div>
      <div class="login_right"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
.login
  height 100vh
  position relative
  .login_content
    width 1102px
    height 600px
    background-color #fff
    position absolute
    left calc((100vw - 1102px)/2)
    top 50%
    transform translateY(-50%)
</style>
