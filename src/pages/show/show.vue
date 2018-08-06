<template>
  <div class="show">
    <div class="nav" ref="showBar">
      <Row class="bar bar_xs mw">
        <Col :sm="{span:5}" :md="{span:4}" :lg="{span:3}" class="nav_item xs">Triton 700</Col>
        <Col :sm="{span:3, offset: 1}" :md="{span:2, offset: 8}" :lg="{span:2, offset: 9}" class="nav_item xs"><a href="#ms">产品参数</a></Col>
        <Col :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item xs"><a href="#video">视频介绍</a></Col>
        <Col :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item xs"><a href="#innovate">创新分类</a></Col>
        <Col :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item xs"><a href="#experience">极致体验</a></Col>
        <Col :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item xs"><a href="#performance">强大性能</a></Col>
        <Col :sm="{span:3}" :md="{span:2}" :lg="{span:2}" class="nav_item xs"><a :href="'#' + serviceChange">特色服务</a></Col>
      </Row>
    </div>
    <show-content :listImg="listImg"></show-content>
    <parameter id="ms" :para="para"></parameter>
  </div>
</template>

<script>
import showContent from './components/content'
import parameter from './components/parameter'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'show',
  components: {
    showContent,
    parameter
  },
  data () {
    return {
      tbEl: '', // 记录顶部dom节点
      listImg: [], // 描述图片
      para: [], // 参数存储
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
    getContent (res) {
      if (res.status === 200) {
        let data = res.data
        this.listImg = data.imgList
        this.para = data.para
      } else {
        console.log('失败了')
      }
    }
  },
  computed: {
    ...mapState(['mainHh', 'screenWw']),
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
    this.$axios.get('/showcontent').then(res => this.getContent(res))
  }
}
</script>

<style lang="sass" scoped>
.show
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
          line-height: .64rem
          color: #a7a7a7
          font-size: .16rem
        &:first-child
          line-height: .64rem
          color: #fff
          font-size: .28rem
    .bar_xs
      // display: none
@media only screen and (max-width: 768px)
  .show
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
