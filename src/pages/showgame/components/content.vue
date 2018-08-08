<template>
  <div class="game_content mw">
    <ul class="game_list">
      <li class="game_item" v-for="(item, index) of gameList" :key="index" :class="{'active': index===current}" @click="changeShowList(item.children, index)">
        <div class="title_img"><img :src="item.titleImg" alt=""></div>
        <h4 class="title">{{item.title}}</h4>
        <div class="doubSwiper">
        </div>
      </li>
    </ul>
    <list-swiper :showList="showList"></list-swiper>
    <change-swiper :showList="showList"></change-swiper>
  </div>
</template>

<script>
import listSwiper from './swiper'
import changeSwiper from './changeSwiper'
export default {
  name: 'contentShow',
  props: {
    gameList: Array
  },
  components: {
    listSwiper,
    changeSwiper
  },
  data () {
    return {
      showList: [],
      hightlight: false, // 点击高亮
      current: 0 // 判断高亮
    }
  },
  methods: {
    changeShowList (list, index) {
      this.showList = list
      this.current = index
    }
  },
  watch: {
    gameList () {
      this.changeShowList(this.gameList[0].children, 0)
    }
  },
  mounted () {
    // console.log(this.gameList)
    // 以下为防止页面异常刷新而设置的
    // 一开始是获取不到props传来的数据的
    if (this.gameList.length === 0) return
    this.changeShowList(this.gameList[0].children, 0)
  }
}
</script>

<style lang="sass" scoped>
.game_content
  margin-top: 1rem
  .game_list
    display: flex
    justify-content: center
    .game_item
      opacity: .5
      text-align: center
      display: inline-block
      margin: 0 .5rem
      background: url("https://gwcss.acer.com.cn/images/gam-bg.png") no-repeat center 58%
      .title_img
        margin-bottom: .3rem
      .title
        color: #fff
        font-size: .20rem
    &>.active
      opacity: 1
@media only screen and (max-width: 768px)
  .game_content
    .game_list
      .game_item
        margin: 0 .3rem
        width: 20%
        .title_img
          margin-bottom: .6rem
          width: 100%
          img
            width: 100%
        .title
          font-size: .3rem
          white-space: nowrap
</style>
