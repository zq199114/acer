<template>
  <div class="banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperImg" v-bind:key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper_img swiper-lazy">
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
      <!--<swiper-slide>I'm Slide 2</swiper-slide>-->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
    <Row class="white_banner">
      <Col class="ctrl" :lg="24" :md="24">
        <Col :lg="{span: 12}" :md="{span: 12}" :sm="{span: 12}" :sx="{span: 24}">&nbsp;</Col>
        <Col class="search" :lg="{span: 10, offset: 1}" :md="{span: 10, offset: 1}" :sm="{span: 10, offset: 1}" :sx="{span: 24}">
          <div class="input">
            <input type="text" placeholder="Acer 4759G"><button><Icon type="search"></Icon></button>
            <span class="m-title">新品&nbsp;|&nbsp;热销&nbsp;|&nbsp;轻薄&nbsp;|&nbsp;电竞</span>
          </div>
        </Col>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'swiperHome',
  data () {
    return {
      swiperImg: [{
        id: '1',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/banner/85adbfb4758626fad114627e4b477b39.jpg'
      }, {
        id: '2',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/banner/ce84114b6509d008416ba65b16109488.png'
      }, {
        id: '3',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/banner/a03cc77b280d57037ac6ddd5c4d9a251.jpg'
      }, {
        id: '4',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/banner/473fe577900798711d9bc69672f5aba1.png'
      }],
      swiperOption: {
        clickable: true,
        lazy: {
          loadPrevNext: true
        },
        // init: false,
        // notNextTick: true,
        autoplay: { delay: 3000, stopOnLastSlide: false, disableOnInteraction: true }, // 自动轮播
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        },
        updateOnImagesReady: true,
        touchRatio: 1, // 触摸变慢
        observer: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observeParents: true // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
      }
    }
  }
}
</script>

<style lang="sass" scoped type="text/sass">
  @import '~styles/mixin.scss'
  .banner
    position: relative
    height: auto
    width: 100%
    .swiper_img
      width: 100%
    .swiper-pagination
      width: 3.5rem
      bottom: 1.3rem
      @include cl
      & /deep/ .my-bullet
        display: inline-block
        margin-right: 0.1rem
        width: 0.2rem
        height: 0.05rem
        background: rgba(0, 0, 0, .5)
      & /deep/ .my-bullet-active
        height: 0.1rem
        width: 0.3rem
        background: #000
    .white_banner
      position: absolute
      z-index: 10
      bottom: 0
      left: 0
      right: 0
      background: url("https://www.acer.com.cn/web/images/mall-bg.png") no-repeat
      background-size: 100% auto // 背景图按照当前div大小按比例缩放
      &:before // 用伪元素撑开
        content: ''
        display: block
        padding-top: 16.1%
      .ctrl
        position: absolute
        bottom: -.5rem
        left: 0
        right: 0
        .search
          .input
            width: 100%
            input
              border: .01rem solid $greenfont
              width: 70%
              background: transparent
              padding: .05rem
              height: .5rem
              line-height: .5rem
              &::placeholder
                font-size: .18rem
            button
              border: .01rem solid $greenfont
              background: $greenfont
              width: 30%
              color: #fff
              height: .5rem
              line-height: .5rem
            .m-title
              font-size: .14rem
              line-height: .4rem
              color: #969696
      @media only screen and (max-width: 768px)
        .ctrl
          bottom: -1.2rem
          .search
            width: 80%
            margin-left: 10%
            .input
              input, button
                height: .7rem
              .m-title
                font-size: .2rem
</style>
