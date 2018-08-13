<template>
  <div class="con_content mw">
    <div class="con_title">暗影骑士（游戏本）</div>
    <div class="con_desc">整机坚固耐用，为粗犷的游戏本带来了品质感</div>
    <!--:class="{'swiper_active': number.length<4}"用来判断是否加上justify-content: center-->
    <swiper :options="swiperOption" ref="mySwiper" class="swiper_ooo" :class="{'swiper_active': number.length<4}">
      <swiper-slide v-for="item in number" v-bind:key="item">
        <pro-card></pro-card>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">
        <Icon type="ios-arrow-left"></Icon>
      </div>
      <div class="swiper-button-next" slot="button-next">
        <Icon type="ios-arrow-right"></Icon>
      </div>
    </swiper>
  </div>
</template>

<script>
import proCard from './proCard'
export default {
  name: 'conContent',
  components: {
    proCard
  },
  props: {
    item: Number
  },
  data () {
    return {
      number: [1, 2, 3, 5, 7],
      swiperOption: {
        slidesPerView: 'auto',
        // spaceBetween: '1%',
        clickable: true,
        // init: false,
        // notNextTick: true,
        // autoplay: { delay: 3000, stopOnLastSlide: false, disableOnInteraction: true }, // 自动轮播
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
@import "~styles/mixin.scss"
.con_content
  width: 88%
  padding-bottom: .4rem
  .con_title
    @include sc(.35rem, #1e1e1e)
    line-height: .7rem
    font-weight: 700
    text-align: center
    margin-top: .25rem
  .con_desc
    @include sc(.15rem, #1e1e1e)
    margin-bottom: .5rem
    text-align: center
  .swiper_ooo
    & /deep/ .swiper-wrapper
      // justify-content: center
      .swiper-slide
        width: 23%!important
        margin: 0 1%
    .swiper-button-prev, .swiper-button-next
      background: none
      color: #d1d1d1
      font-size: .5rem
      text-align: center
      &:hover
        color: $greenfont
  .swiper_active
    & /deep/ .swiper-wrapper
      justify-content: center
@media only screen and (max-width: 768px)
  .con_content
    .con_title
      @include sc(.4rem, #1e1e1e)
      line-height: .7rem
    .con_desc
      @include sc(.3rem, #1e1e1e)
    .swiper_ooo
      .swiper-wrapper
        .swiper-slide
          width: 48%!important
</style>
