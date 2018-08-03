<template>
  <div class="show">
    <div class="nav" ref="showBar">
      <div class="bar bar_xs">
        <Col class="nav_item xs">Triton 700</Col>
        <Col class="nav_item xs">产品参数</Col>
        <Col class="nav_item xs">视频介绍</Col>
        <Col class="nav_item xs">创新分类</Col>
        <Col class="nav_item xs">极致体验</Col>
        <Col class="nav_item xs">强大性能</Col>
        <Col class="nav_item xs">特色服务</Col>
      </div>
      <Row class="bar mw">
        <Col :xs="{span:0}" :sm="{span:5}" :md="{span:4}" :lg="{span:3}" class="nav_item">Triton 700</Col>
        <Col :xs="{span:0}" :sm="{span:3, offset: 1}" :md="{span:2, offset: 8}" :lg="{span:2, offset: 9}" class="nav_item">产品参数</Col>
        <Col :xs="{span:0}" :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item">视频介绍</Col>
        <Col :xs="{span:0}" :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item">创新分类</Col>
        <Col :xs="{span:0}" :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item">极致体验</Col>
        <Col :xs="{span:0}" :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item">强大性能</Col>
        <Col :xs="{span:0}" :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item">特色服务</Col>
      </Row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'show',
  data () {
    return {
      tbEl: ''
    }
  },
  methods: {
    handleiScroll () {
      const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      console.log(this.mainHh)
      let nav = this.tbEl
      // console.log(1)
      if (top >= this.mainHh) {
        nav.style.position = 'fixed'
        nav.style.top = 0
        nav.style.left = 0
        nav.style.right = 0
      } else {
        nav.style.position = 'static'
      }
    }
  },
  computed: {
    ...mapState(['mainHh'])
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
.show
  .nav
    background: #232323
    height: .64rem
    line-height: .64rem
    .bar
      .nav_item
        color: #a7a7a7
        font-size: .16rem
        &:first-child
          color: #fff
          font-size: .28rem
    .bar_xs
      display: none
@media only screen and (max-width: 768px)
  .show
    .nav
      line-height: .65rem
      height: .65rem
      overflow: hidden
      .bar
        display: none
      .bar_xs
        display: block
        white-space: nowrap
        width: 9.4rem
        padding-left: .35rem
        .xs
          font-size: .25rem
          display: inline-block
          margin-right: .15rem
          &:first-child
            color: #fff
            font-size: .3rem
            margin-right: .3rem
</style>
