<template>
  <div class="shop">
    <com-swiper></com-swiper>
    <Row class="new_pro mw" type="flex" justify="space-between" :gutter="16">
      <Col v-for="(item, index) in proList.slice(0, 2)" :key="index" class="new_pro_list" :lg="{span: 12, offset:0}" :md="{span: 12, offset:0}" :sm="{span: 12, offset:0}" :xs="{span:24}">
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
    <Row class="hot_sell mw" type="flex">
      <Col class="left_img" :lg="{span: 16}" :md="{span: 16}" :sm="{span: 16}" :xs="{span: 24}">
        <div class="right">
          <img :src="proList[2].proImg" alt="">
        </div>
      </Col>
      <Col class="right_content" :lg="{span: 8}" :md="{span: 8}" :sm="{span: 8}" :xs="{span:24}">
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
    <Row class="thinest mw">
      <Col class="thinest_list" v-for="(item, index) in proList2.slice(0,1)" :key="index" :lg="{span: 24}" :md="{span: 24}" :sm="{span: 24}" :xs="{span: 24}">
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
      <Col class="thinest_item" :lg="{span: 24}" :md="{span: 24}" :sm="{span: 24}" :xs="24">
        <Row class="thinest_row" type="flex" justify="space-between">
          <Col class="thinest_all"
               v-for="(item, index) in proList2.slice(1)"
               :key="index"
               :lg="7" :md="7" :sm="7" :xs="24"
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

<style lang="sass" scoped type="text/sass">
@import "~styles/mixin.scss"
@import "~styles/shop.sass"
.shop
  background: #f9f9f9
  .new_pro
    margin: 1.4rem auto .3rem!important
    .new_pro_list
      .new_pro_item
        position: relative
        padding: 2.5em .15rem
        @include cardLift("新品",45%)
        .left
          .price
            margin-top: .55rem
        @include cardRight(55%)
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
  .hot_sell
    // margin-bottom: 10rem
    .left_img
      @include cardRight(89%, false)
    .right_content
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
      height: 0
      padding: .3rem 0
      padding-bottom: 38%
      border: .01rem solid #d2d2d2
      .thinest_left
        padding-left: 1.5rem
        width: 49%
        display: inline-block
        @include ct()
        @include cardLift(100%)
        .left
          .price
            margin-top: .7rem
      .thinest_right
        padding-right: 1.5rem
        width: 55%
        margin-left: 46%
        display: inline-block
        @include ct()
        @include cardRight(100%, false)
    .thinest_item
      margin-top: .4rem
      .thinest_row
        .thinest_all
          border: .01rem solid #d2d2d2
          background: #fff
          padding: .35rem .4rem .2rem!important
          .top
            width: 100%
            padding-bottom: .34rem
            border-bottom: .01rem dashed #d2d2d2
            text-align: center
            @include cardRight(70%, false)
            .right
              transition: all 0.3s linear 0s
          .bottom
            margin-top: .34rem
            width: 100%
            @include cardLift(false, 100%)
            .left
              .name
                font-size: .25rem
                color: #535353
                @include noRellipsis()
              .desc
                font-size: .13rem
                color: #969696
              .price
                color: #333
                font-weight: 400
                &:before
                  color: #333
          &:hover
            .top
              .right
                transform: scale(1.05)
                // transform: translate3d(-50%,-50%,0) !important
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
      .right_content
        margin: 0 auto
        width: 92%
        padding-bottom: 50%
        .left
          width: 80%
          @include xsFont()
      .left_img
        margin: 0 auto
        width: 92%
        .right
          width: 100%
    .separate
      width: 35%
      border-bottom: .04rem solid #a15e00
      margin-top: .6rem
      img
        display: none
      i
        font-size: .5rem
    .thinest
      .thinest_list
        height: 0
        padding-bottom: 45%
        .thinest_left
          padding-left: 3%
          .left
            width: 100%
            @include xsFont()
            .price
              margin-top: 0
        .thinest_right
          padding: 0
          width: 50%
          margin-left: 46%
          @include ct()
      .thinest_item
        .thinest_row
          .thinest_all
            margin-top: .3rem
            .top
              .right
                width: 80%
            .bottom
              .left
                @include xsFont()
                .name
                  line-height: .4rem
            &:hover
              .top
                .right
                  transform: none
</style>
