<template>
  <div class="login clearfix">
    <div class="login_content clearfix">
      <div class="login_left">
        <div class="lohin_company">上海市普陀区社会保障管理服务中心</div>
        <div class="login_software">征地养老人员医保报销软件</div>
      </div>
      <div class="login_right">
        <div class="title">登录账号</div>
        <div class="form">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="" prop="name">
              <el-input type="text" v-model="ruleForm.name" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">登录</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
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
    > div
      float left
    .login_left
      width 524px
      padding-top 123px
      .lohin_company
        font-size 48px
        text-align center
        line-height 67px
        color #cccccc
      .login_software
        font-size 28px
        line-height 40px
        margin-top 242px
        text-align center
        color #cccccc

.login_right
  width 297px
  padding 147px 136px 0 145px
  > .title
    font-size 30px
    line-height 42px
    margin-bottom 32px
    color #272727
  /deep/
    .el-button
      width 100%
      padding 11px 20px

</style>
