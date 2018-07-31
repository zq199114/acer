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
  padding: .15rem .4rem .15rem .2rem
  color: $greenfont
  border: .01rem solid
  background: url("https://gwcss.acer.com.cn/images/con-more2.png") no-repeat center right
  font-size: .2rem
  margin: 0 auto
</style>
