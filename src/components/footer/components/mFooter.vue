<template>
  <div class="m_footer">
    <Row class="row_list">
      <Col class="row_list_items" :lg="0" :mg="0" :sm="0" :xs="24" v-for="(item, index) in footerlist" :key="index">
        <div class="row_list_item">{{item}}</div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'mFooter',
  data () {
    return {
      footerlist: ['关于宏碁', '服务支持', '资源', '法律声明', '订阅电子就安保']
    }
  }
}
</script>

<style lang="sass" scoped>
.m-footer
  .row_list
    .row_list_items
      .row_list_item
        color: #fff
</style>
