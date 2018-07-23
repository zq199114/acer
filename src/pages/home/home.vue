<template>
  <div class="home">
    <top-header></top-header>
    <home-swiper></home-swiper>
    <home-content></home-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
import topHeader from 'components/header/mainHeader'
import homeSwiper from './components/swiper'
import homeContent from './components/content'
import homeFooter from 'components/footer/mainFooter'
export default {
  name: 'home',
  components: {
    topHeader,
    homeSwiper,
    homeContent,
    homeFooter
  }
}
</script>

<style scoped>
</style>
