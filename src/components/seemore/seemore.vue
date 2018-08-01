<template>
  <div class="seemore">
    查看更多
  </div>
</template>

<script>
export default {
  name: 'seemore'
}
</script>

<style lang="sass" scoped>
@import "~styles/mixin.scss"
.seemore
  display: inline-block
  padding: 0 .5rem 0 .2rem
  color: $greenfont
  border: .01rem solid
  background: url("https://gwcss.acer.com.cn/images/con-more2.png") 90% center no-repeat // 90%是横坐标 center是纵坐标
  font-size: .18rem
  line-height: .46rem
  margin-top: .4rem
  margin-left: 50%
  transform: translateX(-50%)
@media only screen and (max-width: 768px)
  .seemore
    font-size: .3rem
    line-height: .6rem
    padding: 0 .6rem 0 .3rem
</style>
