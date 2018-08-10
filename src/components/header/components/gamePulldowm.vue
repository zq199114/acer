<template>
  <div class="common_pull_down">
    <ul class="menu">
      <!--这里的点击事件要加stop防止冒泡-->
      <li class="menu_item" v-for="(item, index) of locallist"
          :key="index"
          @mouseover="showChildren(item.children, index)"
          @mouseleave="hidden"
          @click.stop="toShowPage(item, index, cKey)"
          :class="{'active': index === actIndex}"
      >
        <div class="item_text" :class="{'active': index === actIndex}">
          {{item[cKey]}}<Icon class="arrow" v-if="item.children" type="chevron-right"></Icon>
        </div>
        <!--下面就不能用show来判断了因为到了和一步递归时就不存再show这个值了-->
        <div class="item_img" v-if="item.imgUrl && index===actIndex">
          <img class="img" :src="item.imgUrl" alt="">
        </div>
        <!--要使用确切的判断变量，否则会出错-->
        <div v-if="index === show" class="children">
          <game-pulldown class="children-item" :proplist="cItem" :keyitem="cKey"></game-pulldown>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'gamePulldown',
  props: {
    proplist: {
      type: Array
    },
    keyitem: String
  },
  data () {
    return {
      locallist: [], // 保存变换的列表
      show: '', // 记录index进行判断
      actIndex: '', // 记录indexi
      cItem: null, // 递归时传入的值
      cKey: 'title' // 默认的键值
    }
  },
  methods: {
    showChildren (flag, index) {
      if (flag) {
        this.cItem = flag // 判断是否有children
        this.show = index // 判断是否显示用的index
        // this.cKey =this.
      }
      this.actIndex = index // 判断是否显示css效果
    },
    hidden () {
      this.show = ''
      this.actIndex = ''
    },
    toShowPage (item, index, cKey) {
      // console.log(item.children)
      let page = 'showGame'
      if (cKey === 'model') {
        item = ''
        index = ''
        page = 'show'
      }
      this.$router.push({name: page, params: { item, index }})
    }
  },
  computed: {
    ...mapState(['gamePullList'])
  },
  mounted () {
    this.locallist = this.proplist ? this.proplist : this.gamePullList
    this.cKey = this.keyitem ? 'model' : 'title'
  }
}
</script>

<style lang="sass" scoped>
  @import "~styles/mixin.scss"
  .common_pull_down
    // border-top: 1px solid #b8b8b8
    z-index: 99
    position: absolute
    background: #282828
    left: -0.1rem
    width: 2.1rem
    top: 0.9rem
    .menu
      .menu_item
        padding-left: 0.2rem
        @include sc(0.14rem, #3d3f3e)
        font-weight: 600
        line-height: 0.45rem
        color: #bdbdbd
        .item_text
          .arrow
            float: right
            margin-top: 0.17rem
            margin-right: 0.1rem
            font-weight: 400
            color: #b2b2b2
        .item_img
          position: absolute
          left: 100%
          top: 0
          padding-left: 0.2rem
          width: 100%
          background: #000
          // height: auto
          .img
            width: 100%
        .children // 递归组件样式
          width: 2rem
          height: 100%
          .children-item
            top: -0.01rem
            left: 100%
            min-height: 2.25rem
            background: #191919
            .menu
              .menu_item
                font-weight: 200
      .active
        background: #000
        color: #fff
</style>
