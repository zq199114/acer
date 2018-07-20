<template>
  <div class="home">
    <top-header></top-header>
    <home-swiper></home-swiper>
    <home-content></home-content>
  </div>
</template>

<script>
import topHeader from 'components/header/mainHeader'
import homeSwiper from './components/swiper'
import homeContent from './components/content'
export default {
  name: 'home',
  components: {
    topHeader,
    homeSwiper,
    homeContent
  }
}
</script>

<style scoped>
</style>
