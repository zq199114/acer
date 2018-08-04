<template>
  <div class="parameter">
    <article class="title">产品参数</article>
    <section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'parameter',
  props: {
    para: Array
  }
}
</script>

<style lang="sass" scoped>
.parameter
  background: #000
  .title
    border-bottom: .01rem solid #fff
    line-height: 2rem
    text-align: center
    font-weight: 700
    font-size: .2rem
    height: 2rem
    color: #fff
</style>
