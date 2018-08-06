<template>
  <header class="top" ref="topBar">
    <!--顶部黑色条-->
    <Row class="bar">
      <Col class="mw">
        <Col :lg="{span:6}" :md="{span:7}" :sm="0" :xs="0" class="bar_item">
          <router-link tag="span" to="/index" class="co_ite">首页</router-link>
          <router-link tag="span" to="/news" class="co_ite">资讯</router-link>
          <span class="co_ite">社交平台 <Icon class="arr" size="9" type="chevron-down"></Icon></span>
        </Col>
        <Col :lg="{span:7, offset:8}" :md="{span:9, offset: 4}" :sm="0" :xs="0" class="bar_middle">
          <i class="contact_way">客户售后热线：400-700-1000 / 商用售前热线：400-810-0118</i>
        </Col>
        <Col :lg="{span:2, offset:1}" :md="{span:3, offset:1}" :sm="0" :xs="0"  class="bar_right">
          <div class="login"><Icon type="android-contact"></Icon><span class="log">登陆</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>注册</span></div>
        </Col>
      </Col>
    </Row>
    <!--通用白色导航栏-->
    <div class="conter_com"><Row v-if="showCommon" class="nav mw">
      <Col class="nav_logo" :lg="{span:2}" :md="{span:2}" :sm="0" :xs="0"><div class="logo"><img src="https://gwimages.acer.com.cn/uploads/whole/13e8d541d74ed1b43876c3da0b44c3b9.png" alt=""></div></Col>
      <Col class="nav_item nav_item_shop" :lg="{span:2, offset:4}" :md="{span:2, offset:6}" :sm="0" :xs="0"><router-link tag="div" to="/shop">宏碁商城<Icon type="ios-cart-outline" color="#78Bc27" size="22" class="ico"></Icon></router-link></Col>
      <Col class="all_product" :lg="{span:2}" :md="{span:2}" :sm="0" :xs="0">
        <div class="all" @mouseover="showPullDown" @mouseout="showPullDown">
          全部产品
          <Icon type="ios-keypad-outline" color="#78Bc27" size="22" class="ico"></Icon>
          <all-product  v-show="showAllPro"></all-product>
        </div>
      </Col>
      <Col class="nav_item domestic" :lg="{span:1}" :md="{span:1}" :sm="0" :xs="0">
        <div @mouseover="showDomestic" @mouseout="showDomestic">
          家用
          <uspull v-show="showDom"></uspull>
          <Icon type="chevron-down" color="#c5c5c5" class="ico_down ico_home"></Icon>
        </div>
      </Col>
      <Col class="nav_item nav_item_spl" :lg="{span:1}" :md="{span:1}" :sm="0" :xs="0"><div>高端电竞</div></Col>
      <Col class="nav_item" :lg="{span:1}" :md="{span:1}" :sm="0" :xs="0"><div>商用<Icon type="chevron-down" color="#c5c5c5" class="ico_down"></Icon></div></Col>
      <Col class="nav_item nav_item_spl" :lg="{span:1}" :md="{span:1}" :sm="0" :xs="0"><div>解决方案</div></Col>
      <Col class="nav_item nav_item_support" :lg="{span:2}" :md="{span:3}" :sm="0" :xs="0"><div>服务支持<Icon type="chevron-down" color="#c5c5c5" class="ico_down"></Icon></div></Col>
      <Col class="nav_search" :lg="{span:5}" :md="{span:0}" :sm="0" :xs="0">
        <div class="search">
          <div class="search_item_all">
            <input class="search_item" type="text" placeholder="acer 4750G">
            <Icon class="smal_ico" size="30" color="#5c5c5c" type="ios-search-strong"></Icon>
            <p class="desc">轻薄 | 电竞 | 时尚</p>
          </div>
        </div>
      </Col>
      <Col class="nav_search_small" :lg="{span:0}" :md="{span:1}" :sm="0" :xs="0">
        <Icon type="ios-search-strong" size="30" class="search_ico" color="#5c5c5c"></Icon>
      </Col>
    </Row></div>
    <div class="conter_b">
      <Row v-if="showGamebook" class="nav nav_b mw">
      <Col class="nav_logo" :lg="{span:3}" :md="{span:3}" :sm="0" :xs="0"><div class="logo"><img src="https://www.acer.com.cn/web/images/gam-logo.png" alt=""></div></Col>
      <Col class="nav_item nav_b_item" :lg="{span:1, offset:10}" :md="{span:1, offset:12}" :sm="0" :xs="0"><div>产品<Icon type="chevron-down" color="#232323" class="ico_down"></Icon></div></Col>
      <Col class="nav_item nav_b_item b_ser" :lg="{span:2}" :md="{span:2}" :sm="0" :xs="0"><div>服务支持<Icon type="chevron-down" color="#232323" class="ico_down"></Icon></div></Col>
      <Col class="nav_item nav_b_item" :lg="{span:2}" :md="{span:2}" :sm="0" :xs="0">返回首页</Col>
      <Col class="nav_search nav_b_search" :lg="{span:4}" :md="{span:0}" :sm="0" :xs="0">
        <div class="search">
          <div class="search_item_all">
            <input class="search_item" type="text" placeholder="acer 4750G">
            <Icon class="smal_ico" size="30" color="#5c5c5c" type="ios-search-strong"></Icon>
            <p class="desc">轻薄 | 电竞 | 时尚</p>
          </div>
        </div>
      </Col>
      <Col class="nav_search_small" :lg="{span:0}" :md="{span:1}" :sm="0" :xs="0">
        <Icon type="ios-search-strong" size="30" class="search_ico" color="#5c5c5c"></Icon>
      </Col>
    </Row>
    </div>
    <m-nav :white="showCommon" :black="showGamebook"></m-nav>
  </header>
