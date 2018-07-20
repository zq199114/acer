<template>
  <div class="content">
    <Row class="row_item" :gutter="10">
      <Col class="col_item" v-for="item in arr[0]" :lg="12" :md="12" :sm="12" :xs="24" :key="item.id">
        <img class="item_img" :src="item.imgUrl" alt="">
      </Col>
      <i class="t_white"></i>
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
    <Row class="row_item_t" :gutter="10">
      <!--<Col class="col_item_t" v-for="item in contentImgArr[1]" :lg="12" :md="12" :sm="12" :xs="24" :key="item.id">-->
      <Col class="col_item_t" :lg="12" :md="12" :sm="12" :xs="24">
        <img class="item_img_t" :src="arr[1][0].imgUrl" alt="">
        <img class="item_img_t iit" :src="arr[1][2].imgUrl" alt="">
      </Col>
      <Col class="col_item_t" :lg="12" :md="12" :sm="12" :xs="24">
        <img class="item_img_t" :src="arr[1][1].imgUrl" alt="">
      </Col>
      <i class="b_white"></i>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'homeContent',
  data () {
    return {
      contentImg: [{
        id: '1',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/eea67c62ee461e68b9078763d9ba0df0.jpg'
      }, {
        id: '2',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/e42b6cff28b1ecd03d98319f6277dbda.jpg'
      }, {
        id: '3',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/710b6d8a8ff497d4d983dbdd92557b6d.jpg'
      }, {
        id: '4',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/2f8e5a8ab6343bb182024a64ed447520.jpg'
      }, {
        id: '5',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/c00c0118d1fe08dd9033c5b3e9f7301c.jpg'
      }, {
        id: '6',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/5b8e4b06ee9b357263a00be0ce392ae7.jpg'
      }],
      bottom_img: {
        id: '7',
        imgUrl: 'https://gwimages.acer.com.cn/uploads/inpic/e620cfaa3263d4220d7ef9de2a503290.jpg'
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

<style lang="sass" scoped>
@import '~styles/mixin.scss'
.content
  padding: 40px
  .row_item, .row_item_t
    position: relative
    .t_white
      @include cl
      bottom: 0
      border: 20px solid transparent
      border-bottom: 20px solid #fff
      width: 0
    .b_white
      @include cl
      top: 0
      border: 20px solid transparent
      border-top: 20px solid #fff
      width: 0
    .col_item
      margin-top: 1.4%
    &, .col_item_t
      .item_img, .item_img_t
        width: 100%
      .iit
        margin-top: 3%
  .werp
    width: 100%
    .werp_cen
      position: relative
      height: 0
      padding-bottom: 3%
      width: 100%
      .rho
        @include center
        width: 10px
        height: 10px
        .rhox
          width: 100%
          height: 100%
          background: $greenfont
          transform: rotate(45deg)
      // .rho
      //   border: 10px solid transparent
      //   border-bottom: 10px solid $greenfont
      //   width: 0
      // .rhox
      //   border: 10px solid transparent
      //   border-top: 10px solid $greenfont
      // width: 0
</style>
