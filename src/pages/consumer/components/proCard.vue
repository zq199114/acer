<template>
  <div class="pro_card">
    <div class="img"><img src="https://gwimages.acer.com.cn/uploads/product/5a0fb595cd3ee6cba247dbf8923738cd.png" alt=""></div>
    <div class="desc">
      <div class="title">
        暗影骑士3枪神版
      </div>
      <div class="title_desc">
        宏碁暗影骑士3枪神版AN515-52 15.6英寸游戏笔记本
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'proCard'
}
</script>

<style lang="sass" scoped>
@import '~styles/mixin.scss'
.pro_card
  text-align: center
  display: inline-block
  padding: .25rem .25rem
  border: .01rem solid #d2d2d2
  width: 100%
  background: #fff
  .img
    width: 100%
    margin: 0 auto
    transition: all .3s
    img
      width: 100%
  .title
    border-top: .01rem dashed #d2d2d2
    @include sc(.23rem, #1e1e1e)
    font-weight: 700
    padding-top: .2rem
  .title_desc
    @include sc(.15rem, #969696)
    margin-top: .15rem
    line-height: .2rem
  &:hover
      .img
        transform: scale(1.07)
</style>
