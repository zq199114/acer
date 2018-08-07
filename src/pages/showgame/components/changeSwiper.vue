<template>
  <div class="change">
    <ul class="list">
      <li class="item">
        <div v-for="(ite, index) of showList" class="double_item" :key="index">
          <span class="model">{{ite.model}}</span>
          <span class="name">{{ite.name}}</span>
          <i class="img_con">
            <img :src="ite.imgUrl" alt="" class="swiper-lazy img">
          </i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'changeSwiper',
  props: {
    showList: Array
  }
}
</script>

<style lang="sass" scoped>
@import "~styles/mixin.scss"
.change
  display: none
  padding: 1rem 0
  .list
    .item
      .double_item
        display: inline-block
        width: 50%
        text-align: center
        .model
          color: #fff
          font-size: .3rem
          display: block
        .name
          color: #fff
          font-size: .3rem
          display: block
          margin-top: .1rem
          @include noRellipsis()
        .img_con
          display: block
          height: 0
          padding-bottom: 54%
          position: relative
          margin-top: .4rem
          .img
            height: 100%
            @include center()
@media only screen and (max-width: 768px)
  .change
    display: block
</style>
