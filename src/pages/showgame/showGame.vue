<template>
  <div class="show_game">
    <swiper-com :swiperImg="swiperImg" :buttonPR="buttonshow"></swiper-com>
    <content-show :gameList="gameList"></content-show>
  </div>
</template>

<script>
import swiperCom from 'components/swiper/swiper'
import contentShow from './components/content'
export default {
  name: 'showGame',
  components: {
    swiperCom,
    contentShow
  },
  data () {
    return {
      swiperImg: [], // 轮播图
      gameList: [], // 游戏本列表
      buttonshow: false // 判断是否显示左右两边的图片前进后退
    }
  },
  methods: {
    getListItem (res) {
      if (res.status === 200) {
        let data = res.data
        this.swiperImg = data.swiperImg
        this.gameList = data.list
      }
    }
  },
  mounted () {
    this.$axios.post('/gameList').then(res => {
      this.getListItem(res)
    })
  }
}
</script>

<style lang="sass" scoped>
.show_game
  background: #1a1a1a
</style>
