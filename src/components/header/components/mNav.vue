<template>
  <div class="m_nav">
    <div class="m_nav_w" v-if="white">
      <Row class="m_nav_logo">
      <Col class="m_nav_bar" :lg="0" :md="0" :xs="{span: 1, offset: 1}" :sm="{span: 1, offset: 1}">
        <router-link tag="div" to="/index" class="logo">
          <img src="https://gwimages.acer.com.cn/uploads/whole/13e8d541d74ed1b43876c3da0b44c3b9.png" alt="">
        </router-link>
      </Col>
      <Col class="m_nav_bar" :lg="0" :md="0" :xs="{span: 6, offset: 15}" :sm="{span: 3, offset: 18}">
        <Icon type="android-person" class="ico"></Icon>
        <Icon type="drag" class="ico" @click="showMenu"></Icon>
      </Col>
      </Row>
      <up-down>
      <Row class="m_nav_menu" v-show="show">
      <Col :lg="0" :md="0" :xs="{span: 24}" :sm="{span: 24}"
           v-for="(item, index) in wnavList" :key="index" class="m_nav_list"
      >
        <router-link tag="div" :to="item.url" class="m_nav_item" @click.native="showPull(index)">
          {{item.title}}<Icon v-if="item.children" type="chevron-down" class="ico_down"></Icon>
          <up-down>
          <div class="list" v-if="index===cindex">
            <div @click.stop="toPage(it.url)" v-if="item.children" class="list_item" v-for="(it, index) of item.children" :key="index">
              {{it.title}}
            </div>
          </div>
          </up-down>
        </router-link>
      </Col>
      <Col :lg="0" :md="0" :xs="{span: 24}" :sm="{span: 24}" class="search">
        <div class="search_on">
          <input class="" type="text" placeholder="acer 4750G"><Icon class="search_ico" type="ios-search-strong"></Icon>
        </div>
      </Col>
    </Row>
      </up-down>
    </div>
    <div class="m_nav_b" v-if="black">
      <Row class="m_nav_logo">
        <Col class="m_nav_bar" :lg="0" :md="0" :xs="{span: 1, offset: 1}" :sm="{span: 1, offset: 1}">
          <div class="logo">
            <img src="https://www.acer.com.cn/web/images/gam-logo.png" alt="">
          </div>
        </Col>
        <Col class="m_nav_bar" :lg="0" :md="0" :xs="{span: 6, offset: 15}" :sm="{span: 3, offset: 18}">
          <Icon type="android-person" class="ico"></Icon>
          <Icon type="drag" class="ico" @click="showMenu"></Icon>
        </Col>
      </Row>
      <Row class="m_nav_menu_b" v-show="show">
        <Col :lg="0" :md="0" :xs="{span: 24}" :sm="{span: 24}"
             v-for="(item, index) in bnavList" :key="index" class="m_nav_list"
        >
          <router-link tag="div" :to="item.url" class="m_nav_item"  @click.native="showPull(index)">
            {{item.title}}<Icon v-if="item.children" type="chevron-down" class="ico_down"></Icon>
            <div class="list" v-if="index===cindex">
              <div @click.stop="toPage(it.url, index)" v-if="item.children" class="list_item" v-for="(it, index) of item.children" :key="index">
                {{it.title}}
              </div>
            </div>
          </router-link>
        </Col>
        <Col :lg="0" :md="0" :xs="{span: 24}" :sm="{span: 24}" class="search">
          <div class="search_on">
            <input class="" type="text" placeholder="acer 4750G"><Icon class="search_ico" type="ios-search-strong"></Icon>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import upDown from 'components/transition/upDown'
