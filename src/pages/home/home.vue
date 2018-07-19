<template>
  <div class="home">
    <top-header></top-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import topHeader from 'components/header/mainHeader'
import homeSwiper from './components/swiper'
export default {
  name: 'home',
  components: {
    topHeader,
    homeSwiper
  }
}
</script>

<style scoped>
</style>
