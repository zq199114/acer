<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'transitionUpdown'
}
</script>

<style lang="sass" scoped type="text/sass">
  .v-enter, .v-leave-to
    /*opacity: 0*/
    transform: translateY(-100%)
  .v-enter-active, .v-leave-active
    transition: transform .3s
</style>
