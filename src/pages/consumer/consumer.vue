<template>
  <div class="consumer">
    <com-swiper :swiperImg="swiperImg"></com-swiper>
    <div class="c_content">
      <con-content :number="item" v-for="item of 5" :key="item" ref="con"></con-content>
    </div>
  </div>
</template>

<script>
import comSwiper from 'components/swiper/swiper'
import conContent from './components/conContent'
export default {
  name: 'consumer',
  components: {
    comSwiper,
    conContent
  },
  data () {
    return {
      number: 5,
      swiperImg: [{
        id: 1,
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180716134722.jpg'
      }, {
        id: 2,
        imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180716134811.jpg'
      }]
    }
  },
  methods: {
    // 改变背景颜色
    bgStyle () {
      this.$refs.con.forEach((res, index) => {
        if ((index + 1) % 2 === 0) {
          res.$el.style.backgroundColor = '#f5f5f5'
        }
      })
    }
  },
  mounted () {
    this.bgStyle()
  }
}
</script>

<style lang="sass" scoped>
.consumer
  & /deep/ .banner
    padding-bottom: 37.6%
</style>
