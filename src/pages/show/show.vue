<template>
  <div class="show">
    <scroll-bar></scroll-bar>
    <show-content :listImg="listImg"></show-content>
    <parameter id="ms" :para="para"></parameter>
  </div>
</template>

<script>
import scrollBar from './components/scrollBar'
import showContent from './components/content'
import parameter from './components/parameter'
export default {
  name: 'show',
  components: {
    showContent,
    parameter,
    scrollBar
  },
  data () {
    return {
      listImg: [], // 描述图片
      para: [] // 参数存储
    }
  },
  methods: {
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
  mounted () {
    this.$axios.get('/showcontent').then(res => this.getContent(res))
  }
}
</script>

<style lang="sass" scoped>
</style>
