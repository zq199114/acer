<template>
  <div class="all_product_pull">
    <Row>
      <Col :lg="{span: 11, offset: 1}" :md="{span: 11, offset: 1}" v-for="(item, index) of dataList" :key="index">
        <div class="title"><img class="tit_img" src="https://gwimages.acer.com.cn/uploads/ptype/3af16f2ddef6a21934cdf8f1a1779b7b.png" alt="">{{item.title}}</div>
        <div class="smalltitle" v-for="(list, index) in item.titlesmall" :key="index">
          <div class="itemtitle">{{list.title}}</div>
          <ul class="item_list">
            <li class="item" v-for="(listItem, index) in list.items" :key="index">{{listItem.item}}</li>
          </ul>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'pullPage',
  data () {
    return {
      dataList: null
    }
  },
  methods: {
    getList (res) {
      if (res.status === 200) {
        let data = res.data
        this.dataList = data
      }
    }
  },
  mounted () {
    this.$axios.post('/product/all').then(this.getList)
  }
}
</script>

<style lang="sass" scoped>
@import "~styles/mixin.scss"
.all_product_pull
  border-top: 1px solid #b8b8b8
  background: rgba(255,255,255,0.95)
  position: absolute
  top: 90px
  left: 0
  right: 0
  z-index: 99
  line-height: normal
  .title
    @include sc(20px, #3d3f3e)
    line-height: 70px
    .tit_img
      margin-right: 8px
  .smalltitle
    padding-left: 60px
    // height: 100%
    display: table
    .itemtitle
      @include sc(14px, #3d3f3e)
      font-weight: 600
      white-space: nowrap // 很神奇不换行的同时把空间给撑开了
      // vertical-align: top
      // 在table里margin无效
    .item_list
      padding-left: 10px
      display: table-cell
      .item
        @include sc(14px, #333)
        display: inline-block
        border-left: 1px solid #d4d4d4
        padding-left: 10px
        margin-right: 20px
        margin-bottom: 30px
        font-family: 'Microsoft YaHei'
</style>
<!--个人&家用产品-->
<!--笔记本-->
<!--暗影骑士（游戏本）-->

<!--威武骑士（游戏本）-->
<!--Predator系列（发烧电竞）-->

<!--Aspire 系列（主流本）-->
<!--蜂鸟系列（轻薄本）-->

<!--蜂鸟系列（变形触控本）-->
<!--台式机-->
<!--Aspire TC主流-->

<!--威武系列（游戏主机）-->

<!--一体机-->
<!--暗影骑士（游戏主机）-->
<!--显示器-->
<!--旗舰机型-->

<!--高端机型-->

<!--实用性价比-->
<!--投影机-->
<!--家庭影院系列-->
<!--Predator高端电竞-->
<!--笔记本-->
<!--Helios-->

<!--Triton-->
<!--台式机-->
<!--Orion-->
<!--显示器-->
<!--XB1-->

<!--X34-->

<!--Z35-->

<!--Z1-->
<!--投影机-->
<!--Z-->
<!--外设-->
<!--鼠标-->
<!--商用&企业产品-->
<!--笔记本-->
<!--TravelMate P2-->

<!--TravelMate P4-->

<!--TravelMate P6-->
<!--TravelMate X-->

<!--TravelMate B-->

<!--SF514-->
<!--台式机-->
<!--Veriton A-->

<!--Veriton B-->

<!--Veriton C-->

<!--Veriton D-->

<!--Veriton E-->
<!--Veriton T-->

<!--中小企业办公用机-->
<!--服务器-->
<!--服务器-->
<!--工作站-->
<!--工作站-->
<!--平板&二合一-->
<!--Windows二合一-->

<!--平板电脑-->
<!--投影机-->
<!--商务会议系列-->

<!--教育培训系列-->

<!--高亮工程系列-->
<!--网络产品-->
<!--路由器-->
