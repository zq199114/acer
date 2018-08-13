<template>
  <div class="consumer">
    <com-swiper :swiperImg="swiperImg"></com-swiper>
    <div class="c_content">
      <con-content :item="item" v-for="item of 4" :key="item" ref="con"></con-content>
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
    this.$axios.post('https://api.growingio.com/v2/bd9542a089aa6575/web/action?stm=1534173452483').then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="sass" scoped>
.consumer
  & /deep/ .banner
    padding-bottom: 37.6%
</style>
