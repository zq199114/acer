<template>
  <div class="nav" ref="showBar">
    <Row class="bar bar_xs mw" ref="nav">
      <Col :sm="{span:5}" :md="{span:4}" :lg="{span:3}" class="nav_item xs">翼5 A515-51G</Col>
      <Col :sm="{span:3, offset: 1}" :md="{span:2, offset: 8}" :lg="{span:2, offset: 9}" class="nav_item xs"><a @click="addActive" href="#ms">产品参数</a></Col>
      <Col :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item xs"><a @click="addActive" href="#innovate">产品介绍</a></Col>
      <Col :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item xs"><a @click="addActive" href="#experience">产品细节</a></Col>
      <Col :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item xs"><a @click="addActive" href="/show#performance">产品特点</a></Col>
    </Row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'scrollBar',
  data () {
    return {
      tbEl: '', // 记录顶部dom节点
      service: '' // 存储
    }
  },
  methods: {
    handleiScroll () {
      const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      let nav = this.tbEl
      if (top >= this.mainHh) {
        nav.style.position = 'fixed'
        nav.style.top = 0
        nav.style.left = 0
        nav.style.right = 0
      } else {
        nav.style.position = 'static'
      }
    },
    addActive (e) {
      for (var i = 0; i < this.$refs.nav.$children.length; i++) {
        if (i === 0) continue // 如果是第一个就跳过
        this.$refs.nav.$children[i].$el.lastChild.style.color = '#a7a7a7'
      }
      e.toElement.style.color = '#fff'
    }
  },
  computed: {
    ...mapState(['mainHh', 'screenWw']),
    // 判断宽度改变点击的id
    serviceChange () {
      if (this.screenWw > 768) {
        return 'servicepc'
      } else {
        return 'servicem'
      }
    }
  },
  mounted () {
    this.tbEl = this.$refs.showBar
    document.addEventListener('scroll', this.handleiScroll)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('scroll', this.handleiScroll)
    })
    this.bscroll = new BScroll(this.tbEl, {
      click: true,
      tab: true,
      scrollX: true,
      bounce: false
    })
  }
}
</script>

<style lang="sass" scoped>
  .nav
    z-index: 10
    background: #232323
    height: .64rem
    overflow: auto
    white-space: nowrap
    .bar
      height: 100%
      .nav_item
        a
          display: inline-block
          line-height: .64rem
          color: #a7a7a7
          font-size: .16rem
          &:hover
            color: #FFF!important
        &:first-child
          line-height: .64rem
          color: #fff
          font-size: .28rem
        .active
          color: #fff
  @media only screen and (max-width: 768px)
    .nav
      line-height: .7rem
      height: .7rem
      overflow: hidden
      .bar
        display: none
      .bar_xs
        display: block
        white-space: nowrap
        width: 10.5rem
        padding-left: .35rem
        .xs
          display: inline-block
          margin-right: .15rem
          a
            font-size: .28rem
          &:first-child
            color: #fff
            font-size: .33rem
            margin-right: .3rem
</style>
