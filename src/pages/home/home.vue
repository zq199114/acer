<template>
  <div class="home">
    <top-header></top-header>
    <router-view></router-view>
    <home-footer></home-footer>
    <fixed-side></fixed-side>
  </div>
</template>

<script>
import topHeader from 'components/header/mainHeader'
import homeFooter from 'components/footer/mainFooter'
import FixedSide from '../../components/fixedSide/fixedSide'
export default {
  name: 'home',
  components: {
    FixedSide,
    topHeader,
    homeFooter
  }
}
</script>

<style scoped>
</style>
