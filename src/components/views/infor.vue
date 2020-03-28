<template>
  <div class="infor">
    <div v-show="visibe" class="banner" @click="closeBanner">
      <div class="name">上海市普陀区社会保障管理服务中心</div>
      <div class="msc">我们将会为您提供最优质的服务</div>
      <span class="del"></span>
    </div>
    <div :class="[isOpen?'':'search_scrren']" class="search">
      <div class="search_title clearfix">
        <div class="left">相关分类</div>
        <div class="right clearfix" @click="scrrenSearch">
          <span>收起筛选</span>
          <span></span>
        </div>
      </div>
      <div class="search_con">
        <el-form :inline="true" :model="ruleForm" ref="ruleForm" class="demo-form-inline">
          <el-col>
            <el-form-item label="管理单位">
              <el-select v-model="ruleForm.company" placeholder="单位名称" style="min-width: 224px">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="管理村">
              <el-select v-model="ruleForm.village" placeholder="管理村" style="min-width: 224px">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="村镇分类">
              <el-select v-model="ruleForm.classification" placeholder="村镇" style="min-width: 224px">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="">
              <el-date-picker
                v-model="ruleForm.date"
                type="daterange"
                align="left"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="ruleForm.name" placeholder="请输入姓名" style="min-width:240px"></el-input>
            </el-form-item>
            <el-form-item label="身份证">
              <el-input v-model="ruleForm.id" placeholder="请输入身份证" style="min-width:240px"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-button type="primary" @click="submit">查询</el-button>
          </el-col>
        </el-form>
      </div>
    </div>
    <div class="tabel">
      <div class="tabel_title clearfix">
        <div class="left">共查询到<span>300</span>人</div>
        <div class="right">医保信息导入</div>
      </div>
      <div class="tabel_con">
        <template>
          <el-table
            :data="tableData"
            align="center"
            style="width: 100%;text-align:center">
            <el-table-column
              prop="name"
              label="姓名"
              align="center"
              min-width="64">
            </el-table-column>
            <el-table-column
              prop="id"
              label="身份证号"
              align="center"
              min-width="182">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄"
              align="center"
              min-width="36">
            </el-table-column>
            <el-table-column
              prop="gender"
              label="性别"
              align="center"
              min-width="36">
            </el-table-column>
            <el-table-column
              prop="company"
              label="管理单位"
              align="center"
              min-width="128">
              <template slot-scope="scope">
                <el-tooltip :content="scope.row.company" placement="top">
                  <div class="hideContent">{{ scope.row.company }}</div>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              prop="village"
              label="管理村"
              align="center"
              min-width="85">
              <template slot-scope="scope">
                <el-tooltip :content="scope.row.village" placement="top">
                  <div class="hideContent">{{ scope.row.village }}</div>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              prop="classification"
              label="城镇分类"
              align="center"
              min-width="72">
              <template slot-scope="scope">
                <el-tooltip :content="scope.row.classification" placement="top">
                  <div class="hideContent">{{ scope.row.classification }}</div>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              prop="totalSum"
              label="总金额"
              align="center"
              min-width="74">
              <template slot-scope="scope">
                <el-tooltip :content="scope.row.totalSum" placement="top">
                  <div class="hideContent">{{ scope.row.totalSum }}</div>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              prop="personalSum"
              label="个人自负"
              align="center"
              min-width="74">
              <template slot-scope="scope">
                <el-tooltip :content="scope.row.personalSum" placement="top">
                  <div class="hideContent">{{ scope.row.personalSum }}</div>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              prop="medicalSum"
              label="医保自付"
              align="center"
              min-width="74">
              <template slot-scope="scope">
                <el-tooltip :content="scope.row.medicalSum" placement="top">
                  <div class="hideContent">{{ scope.row.medicalSum }}</div>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              prop="expenseSum"
              label="个人自费"
              align="center"
              min-width="74">
              <template slot-scope="scope">
                <el-tooltip :content="scope.row.expenseSum" placement="top">
                  <div class="hideContent">{{ scope.row.expenseSum }}</div>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              align="center"
              min-width="44">
              <template slot-scope="scope">
                <el-tooltip :content="scope.row.stateContent" placement="top">
                  <div class="state">
                    <span v-show="scope.row.state == 1"></span>
                    <span v-show="scope.row.state == 2"></span>
                    <span v-show="scope.row.state == 3"></span>
                  </div>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <div class="footer clearfix">
          <div class="batch">批量导出</div>
          <div class="city_system">市系统格式导出</div>
          <div class="page">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="300">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      visibe: true, // 关闭banner
      isOpen: true, // 搜索折叠
      currentPage: 1, // 页码
      ruleForm: { // 搜索
        company: '',
        village: '',
        classification: '',
        name: '',
        date: '',
        id: ''
      },
      tableData: [
        {
          name: '韩大傻',
          id: '372930199903012100',
          age: 11,
          gender: '男',
          company: '李家村驻马店社区额外访问范文芳微服务分违反为发仍无法',
          village: '驻马店新乡',
          classification: '葫芦乡镇',
          totalSum: '52332323',
          personalSum: '52332323',
          medicalSum: '9188699',
          expenseSum: '9188699',
          state: 1,
          stateContent: '在籍'
        },
        {
          name: '韩大傻',
          id: '372930199903012100',
          age: 11,
          gender: '男',
          company: '李家村驻马店社区额外访问范文芳微服务分违反为发仍无法',
          village: '驻马店新乡',
          classification: '葫芦乡镇',
          totalSum: '52332323',
          personalSum: '52332323',
          medicalSum: '9188699',
          expenseSum: '9188699',
          state: 2,
          stateContent: '亡故 20200327'
        },
        {
          name: '韩大傻',
          id: '372930199903012100',
          age: 11,
          gender: '男',
          company: '李家村驻马店社区额外访问范文芳微服务分违反为发仍无法',
          village: '驻马店新乡',
          classification: '葫芦乡镇',
          totalSum: '52332323',
          personalSum: '52332323',
          medicalSum: '9188699',
          expenseSum: '9188699',
          state: 2,
          stateContent: '亡故 20200327'
        },
        {
          name: '韩大傻',
          id: '372930199903012100',
          age: 11,
          gender: '男',
          company: '李家村驻马店社区额外访问范文芳微服务分违反为发仍无法',
          village: '驻马店新乡',
          classification: '葫芦乡镇',
          totalSum: '52332323',
          personalSum: '52332323',
          medicalSum: '9188699',
          expenseSum: '9188699',
          state: 2,
          stateContent: '亡故 20200327'
        },
        {
          name: '韩大傻',
          id: '372930199903012100',
          age: 11,
          gender: '男',
          company: '李家村驻马店社区额外访问范文芳微服务分违反为发仍无法',
          village: '驻马店新乡',
          classification: '葫芦乡镇',
          totalSum: '52332323',
          personalSum: '52332323',
          medicalSum: '9188699',
          expenseSum: '9188699',
          state: 1,
          stateContent: '在籍'
        },
        {
          name: '韩大傻',
          id: '372930199903012100',
          age: 11,
          gender: '男',
          company: '李家村驻马店社区额外访问范文芳微服务分违反为发仍无法',
          village: '驻马店新乡',
          classification: '葫芦乡镇',
          totalSum: '52332323',
          personalSum: '52332323',
          medicalSum: '9188699',
          expenseSum: '9188699',
          state: 3,
          stateContent: '在籍备份'
        },
        {
          name: '韩大傻',
          id: '372930199903012100',
          age: 11,
          gender: '男',
          company: '李家村驻马店社区额外访问范文芳微服务分违反为发仍无法',
          village: '驻马店新乡',
          classification: '葫芦乡镇',
          totalSum: '52332323',
          personalSum: '52332323',
          medicalSum: '9188699',
          expenseSum: '9188699',
          state: 2,
          stateContent: '亡故 20200327'
        },
        {
          name: '韩大傻',
          id: '372930199903012100',
          age: 11,
          gender: '男',
          company: '李家村驻马店社区额外访问范文芳微服务分违反为发仍无法',
          village: '驻马店新乡',
          classification: '葫芦乡镇',
          totalSum: '52332323',
          personalSum: '52332323',
          medicalSum: '9188699',
          expenseSum: '9188699',
          state: 1,
          stateContent: '在籍'
        },
        {
          name: '韩大傻',
          id: '372930199903012100',
          age: 11,
          gender: '男',
          company: '李家村驻马店社区额外访问范文芳微服务分违反为发仍无法',
          village: '驻马店新乡',
          classification: '葫芦乡镇',
          totalSum: '52332323',
          personalSum: '52332323',
          medicalSum: '9188699',
          expenseSum: '9188699',
          state: 1,
          stateContent: '在籍'
        },
        {
          name: '韩大傻',
          id: '372930199903012100',
          age: 11,
          gender: '男',
          company: '李家村驻马店社区额外访问范文芳微服务分违反为发仍无法',
          village: '驻马店新乡',
          classification: '葫芦乡镇',
          totalSum: '52332323',
          personalSum: '52332323',
          medicalSum: '9188699',
          expenseSum: '9188699',
          state: 2,
          stateContent: '亡故 20200327'
        }
      ]
    }
  },
  methods: {
    scrrenSearch () {
      this.isOpen ? this.isOpen = false : this.isOpen = true
    },
    // 查询
    submit () {},
    // 分页
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    // 关闭banner
    closeBanner () {
      this.visibe = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.infor
  height 100%
  // overflow auto
  .banner
    height 86px
    padding-top 24px
    padding-left 24px
    background url('../../assets/images/banner_bg.png')
    position relative
    margin-bottom 24px
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
      background url('../../assets/images/banner_del.png') no-repeat
      right 13px
      top 13px
      cursor pointer

.search
  height 244px
  background-color #fff
  transition height .2s
  .search_title
    height 64px
    > .left
      float left
      font-size 16px
      color #000
      line-height 64px
      margin-left 25px
    > .right
      float right
      height 24px
      margin-top 20px
      margin-right 21px
      cursor pointer
      > span
        float left
      > span:first-child
        font-size 16px
        color #000
        line-height 24px
      > span:last-child
        display block
        width 11px
        height 11px
        margin-top 5px
        margin-left 8px
        background url('../../assets/images/search_screen_icon.png') no-repeat
        transform rotate(0)
        transition transform .3s
.search_scrren
  height 64px
  overflow hidden
  > .search_title
    > .right
      > span:last-child
        transform rotate(180deg)

.search_con
  padding-left 25px
  border 2px 2px 0 0
  /deep/
    .el-form-item
      margin-bottom 16px
      margin-right 32px
  /deep/
    .el-form-item__label
      padding-right 16px
      font-size 16px
      color #000
  /deep/
    .el-button
      width 57px
      height 34px
      padding 0

.tabel
  // height calc(100vh - 464px)
  // min-height 742px
  background-color #fff
  padding-bottom 32px
  margin-top 12px
  border-radius 4px
  .tabel_title
    height 64px
    margin-top 7px
    .left
      float left
      font-size 16px
      color #636569
      line-height 64px
      margin-left 25px
      > span
        color #FF7C1E
    .right
      float right
      width 136px
      height 36px
      background-color #1989FA
      color #ffffff
      line-height 36px
      text-align center
      margin-top 16px
      cursor pointer
      margin-right 24px
      border-radius 4px

.tabel_con
  padding 0 19px 0 25px
  /deep/
    .el-table th
      background-color #f8f8f8

.hideContent
  overflow hidden
  text-overflow ellipsis
  white-space nowrap

.state
  width 27px
  height 25px
  cursor pointer
  > span
    display block
    height 25px
    background url('../../assets/images/residence.png') no-repeat
  > span:nth-child(2)
    background url('../../assets/images/death.png') no-repeat
  > span:last-child
    background url('../../assets/images/residence_backups.png') no-repeat

.footer
  height 40px
  margin-top 34px
  > div
    float left
  > .batch
    width 123px
    height 36px
    background-color #1989FA
    border-radius 4px
    text-align center
    line-height 36px
    color #fff
    font-size 14px
    margin-top 2px
    cursor pointer
  > .city_system
    width 148px
    height 38px
    border 1px solid #A3D0FD
    line-height 38px
    background-color #E6F1FC
    text-align center
    color #1989FA
    margin-left 23px
    cursor pointer
    border-radius 4px
    font-size 14px
  > .page
    float right
</style>
