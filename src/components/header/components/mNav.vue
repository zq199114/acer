<template>
  <div class="m_nav">
    <Row class="m_nav_logo">
      <Col class="m_nav_bar" :lg="0" :md="0" :xs="{span: 1, offset: 1}" :sm="{span: 1, offset: 1}">
        <div class="logo">
          <img src="https://gwimages.acer.com.cn/uploads/whole/13e8d541d74ed1b43876c3da0b44c3b9.png" alt="">
        </div>
      </Col>
      <Col class="m_nav_bar" :lg="0" :md="0" :xs="{span: 6, offset: 15}" :sm="{span: 3, offset: 18}">
        <Icon type="android-person" class="ico"></Icon>
        <Icon type="drag" class="ico" @click="showMenu"></Icon>
      </Col>
    </Row>
    <Row class="m_nav_menu" v-show="show">
      <Col :lg="0" :md="0" :xs="{span: 24}" :sm="{span: 24}"
           v-for="(item, index) in navList" :key="index" class="m_nav_list"
      >
        <div class="m_nav_item" >{{item}}</div>
      </Col>
      <Col :lg="0" :md="0" :xs="{span: 24}" :sm="{span: 24}" class="search">
        <div class="search_on">
          <input class="" type="text" placeholder="acer 4750G"><Icon class="search_ico" type="ios-search-strong"></Icon>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'mNav',
  data () {
    return {
      navList: ['全部产品', '宏碁商城', '家用', '高端电竞', '商用', '解决方案', '服务支持'],
      show: false
    }
  },
  methods: {
    showMenu () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="sass" scoped>
.m_nav
  position: relative
  .m_nav_logo
    .m_nav_bar
      height: 60px
      line-height: 60px
      text-align: right
      .ico
        font-size: 25px
        font-weight: 700
        color: #666666
        margin-right: 10px
      .logo
        width: 98px
        img
          width: 100%
  .m_nav_menu
    z-index: 99
    background: #fff
    position: absolute
    top: 60px
    left: 0
    right: 0
    .m_nav_list, .search
      border-top: 1px solid #b8b8b8
      padding: 0 4%
      .m_nav_item, .search_on
        height: 58px
        line-height: 58px
      input
        padding-left: 10px
        height: 50%
        width: 92%
        background: #eaeaea
      .search_ico
        text-align: center
        font-size: 27px
        height: 50%
        width: 8%
        background: #eaeaea
        vertical-align: middle
        color: #666666
</style>
