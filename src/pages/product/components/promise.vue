<template>
  <div class="promise">
    <div class="title">
      承诺保障
    </div>
    <div class="promise_item">
      <div class="item"><img src="https://www.acer.com.cn/web/images/guarantee1.jpg" alt=""><i>7天无理由退货</i></div>
      <div class="item"><img src="https://www.acer.com.cn/web/images/guarantee2.jpg" alt=""><i>15天内质量问题换货</i></div>
      <div class="item"><img src="https://www.acer.com.cn/web/images/guarantee3.jpg" alt=""><i>3年保修期</i></div>
      <div class="item"><img src="https://www.acer.com.cn/web/images/guarantee4.jpg" alt=""><i>全国联保</i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'promise'
}
</script>

<style lang="sass" scoped>
.promise
  margin: .6rem .6rem 0
  .title
    font-size: .24rem
  .promise_item
    padding: .6rem 1rem .3rem
    width: 100%
    display: flex
    justify-content: space-between
    .item
      display: inline-block
      text-align: center
      img
        width: .6rem
        display: inline-block
      i
        display: block
        white-space: nowrap
        font-size: .16rem
        line-height: .4rem
@media only screen and (max-width: 768px)
  .promise
    margin: 0.6rem .3rem 0
    .title
      font-size: .3rem
    .promise_item
      padding: .6rem .1rem .3rem
      // width: 49%
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      .item
        display: inline-block
        text-align: center
        width: 50%
        img
          width: 1.4rem
          display: inline-block
        i
          display: block
          white-space: nowrap
          font-size: .3rem
          line-height: .9rem
</style>
