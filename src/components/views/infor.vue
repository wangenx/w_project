<template>
  <div class="infor">
    <div class="banner">
      <div class="name">上海市普陀区社会保障管理服务中心</div>
      <div class="msc">我们将会为您提供最优质的服务</div>
      <span class="del"></span>
    </div>
    <div class="search">
    </div>
    <div class="tabel">

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
.infor
  height 100%
  overflow auto
  .banner
    height 86px
    padding-top 24px
    padding-left 24px
    background-color #ccc
    position relative
    .name
      font-size 24px
      line-height 32px
      color #ffffff
    .msc
      font-size 14px
      line-height 22px
      margin-top 8px
      color #ffffff
    .del
      position absolute
      display block
      width 9px
      height 9px
      background-color #fff
      right 13px
      top 13px

.search
  height 244px
  background-color #fff
  margin-top 24px

.tabel
  height 526px
  background-color #fff
  margin-top 12px
</style>
