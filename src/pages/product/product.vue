<template>
  <div class="product">
    <div class="pro_select">
      <div class="left">
        <div class="img_b"><img src="https://gwimages.acer.com.cn/uploads/propic/046510757347ddf974a0f62bda10e282.png" alt=""></div>
        <div class="s_img"><img src="https://gwimages.acer.com.cn/uploads/propic/046510757347ddf974a0f62bda10e282.png" alt=""></div>
      </div>
      <div class="right">
        <div class="name">翼5 A515-51G</div>
        <div class="model">A615-51G-830F</div>
        <div class="model_select">
          <div class="title">选择版本</div>
          <div class="model_item">
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
  </div>
</template>

<script>
export default {
  name: 'product'
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
        img
          width: 100%
    .right
      vertical-align: top
      width: 54%
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
          margin-top: .2rem
          width: 50%
          border: .01rem solid #d2d2d2
          .img_s
            display: inline-block
            width: 30%
            border-right: .01rem solid #d2d2d2
            img
              width: 100%
          .m_desc
            display: inline-block
            font-size: .18rem
      .modle_detail
        margin-top: .5rem
        padding: .3rem .2rem
        background: #fafafa
        .desc
          font-size: .17rem
          color: #969696
        .price
          margin-top: .3rem
          font-size: .17rem
          color: $greenfont
          i
            font-size: .25rem
            &:before
              content: '￥'
              font-size: .15rem
      .add_cart
        margin-top: .3rem
        .add, .immed
          padding: .1rem .2rem
          font-size: .17rem
          border: .02rem solid $greenfont
          display: inline-block
          color: $greenfont
        .immed
          background: $greenfont
          color: #fff
</style>
