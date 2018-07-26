<template>
  <div class="common_pull_down">
    <ul class="menu">
      <li class="menu_item" v-for="(item, index) of locallist"
          :key="index"
          @mouseover="showChildren(item.children, index)"
          @mouseleave="hidden"
          :class="{'active': index === actIndex}"
      >
        {{item.item}}<Icon class="arrow" v-if="item.children" type="chevron-right"></Icon>
        <!--要使用确切的判断变量，否则会出错-->
        <div v-if="index === show" class="children">
          <common-pulldown class="children-item" :proplist="cItem"></common-pulldown>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'commonPulldown',
  props: {
    proplist: {
      type: Array
    }
  },
  data () {
    return {
      list: [{
        item: '笔记本',
        children: [{
          item: '暗影骑士（游戏本）',
          children: [{
            item: '蜂鸟swift系列SF 514-5t2'
          }]
        }, {
          item: 'Predator系列（发烧电竞）'
        }, {
          item: '暗影骑士（游戏本）',
          children: [{
            item: '蜂鸟swift系列SF 514-5t2'
          }]
        }, {
          item: '暗影骑士（游戏本）',
          children: [{
            item: '蜂鸟swift系列SF 514-5t2'
          }, {
            item: '蜂鸟swift系列SF 514-5t2'
          }, {
            item: '蜂鸟swift系列SF 514-5t2'
          }, {
            item: '蜂鸟swift系列SF 514-5t2'
          }, {
            item: '蜂鸟swift系列SF 514-5t2'
          }, {
            item: '蜂鸟swift系列SF 514-5t2'
          }, {
            item: '蜂鸟swift系列SF 514-5t2'
          }]
        }, {
          item: '暗影骑士（游戏本）',
          children: [{
            item: '蜂鸟swift系列SF 514-5t2'
          }]
        }, {
          item: '暗影骑士（游戏本）',
          children: [{
            item: '蜂鸟swift系列SF 514-5t2'
          }]
        }]
      }, {
        item: '台式机',
        children: [{
          item: '滚筒袭击',
          children: [{
            item: '手动洗衣机'
          }]
        }]
      }, {
        item: '显示器',
        children: [{
          item: '吹风机'
        }]
      }, {
        item: '投影机',
        children: [{
          item: '家庭影院系列'
        }]
      }],
      locallist: [],
      show: '', // 记录index进行判断
      actIndex: '', // 记录indexi
      cItem: null
    }
  },
  methods: {
    showChildren (flag, index) {
      // console.log(flag)
      if (flag) {
        this.cItem = flag
        this.show = index
      }
      this.actIndex = index
    },
    hidden () {
      this.show = ''
      this.actIndex = ''
    }
  },
  mounted () {
    this.locallist = this.proplist ? this.proplist : this.list
  }
}
</script>

<style lang="sass" scoped>
@import "~styles/mixin.scss"
.common_pull_down
  border-top: 1px solid #b8b8b8
  z-index: 99
  position: absolute
  background: rgba(255,255,255,0.9)
  left: -0.1rem
  width: 2rem
  top: 0.9rem
  .menu
    .menu_item
      line-height: 0.3rem
      @include sc(0.14rem, #3d3f3e)
      font-weight: 600
      line-height: 0.45rem
      padding-left: 0.2rem
      .arrow
        float: right
        margin-top: 0.17rem
        margin-right: 0.1rem
        font-weight: 400
        color: #b2b2b2
      .children // 递归组件样式
        width: 2rem
        height: 100%
        .children-item
          top: -0.01rem
          left: 100%
          min-height: 1.8rem
          .menu
            .menu_item
              font-weight: 200
    .active
      background: #fff
      color: $greenfont
</style>
