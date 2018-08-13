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
  mounted () {
    this.$refs.con.forEach(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="sass" scoped>
.consumer
  & /deep/ .banner
    padding-bottom: 37.6%
  .c_content:last-child
    background: #000
</style>
