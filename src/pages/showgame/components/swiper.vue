<template>
  <div class="listbanner">
    <swiper class="continer" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="continer_item" v-for="(item, index) in pages" v-bind:key="index">
        <div v-for="(ite, index) of item" class="double_item" :key="index">
          <span class="model">{{ite.model}}</span>
          <span class="name">{{ite.name}}</span>
          <i class="img_con">
            <img :src="ite.imgUrl" alt="" class="swiper-lazy img">
          </i>
        </div>
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-conture">
      <div class="swiper-pagination-com"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gameListSwiper',
  props: {
    showList: Array
  },
  data () {
    return {
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
          el: '.swiper-pagination-com',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + ' / ' + total
          }
        },
        updateOnImagesReady: true,
        touchRatio: 1, // 触摸变慢
        observer: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observeParents: true // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.showList.forEach((item, index) => {
        let page = Math.floor(index / 2)
        // 如果不加此判断下面的pages[page]就是undefine
        // 初始化一下 (别忘了取反)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="sass" scoped type="text/sass">
  @import '~styles/mixin.scss'
  .listbanner
    position: relative
    width: 100%
    height: 100%
    .continer
      margin: 1rem .5rem
      .continer_item
        .double_item
          display: inline-block
          width: 50%
          text-align: center
          .model
            color: #fff
            font-size: .4rem
            display: block
          .name
            color: #fff
            font-size: .2rem
            display: block
            margin-top: .1rem
          .img_con
            display: block
            height: 0
            padding-bottom: 54%
            position: relative
            margin-top: .4rem
            .img
              height: 100%
              @include center()
          @media only screen and (max-width: 992px)
            .model
              font-size: .25rem
            .name
              font-size: .2rem
    .swiper-button-conture
      position: absolute
      width: 1.8rem
      // height: 1rem
      bottom: 0.4rem
      @include cl()
      .swiper-pagination-com
        height: .4rem
        line-height: .3rem
        color: #fff
        font-size: .25rem
        text-align: center
      .swiper-button-prev
        background: url(https://gwcss.acer.com.cn/images/gam-prev.png) no-repeat
        background-size: contain
      .swiper-button-next
        background: url(https://gwcss.acer.com.cn/images/gam-next.png) no-repeat
        background-size: contain
  @media only screen and (max-width: 768px)
    .listbanner
      display: none
</style>