export default {
  name: 'mNav',
  components: {
    upDown
  },
  props: {
    black: Boolean,
    white: Boolean
  },
  data () {
    return {
      wnavList: [{
        title: '全部产品',
        url: '/'
      }, {
        title: '宏碁商城',
        url: '/shop'
      }, {
        title: '家用',
        url: '/',
        children: [{
          title: '笔记本',
          url: '/showGame'
        }, {
          title: '台式机',
          url: ''
        }, {
          title: '显示器',
          url: ''
        }, {
          title: '投影仪',
          url: ''
        }]
      }, {
        title: '高端电竞',
        url: '/showGame'
      }, {
        title: '商用',
        url: '/'
      }, {
        title: '解决方案',
        url: '/'
      }, {
        title: '服务支持',
        url: '/'
      }],
      bnavList: [{
        title: '产品',
        url: '',
        children: [{
          title: '笔记本',
          url: '/showGame'
        }, {
          title: '台式机',
          url: '/showGame'
        }, {
          title: '显示器',
          url: '/showGame'
        }, {
          title: '投影机',
          url: '/showGame'
        }, {
          title: '外设',
          url: '/showGame'
        }]
      }, {title: '服务支持', url: ''}, {title: '返回首页', url: '/index'}],
      show: false,
      cindex: ''
    }
  },
  methods: {
    showMenu () {
      this.show = !this.show
      if (!this.show) {
        this.cindex = ''
      }
    },
    showPull (index) {
      if (index === this.cindex) {
        this.cindex = ''
        return
      }
      this.cindex = index
    },
    toPage (url, title) {
      if (typeof title === 'number') {
        console.log(title)
        this.$router.push({path: url,
          query: {title: title}
        })
        return
      }
      this.$router.push(url)
    }
  },
  watch: {
    $route () {
      // 如果路由改变就隐藏下拉菜单
      this.show = false
    }
  }
}
</script>

<style lang="sass" scoped type="text/sass">
.m_nav
  .m_nav_w, .m_nav_b
    border-bottom: .01rem solid #b8b8b8
    position: relative
    .m_nav_logo
      background: #fff
      z-index: 100
      .m_nav_bar
        height: 0.6rem
        line-height: 0.6rem
        text-align: right
        .ico
          font-size: 0.25rem
          font-weight: 700
          color: #666666
          margin-right: 0.1rem
        .logo
          width: 0.98rem
          img
            width: 100%
    .m_nav_menu, .m_nav_menu_b
      z-index: 99
      background: #fff
      position: absolute
      top: 0.6rem
      left: 0
      right: 0
      .m_nav_list, .search
        border-top: 0.01rem solid #b8b8b8
        padding: 0 4%
        font-size: .2rem
        .m_nav_item, .search_on
          // height: 0.58rem
          z-index: 100
          line-height: 0.58rem
          .ico_down
            color: rgb(197, 197, 197)
            margin-left: .1rem
          .list
            .list_item
              border-top: 0.01rem solid #b8b8b8
              line-height: .55rem
              font-size: .18rem
        input
          padding-left: 0.1rem
          height: .3rem
          width: 92%
          background: #eaeaea
          vertical-align: middle
          box-sizing: border-box
        .search_ico
          box-sizing: border-box
          text-align: center
          font-size: 0.27rem
          height: .3rem
          width: 8%
          background: #eaeaea
          vertical-align: middle
          color: #666666
  .m_nav_b
    background-color: #000101
    border-bottom: .01rem solid #232323
    .m_nav_menu_b
      background: #191919
      color: #fff
@media only screen and (max-width: 768px)
  .m_nav
    position: relative
    .m_nav_w, .m_nav_b
      .m_nav_logo
        .m_nav_bar
          height: 1rem
          line-height: 1rem
          text-align: right
          .ico
            font-size: .45rem
            font-weight: 700
            color: #666666
            &:first-child
              margin-right: .45rem
          .logo
            width: 1.8rem
            img
              width: 100%
      .m_nav_menu, .m_nav_menu_b
        transition: all .3s
        z-index: 99
        background: #fff
        position: absolute
        top: 1rem
        left: 0
        right: 0
        .m_nav_list, .search
          border-top: 0.01rem solid #b8b8b8
          padding: 0 4%
          font-size: .3rem
          .m_nav_item, .search_on
            // height: 1.1rem
            line-height: 1.1rem
            .list
              .list_item
                line-height: .9rem
                font-size: .25rem
          input
            padding-left: 0.1rem
            height: .6rem
            width: 92%
            background: #eaeaea
          .search_ico
            text-align: center
            font-size: 0.6rem
            height: .6rem
            width: 8%
            background: #eaeaea
            vertical-align: middle
            color: #666666
      .m_nav_menu_b
        background: #191919
@media only screen and (min-width: 992px)
  .m_nav
    .m_nav_w, .m_nav_b
      border-bottom: none
</style>
