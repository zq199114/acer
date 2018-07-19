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
  </div>
</template>

<script>
export default {
  name: 'swiperHome',
  data () {
    return {
      swiperImg: [{
        id: '1',
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180524205816.jpg'
      }, {
        id: '2',
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180527165531.jpg'
      }, {
        id: '3',
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180628140245.jpg'
      }, {
        id: '4',
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180614141452.jpg'
      }, {
        id: '5',
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20171223103539.jpg'
      }],
      swiperOption: {
        lazy: {
          loadPrevNext: true
        },
        // init: false,
        // notNextTick: true,
        autoplay: { delay: 3000, stopOnLastSlide: false, disableOnInteraction: true }, // 自动轮播
        pagination: {
          el: '.swiper-pagination'
          // bulletClass: 'my-bullet'
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

<style lang="sass" scoped>
  .my-bulle
    display: inline-block
    width: 20px
    height: 10px
    background: #fff
  .banner
    width: 100%
    .swiper_img
      width: 100%
</style>
