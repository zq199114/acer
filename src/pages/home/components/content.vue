<template>
  <div class="content">
    <home-swiper></home-swiper>
    <Row class="row_item mw" :gutter="10">
      <Col class="col_item" v-for="item in arr[0]" :lg="{span: 12}" :md="12" :sm="12" :xs="24" :key="item.id">
        <div class="hover_img">
          <router-link :to="item.url" tag="img" class="item_img" :src="item.imgUrl" alt=""></router-link>
        </div>
      </Col>
      <Col class="b_white" :lg="24" :md="24" :sm="24" :xs="0">
        <img src="https://gwcss.acer.com.cn/images/pro-fig1.png" alt="">
      </Col>
    </Row>
    <Row class="werp">
      <Col class="werp_cen" :lg="{span:1}" :md="{span:1}" :sm="{span:1}" :xs="0">
        <!--<div class="rho"></div>-->
        <!--<div class="rhox"></div>-->
        <div class="rho">
          <div class="rhox"></div>
        </div>
      </Col>
    </Row>
    <Row class="row_item_t mw" :gutter="10">
      <!--<Col class="col_item_t" v-for="item in contentImgArr[1]" :lg="12" :md="12" :sm="12" :xs="24" :key="item.id">-->
      <Col class="col_item_t" :lg="12" :md="12" :sm="12" :xs="24">
        <div class="hover_img">
          <img class="item_img_t" :src="arr[1][0].imgUrl" alt="">
        </div>
        <div class="hover_img">
          <img class="item_img_t iit" :src="arr[1][2].imgUrl" alt="">
        </div>
      </Col>
      <Col class="col_item_t" :lg="12" :md="12" :sm="12" :xs="24">
        <div class="hover_img">
          <img class="item_img_t" :src="arr[1][1].imgUrl" alt="">
        </div>
      </Col>
      <Col class="b_white" :lg="24" :md="24" :sm="24" :xs="0">
        <img src="https://gwcss.acer.com.cn/images/pro-fig1.png" alt="">
      </Col>
      <Col class="t_white" :lg="24" :md="24" :sm="24" :xs="0">
        <img src="https://gwcss.acer.com.cn/images/pro-fig2.png" alt="">
      </Col>
    </Row>
    <Row class="fenge">
      <Col class="fenge_item" :lg="24" :md="24" :sm="24" :xs="0">
        <img src="https://gwcss.acer.com.cn/images/pro-fig3.png" alt="">
      </Col>
    </Row>
    <Row class="row_bottom">
      <Col class="row_bottom_item"><img class="row_bottom_img" :src="bottom_img.imgUrl" alt=""></Col>
    </Row>
  </div>
</template>

<script>
import homeSwiper from './swiper.vue'
export default {
  name: 'homeContent',
  components: {
    homeSwiper
  },
  data () {
    return {
      contentImg: [{
        id: '1',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/eea67c62ee461e68b9078763d9ba0df0.jpg',
        url: '/show'
      }, {
        id: '2',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/e42b6cff28b1ecd03d98319f6277dbda.jpg',
        url: '/consumer'
      }, {
        id: '3',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/710b6d8a8ff497d4d983dbdd92557b6d.jpg',
        url: '/show'
      }, {
        id: '4',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/2f8e5a8ab6343bb182024a64ed447520.jpg',
        url: '/show'
      }, {
        id: '5',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/c00c0118d1fe08dd9033c5b3e9f7301c.jpg',
        url: '/show'
      }, {
        id: '6',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/5b8e4b06ee9b357263a00be0ce392ae7.jpg',
        url: '/show'
      }],
      bottom_img: {
        id: '7',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/e620cfaa3263d4220d7ef9de2a503290.jpg',
        url: '/show'
      }
      // contentImgArr: [] // 存放图片的数组
    }
  },
  computed: {
    arr () {
      let contentImgArr = []
      let er = 0
      // 把一个数组分成 两个数组
      for (let i = 0; i < this.contentImg.length; i++) {
        if ((i + 1) % 3 === 0) {
          contentImgArr.push(this.contentImg.slice(er, i + 1))
          er = i + 1
        }
      }
      return contentImgArr
    }
  },
  mounted () {
  }
}
</script>

<style lang="sass" scoped type="text/sass">
@import '~styles/mixin.scss'
.content
  .row_item, .row_item_t, .row_bottom
    margin: 0 auto!important
    overflow: hidden
    padding: 0 0
    position: relative
    .t_white
      padding: 0!important // important在这里加上是因为element.style这个节点因为无直接修改所以要加上!improtant
      //@include wab
      @include cl
      width: 6%
      top: 1%
      img
        width: 100%
    .b_white
      padding: 0!important
      //@include wat
      @include cl
      width: 6%
      bottom: 0
      img
       width: 100%
    .col_item, .col_item_t, .row_bottom_item
      .row_bottom_img
        width: 100%
      .hover_img
        width: 100%
        height: 100%
        overflow: hidden
        margin-top: 2.7%
        .item_img, .item_img_t
          width: 100%
        .item_img_t, .item_img
          transition: all 0.5s linear 0s
          &:hover
            transform: scale(1.03)
  .werp
    width: 100%
    .werp_cen
      position: relative
      height: 0
      padding-bottom: 3%
      width: 100%
      .rho
        @include cl
        top: 60%
        width: 0.15rem
        height: 0.15rem
        .rhox
          width: 100%
          height: 100%
          background: $greenfont
          transform: rotate(45deg)
  .fenge
    position: relative
    padding-bottom: 5%
    height: 0
    width: 100%
    .fenge_item
      @include center
      width: 2%
      img
        width: 100%
@media only screen and (max-width: 768px)
  .content
    .row_item, .row_item_t
      margin: 0!important
      width: 100%
</style>
