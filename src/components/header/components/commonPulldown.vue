<template>
  <div class="common_pull_down">
    <ul class="menu">
      <li class="menu_item" v-for="(item, index) of list" :key="index">{{item.item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'commonPulldown',
  data () {
    return {
      list: [{
        item: '电视机',
        children: {
          item: '电冰箱'
        }
      }, {
        item: '洗衣机',
        children: {
          item: '滚筒袭击',
          children: {
            item: '手动洗衣机'
          }
        }
      }]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~styles/mixin.scss"
.common_pull_down
  z-index: 99
  position: absolute
  background: $headerpulldown
  width: 40px
  top: 90px
  .menu
    .menu_item
      line-height: 30px
</style>