</template>

<script>
import AllProduct from './components/pullPage'
import uspull from './components/commonPulldown'
import mNav from './components/mNav'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'mainHeader',
  components: {
    AllProduct,
    uspull,
    mNav
  },
  data () {
    return {
      showAllPro: false,
      showDom: false,
      showGamebook: false, // 是否展示掠夺者页面
      showCommon: true
    }
  },
  computed: {
    ...mapState(['mainHh'])
  },
  methods: {
    showPullDown () {
      this.showAllPro = !this.showAllPro
    },
    showDomestic () {
      this.showDom = !this.showDom
    },
    recalc () {
      let Hh = this.$refs.topBar.clientHeight
      let Cw = document.documentElement.clientWidth
      // console.log(Cw)
      this.STORE_HEIGHT(Hh)
      this.STORE_C_WIDTH(Cw)
    },
    ...mapMutations(['STORE_HEIGHT', 'STORE_C_WIDTH']),
    routeJudje () {
      if (this.$route.name === 'show') {
        this.showGamebook = true
        this.showCommon = false
      } else {
        this.showGamebook = false
        this.showCommon = true
      }
    }
  },
  mounted () {
    // orientationchange事件在设备的纵横方向改变时触发。
    // 文档视图调整大小时会触发 resize 事件。
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    if (!document.addEventListener) return
    window.addEventListener(resizeEvt, this.recalc, false)
    document.addEventListener('DOMContentLoaded', this.recalc, false)
    this.recalc()
    // 下面对路由判断是为了防止刷新页面后路由判断消失
    this.routeJudje()
  },
  watch: {
    // 组件内守卫只能再父组件中使用子组件，只能用watch来观察
    $route () {
      this.routeJudje()
    }
  }
}
</script>

<style scoped lang="sass" type="text/sass">
@import "~styles/mixin"
.top
  .bar
   background: #272727
   color: #fff
   .bar_item, .bar_middle
     @include font(0.12rem, 0.40rem)
     .co_ite
       text-align: left
       margin: 0.15rem
     .arr
       text-align: left
       margin-left: 0.03rem
   .bar_middle
     white-space: nowrap
     text-align: right
     .contact_way
   .bar_right
     @include font(0.12rem, 0.4rem)
     text-align: right
     white-space: nowrap
     .login
      text-align: right
      @include sc(0.15rem, #fff)
      .log
        margin-left: 0.10rem
  .conter_com, .conter_b
    background: #fff
      border-bottom: 0.01rem solid #b8b8b8
    .nav
      white-space: nowrap
      position: relative
      .nav_logo, .nav_item, .nav_item_shop, .nav_search_small, .nav_item_spl, .all_product
        line-height: 0.9rem
      .nav_item, .nav_item_shop, .nav_item_spl, .all_product
        margin-right: 0.2rem
        // width: auto
        @include sc(0.18rem, #1a1a1a)
        white-space: nowrap
        .ico, .ico_down
          margin-left: 0.1rem
          vertical-align: middle
          font-weight: 700
        .ico_down
          font-weight: 200
      .all_product
        // margin-right: 0.3rem
        position: static!important // 加了static之后子元素就不会在受父元素的宽度限制了
        .all
          &:hover
            color: $greenfont
      .domestic
        position: relative
        .ico_home
          margin: .03rem
      .nav_item
        // margin-right: 0.3rem
        &:hover
          color: $greenfont
      .nav_item_spl
        margin-right: 0.35rem
      .nav_item_support
        margin-right: .05rem
      .nav_search
        flex: 1
        width: 19%
        white-space: nowrap
        height: 90px
        border-left: 0.01rem solid #b8b8b8
        border-right: 0.01rem solid #b8b8b8
        .search
          margin-top: .15rem
          .search_item_all
            display: inline-block
            margin-left: 10%
            .search_item
              font-size: .15rem
              background: #eaeaea
              display: inline-block
              padding: 0 10px
              @include wh(80%, .35rem)
            .smal_ico
              display: inline-block
              width: 0.225rem
              height: 0.345rem
              vertical-align: middle
            .desc
              @include sc(0.12rem, #5c5c5c)
              margin-top: 0.05rem
      .nav_search_small
        width: 0.23rem
        text-align: center
        .search_ico
          vertical-align: middle
  .conter_b
    background: #000
    border-bottom: 0.01rem solid #000
    .nav_b
      .nav_b_item
        // width: auto
        color: #fff
      .b_ser
        margin-right: .1rem
      .nav_b_search
        border-color: #282828
        .search
          .search_item_all
            .search_item
              background: #232323
@media only screen and (max-width: 1200px)
  .top
    .nav
      .nav_item, .nav_item_shop, .nav_item_spl, .all_product, .nav_search_small
        font-size: .16rem
        width: auto
        margin-right: 1%
      .nav_search_small
        margin-left: 1.7%
        margin-right: 0
</style>
