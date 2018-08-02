<template>
  <header class="top">
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
    <Row class="nav mw">
      <Col class="nav_logo" :lg="{span:3}" :md="{span:3}" :sm="0" :xs="0"><div class="logo"><img src="https://gwimages.acer.com.cn/uploads/whole/13e8d541d74ed1b43876c3da0b44c3b9.png" alt=""></div></Col>
      <Col class="nav_item nav_item_shop" :lg="{span:2, offset:1}" :md="{span:2, offset:4}" :sm="0" :xs="0"><router-link tag="div" to="/shop">宏碁商城<Icon type="ios-cart-outline" color="#78Bc27" size="22" class="ico"></Icon></router-link></Col>
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
          <Icon type="chevron-down" color="#c5c5c5" class="ico_down"></Icon>
        </div>
      </Col>
      <Col class="nav_item nav_item_spl" :lg="{span:1}" :md="{span:1}" :sm="0" :xs="0"><div>高端电竞</div></Col>
      <Col class="nav_item" :lg="{span:1}" :md="{span:1}" :sm="0" :xs="0"><div>商用<Icon type="chevron-down" color="#c5c5c5" class="ico_down"></Icon></div></Col>
      <Col class="nav_item nav_item_spl" :lg="{span:1}" :md="{span:1}" :sm="0" :xs="0"><div>解决方案</div></Col>
      <Col class="nav_item" :lg="{span:2}" :md="{span:2}" :sm="0" :xs="0"><div>服务支持<Icon type="chevron-down" color="#c5c5c5" class="ico_down"></Icon></div></Col>
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
  .nav
    // border-bottom: 0.01rem solid #b8b8b8
    background: #fff
    position: relative
    .nav_logo, .nav_item, .nav_item_shop, .nav_search_small, .nav_item_spl, .all_product
      line-height: 0.9rem
    .nav_item, .nav_item_shop, .nav_item_spl, .all_product
      margin-right: 0.2rem
      @include sc(0.18rem, #1a1a1a)
      white-space: nowrap
      .ico, .ico_down
        margin-left: 0.1rem
        vertical-align: middle
        font-weight: 700
      .ico_down
        font-weight: 200
    .all_product
      margin-right: 0.3rem
      position: static!important // 加了static之后子元素就不会在受父元素的宽度限制了
      .all
        &:hover
          color: $greenfont
    .domestic
      position: relative
    .nav_item
      margin-right: 0.3rem
      &:hover
        color: $greenfont
    .nav_item_spl
      margin-right: 0.35rem
    .nav_search
      white-space: nowrap
      height: 90px
      border-left: 0.01rem solid #b8b8b8
      border-right: 0.01rem solid #b8b8b8
      position: relative
      .search
        // padding: 0 10px 0 10px
        @include center
        .search_item_all
          display: inline-block
          .search_item
            font-size: .15rem
            background: #eaeaea
            display: inline-block
            @include wh(1.6rem, 0.35rem)
            padding: 0 10px
          .smal_ico
            display: inline-block
            width: 0.225rem
            height: 0.345rem
            vertical-align: middle
            margin-left: 0.10rem
          .desc
            @include sc(0.12rem, #5c5c5c)
            margin-top: 0.05rem
    .nav_search_small
      width: 0.23rem
      text-align: center
      .search_ico
        vertical-align: middle
</style>
