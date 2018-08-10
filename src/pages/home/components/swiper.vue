<template>
  <div class="banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperImg" v-bind:key="item.id">
        <router-link tag="img" :to="item.url" :src="item.imgUrl" alt="" class="swiper_img swiper-lazy"></router-link>
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
      <!--<swiper-slide>I'm Slide 2</swiper-slide>-->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
    <div class="bottom_arrow"></div>
  </div>
</template>

<script>
export default {
  name: 'swiperHome',
  data () {
    return {
      swiperImg: [{
        id: '1',
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180524205816.jpg',
        url: '/index'
      }, {
        id: '2',
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180527165531.jpg',
        url: '/shop'
      }, {
        id: '3',
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180628140245.jpg',
        url: '/show'
      }, {
        id: '4',
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180614141452.jpg',
        url: '/show'
      }, {
        id: '5',
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20171223103539.jpg',
        url: '/show'
      }],
      swiperOption: {
        clickable: true,
        lazy: {
          loadPrevNext: true
        },
        // init: false,
        // notNextTick: true,
        autoplay: { delay: 3000, stopOnLastSlide: false, disableOnInteraction: true }, // 自动轮播
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
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
      bottom: 0.4rem
      left: auto
      right: 0.4rem
      & /deep/ .my-bullet
        display: inline-block
        margin-right: 0.1rem
        width: 0.2rem
        height: 0.05rem
        background: #fff
        transition: all .3s
      & /deep/ .my-bullet-active
        height: 0.1rem
        width: 0.3rem
        background: $greenlogo
    .swiper-button-prev, .swiper-button-next
      opacity: 0
      transition: all 0.3s linear 0s
    &:hover
      .swiper-button-prev , .swiper-button-next
        opacity: 1
      .swiper-button-prev
        left: 1.1rem
        background: url(https://www.acer.com.cn/web/images/mbanner-prev.png) no-repeat
        background-size: contain
        &:hover
          background: url("https://www.acer.com.cn/web/images/banner-prev2.png") no-repeat
          background-size: contain
      .swiper-button-next
        background: url(https://www.acer.com.cn/web/images/mbanner-next.png) no-repeat
        background-size: contain
        right: 1.1rem
        &:hover
          background: url("https://www.acer.com.cn/web/images/banner-next2.png") no-repeat
          background-size: contain
    .bottom_arrow
      position: absolute
      bottom: 0px
      @include cl
      width: 4%
      height: 0.4rem
      background: url(https://gwcss.acer.com.cn/images/ban-bottom1.png) center bottom no-repeat
      z-index: 10
      background-size: 100% auto !important
</style>
