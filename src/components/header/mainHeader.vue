<template>
  <header class="top">
    <Row class="bar">
      <Col :lg="{span:5, offset:1}" :md="{span:6, offset:1}" :sm="0" :xs="0" class="bar_item">
        <span class="co_ite">首页</span>
        <span class="co_ite">资讯</span>
        <span class="co_ite">社交平台 <Icon class="arr" size="9" type="chevron-down"></Icon></span>
      </Col>
      <Col :lg="{span:7, offset:6}" :md="{span:9, offset: 3}" :sm="0" :xs="0" class="bar_middle">
        <i class="contact_way">客户售后热线：400-700-1000 / 商用售前热线：400-810-0118</i>
      </Col>
      <Col :lg="{span:3, offset:1}" :md="{span:3, offset:1}" :sm="0" :xs="0"  class="bar_right">
        <div class="login"><Icon type="android-contact"></Icon><span class="log">登陆</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>注册</span></div>
      </Col>
    </Row>
    <Row class="nav">
      <Col class="nav_logo" :lg="{span:2, offset: 1}" :md="{span:2, offset:1}" :sm="0" :xs="0"><div class="logo"><img src="https://gwimages.acer.com.cn/uploads/whole/13e8d541d74ed1b43876c3da0b44c3b9.png" alt=""></div></Col>
      <Col class="nav_item nav_item_shop" :lg="{span:2, offset:2}" :md="{span:2, offset:5}" :sm="0" :xs="0"><div>宏碁商城<Icon type="ios-cart-outline" color="#78Bc27" size="22" class="ico"></Icon></div></Col>
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
          <Icon type="chevron-down" color="#c5c5c5" class="ico_down"></Icon>
          <uspull v-show="showDom"></uspull>
        </div>
      </Col>
      <Col class="nav_item nav_item_spl" :lg="{span:1}" :md="{span:1}" :sm="0" :xs="0"><div>高端电竞</div></Col>
      <Col class="nav_item" :lg="{span:1}" :md="{span:1}" :sm="0" :xs="0"><div>商用<Icon type="chevron-down" color="#c5c5c5" class="ico_down"></Icon></div></Col>
      <Col class="nav_item nav_item_spl" :lg="{span:1}" :md="{span:1}" :sm="0" :xs="0"><div>解决方案</div></Col>
      <Col class="nav_item" :lg="{span:2}" :md="{span:2}" :sm="0" :xs="0"><div>服务支持<Icon type="chevron-down" color="#c5c5c5" class="ico_down"></Icon></div></Col>
      <Col class="nav_search" :lg="{span:4}" :md="{span:0}" :sm="0" :xs="0">
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
    <m-nav></m-nav>
  </header>
</template>

<script>
import AllProduct from './components/pullPage'
import uspull from './components/commonPulldown'
import mNav from './components/mNav'
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
      showDom: false
    }
  },
  methods: {
    showPullDown () {
      this.showAllPro = !this.showAllPro
    },
    showDomestic () {
      this.showDom = !this.showDom
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
     @include font(12px, 40px)
     .co_ite
       text-align: left
       margin: 15px
     .arr
       text-align: left
       margin-left: 3px
   .bar_middle
     text-align: right
     .contact_way
   .bar_right
     @include font(12px, 40px)
     text-align: right
     .login
      text-align: right
      @include sc(15px, #fff)
      .log
        margin-left: 10px
  .nav
    border-bottom: 1px solid #b8b8b8
    background: #fff
    position: relative
    .nav_logo, .nav_item, .nav_item_shop, .nav_search_small, .nav_item_spl, .all_product
      line-height: 90px
    .nav_item, .nav_item_shop, .nav_item_spl, .all_product
      margin-right: 20px
      @include sc(18px, #1a1a1a)
      white-space: nowrap
      .ico, .ico_down
        margin-left: 10px
        vertical-align: middle
        font-weight: 700
      .ico_down
        font-weight: 200
    .all_product
      margin-right: 30px
      position: static!important // 加了static之后子元素就不会在受父元素的宽度限制了
      .all
        &:hover
          color: $greenfont
    .domestic
      position: relative
    .nav_item
      margin-right: 30px
      &:hover
        color: $greenfont
    .nav_item_spl
      margin-right: 35px
    .nav_search
      white-space: nowrap
      height: 90px
      border-left: 1px solid #b8b8b8
      border-right: 1px solid #b8b8b8
      position: relative
      .search
        // padding: 0 10px 0 10px
        @include center
        .search_item_all
          display: inline-block
          .search_item
            background: #eaeaea
            display: inline-block
            @include wh(160px, 35px)
            padding: 0 10px
          .smal_ico
            display: inline-block
            width: 22.5px
            height: 34.5px
            vertical-align: middle
            margin-left: 10px
          .desc
            @include sc(12px, #5c5c5c)
            margin-top: 5px
    .nav_search_small
      width: 23px
      text-align: center
      .search_ico
        vertical-align: middle
</style>
