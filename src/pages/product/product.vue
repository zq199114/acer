<template>
  <div class="product">
    <s-bar></s-bar>
    <div class="pro_select">
      <div class="left">
        <div class="img_b"><img src="https://gwimages.acer.com.cn/uploads/propic/046510757347ddf974a0f62bda10e282.png" alt=""></div>
        <div class="s_img" v-for="item of 3" :key="item"><img src="https://gwimages.acer.com.cn/uploads/propic/046510757347ddf974a0f62bda10e282.png" alt=""></div>
      </div>
      <div class="right">
        <div class="name">翼5 A515-51G</div>
        <div class="model">A615-51G-830F</div>
        <div class="model_select">
          <div class="title">选择版本</div>
          <div class="model_item" v-for="item of 3" :key="item" @click="selectItem(item)" :class="{'active': item===index}">
            <div class="img_s"><img src="https://gwimages.acer.com.cn/uploads/config/a8540b221bb981f02b298149bcb918e7.png" alt=""></div>
            <div class="m_desc">i7-8550U</div>
          </div>
        </div>
        <div class="modle_detail">
          <div class="desc">i7-8550U/4G/1T/MX130 2G/Win10/15.6 FHD/IronBlack</div>
          <div class="price">总计: <i>5499.00</i></div>
        </div>
        <div class="add_cart">
          <div class="add">加入购物车</div>
          <div class="immed">立即购买</div>
        </div>
      </div>
    </div>
    <pro-content></pro-content>
    <para></para>
    <promnise></promnise>
  </div>
</template>

<script>
import sBar from './components/scrollBar'
import proContent from './components/content'
import para from './components/parameter'
import promnise from './components/promise'
export default {
  name: 'product',
  components: {
    sBar,
    proContent,
    para,
    promnise
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    selectItem (item) {
      this.index = item
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~styles/mixin.scss"
.product
  .pro_select
    padding: .5rem .8rem
    .left
      width: 45%
      display: inline-block
      .img_b
        width: 100%
        border: .01rem solid #e8e8e8
        img
          width: 100%
      .s_img
        margin-top: .25rem
        width: 20%
        border: .01rem solid #e8e8e8
        display: inline-block
        margin-right: 1%
        img
          width: 100%
    .right
      margin-left: 4%
      vertical-align: top
      width: 49%
      display: inline-block
      .name
        font-size: .25rem
      .model
        font-size: .17rem
        color: #969696
        margin-top: .15rem
      .model_select
        margin-top: .2rem
        .title
          font-size: .2rem
        .model_item
          cursor: pointer
          margin-top: .2rem
          width: 49%
          margin-right: 1%
          border: .01rem solid #d2d2d2
          display: inline-block
          .img_s
            display: inline-block
            width: 30%
            border-right: .01rem solid #d2d2d2
            img
              width: 100%
          .m_desc
            display: inline-block
            font-size: .18rem
        .active
          border-color: $greenfont
          color: $greenfont
      .modle_detail
        margin-top: 5%
        padding: .3rem .2rem
        background: #fafafa
        .desc
          font-size: .17rem
          color: #969696
        .price
          margin-top: 5%
          font-size: .17rem
          color: $greenfont
          i
            font-size: .25rem
            &:before
              content: '￥'
              font-size: .15rem
      .add_cart
        margin-top: 5%
        .add, .immed
          padding: .1rem .2rem
          font-size: .17rem
          border: .02rem solid $greenfont
          display: inline-block
          color: $greenfont
        .immed
          background: $greenfont
          color: #fff
@media only screen and (max-width: 768px)
  .product
    .pro_select
      padding: .3rem .2rem
      .left
        width: 100%
      .right
        width: 100%
        margin: .2rem 0 0 0
        .name
          font-size: .5rem
        .model
          font-size: .34rem
        .model_select
          .title
            font-size: .4rem
          .model_item
            // width: 100%
            .m_desc
              font-size: .36rem
        .modle_detail
          .desc
            font-size: .34rem
          .price
            font-size: .34rem
            i
              font-size: .5rem
              &:before
                font-size: .3rem
        .add_cart
          .add, .immed
            font-size: .34rem
</style>
