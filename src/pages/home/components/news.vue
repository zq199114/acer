<template>
<div class="news">
  <Row class="news_list">
    <Col class="news_breadcrumb" :lg="{span: 21, offset: 1}">
      <div class="news_breadcrumb_box">
        <span class="bread">首页</span><span class="bread">></span><span class="bread">新闻列表</span>
      </div>
    </Col>
  </Row>
</div>
</template>

<script>
export default {
  name: 'news'
}
</script>

<style lang="sass" scoped type="text/sass">
.news
  .news_list
    .news_breadcrumb
      font-size: .16rem
      color: #969696
      border-bottom: .01rem solid #d2d2d2
      margin-bottom:  .2rem
      height: 1rem
      .news_breadcrumb_box
        margin-top: .73rem
        .bread
          margin-right: .05rem
</style>
