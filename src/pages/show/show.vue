<template>
  <div class="show">
    <div class="nav" ref="nav">
      <Row class="bar mw">
        <Col :lg="{span:3}" class="nav_item">Triton 700</Col>
        <Col :lg="{span:3, offset: 3}" class="nav_item">产品参数</Col>
        <Col :lg="{span:3}" class="nav_item">视频介绍</Col>
        <Col :lg="{span:3}" class="nav_item">创新分类</Col>
        <Col :lg="{span:3}" class="nav_item">极致体验</Col>
        <Col :lg="{span:3}" class="nav_item">强大性能</Col>
        <Col :lg="{span:3}" class="nav_item">特色服务</Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show',
  methods: {
    handleiScroll () {
      const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      console.log(top)
    }
  },
  mounted () {
    // console.log(this.$refs)
    // this.$nextTick(this.$refs.nav.addEventListener('scroll', this.handleiScroll))
    this.$refs.nav.addEventListener('scroll', this.handleiScroll)
  }
}
</script>

<style lang="sass" scoped>
.show
  .nav
    background: #232323
    height: .64rem
    line-height: .64rem
    margin-bottom: 5rem
    .bar
      .nav_item
        color: #a7a7a7
        font-size: .16rem
        &:first-child
          color: #fff
          font-size: .28rem
</style>
