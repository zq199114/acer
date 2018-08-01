<template>
  <div class="shop">
    <com-swiper></com-swiper>
    <Row class="new_pro" type="flex" justify="center" :gutter="16">
      <Col v-for="(item, index) in proList.slice(0, 2)" :key="index" class="new_pro_list" :lg="{span: 11}" :md="{span: 11}" :sm="{span: 11}" :xs="{span: 22}">
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
      <seeMore class="more"></seeMore>
    </Row>
    <Row class="hot_sell" type="flex">
      <Col class="left_img" :lg="{span: 14, offset: 1}" :md="{span: 14, offset: 1}" :sm="{span: 14, offset: 1}" :xs="{span: 22, offset: 1}">
        <div class="right">
          <img :src="proList[2].proImg" alt="">
        </div>
      </Col>
      <Col class="right_content" :lg="{span: 8}" :md="{span: 8}" :sm="{span: 8}" :xs="{span:22, offset: 1}">
        <div class="left">
          <div class="name">{{proList[2].name}}</div>
          <div class="title">{{proList[2].title}}</div>
          <div class="desc">{{proList[2].desc}}</div>
          <div class="price">{{proList[2].price}}</div>
          <div class="buy">
            <div class="now">立即购买</div>
            <div class="collect">收藏</div>
          </div>
        </div>
      </Col>
      <see-more></see-more>
    </Row>
    <div class="separate">
      <img src="https://www.acer.com.cn/web/images/mtit-img1.png" alt="">
      <i>奢 由轻而来</i>
    </div>
    <Row class="thinest">
      <Col class="thinest_list" v-for="(item, index) in proList2.slice(0,1)" :key="index" :lg="{span: 22, offset:1}" :md="{span: 22, offset:1}" :sm="{span: 22, offset:1}">
        <div class="thinest_left">
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
        </div>
        <div class="thinest_right">
          <div class="right">
            <img :src="item.proImg" alt="">
          </div>
        </div>
      </Col>
      <Col class="thinest_item" :lg="{span: 22, offset:1}" :md="{span: 22, offset:1}" :sm="{span: 22, offset:1}">
        <Row class="thinest_row">
          <Col class="thinest_all"
               v-for="(item, index) in proList2.slice(1)"
               :key="index"
               :lg="8" :md="8" :sm="8"
          >
            <div class="top">
              <div class="right">
                <img :src="item.proImg" alt="">
              </div>
            </div>
            <div class="bottom">
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
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
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
      proList: [],
      proList2: []
    }
  },
  methods: {
    getList (res) {
      if (res.status === 200) {
        let data = res.data
        console.log(data)
        this.proList = data.list
        this.proList2 = data.list2
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
@import "~styles/shop.sass"
.shop
  background: #f9f9f9
  .new_pro
    margin: .5rem 0 .3rem
    .new_pro_list
      .new_pro_item
        position: relative
        padding: .2rem .15rem
        @include cardLift("新品")
        @include cardRight()
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
    .more
      margin-left: 0
      transform: none
  .hot_sell
    height: 0
    padding-bottom: 51%
    /*overflow: hidden*/
    .left_img
      @include cardRight(100%, false)
    .right_content
      width: 29%
      height: 0
      padding-bottom: 38%
      background: #333333
      // position: relative
      @include cardLift("热销", 60% ,#e1e1e1)
      .left
        @include center
  .separate
    width: 3.5rem
    color: #a15e00
    border-bottom: .015rem solid #a15e00
    font-size: .35rem
    padding: 0 0 .2rem .3rem
    margin-bottom: .5rem
    white-space: nowrap
    img
      width: 35%
      margin-bottom: -.15rem
    i
      vertical-align: bottom
      height: 1rem
      white-space: nowrap
  .thinest
    .thinest_list
      position: relative
      padding: .3rem 0
      border: .01rem solid #d2d2d2
      .thinest_left
        padding-left: .5rem
        width: 49%
        display: inline-block
        @include ct()
        @include cardLift(100%)
        .left
          .price
            margin-top: .7rem
      .thinest_right
        padding-right: .5rem
        width: 49%
        margin-left: 50%
        display: inline-block
        @include cardRight(100%, false)
    .thinest_item
      .thinest_row
        .thinest_all
          .top
            width: 100%
            @include cardRight(100%, false)
          .bottom
            width: 100%
            @include cardLift(false, 100%)
@media only screen and (max-width: 768px)
  .shop
    .new_pro
      margin-top: 1.5rem
      .new_pro_list
        .new_pro_item
          margin-top: .1rem
          .left
            @include xsFont()
    .hot_sell
      padding-bottom: 126%
      .right_content
        width: 92%
        padding-bottom: 50%
        .left
          width: 80%
          @include xsFont()
</style>
