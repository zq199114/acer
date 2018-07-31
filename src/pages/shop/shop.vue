<template>
  <div class="shop">
    <com-swiper></com-swiper>
    <Row class="new_pro" type="flex" justify="center" :gutter="16">
      <Col v-for="(item, index) in proList" :key="index" class="new_pro_list" :lg="{span: 11}" :md="{span: 11}" :sm="{span: 11}" :xs="{span: 22}">
        <Card class="new_pro_item">
          <div class="left">
            <div class="name">{{item.name}}</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="price">{{item.price}}</div>
            <div class="buy">
              <div class="now">立即购买</div>
              <div class="collect">收藏</div>
            </div>
          </div>
          <div class="right">
            <img :src="item.proImg" alt="">
          </div>
        </Card>
      </Col>
    </Row>
    <seeMore></seeMore>
  </div>
</template>

<script>
import comSwiper from './components/swiper'
import seeMore from 'components/seemore/seemore'
export default {
  name: 'shop',
  components: {
    comSwiper,
    seeMore
  },
  data () {
    return {
      proList: []
    }
  },
  methods: {
    getList (res) {
      if (res.status === 200) {
        let data = res.data
        this.proList = data
      }
    }
  },
  mounted () {
    this.$axios.get('/prolist').then(res => this.getList(res))
  }
}
</script>

<style lang="sass" scoped>
@import "~styles/mixin.scss"
.shop
  background: #f9f9f9
  .new_pro
    margin: .9rem 0
    .new_pro_list
      .new_pro_item
        position: relative
        padding: .2rem  .15rem
        .left
          position: relative
          overflow: hidden
          z-index: 10 // 要让z-index生效纪要加上相对定位
          display: inline-block
          width: 50%
          .name
            white-space: nowrap
            font-size: .16rem
            line-height: .25rem
            &:before
              content: "新品"
              display: inline-block
              background: $greenfont
              color: #fff
              padding: 0 .1rem
              margin-right: .08rem
              font-size: .14rem
          .title
            font-size: .23rem
            margin-top: .13rem
          .desc
            font-size: .15rem
            line-height: .25rem
            height: .5rem
            margin: .17rem 0 .25rem
            @include Rellipsis
          .price
            font-size: .28rem
            font-weight: 700
            color: $greenfont
            &:before
              content: '￥'
              color: $greenfont
              font-size: .16rem
              font-weight: normal
          .buy
            margin-top: .15rem
            z-index: 66
            .now
              display: inline-block
              border: .01rem solid $greenfont
              color: $greenfont
              font-size: .14rem
              line-height: .3rem
              padding: 0 .15rem
            .collect
              display: inline-block
              color: #999
              padding-left: 16%
        .right
          overflow: hidden
          z-index: 10
          display: inline-block
          width: 49%
          @include ct
          img
            width: 100%
        &:after
          z-index: 1
          content: 'NEW'
          position: absolute
          font-size: 1.3rem
          color: #f6faf3
          right: 0rem
          bottom: -.2rem
          font-weight: bold
          font-family: Arial
          line-height: 1.4rem
</style>
