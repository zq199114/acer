<template>
  <div class="parameter" id="ms">
    <article class="title">产品参数</article>
    <section class="content">
      <Row class="para_list" v-for="(item,index) of para" :key="index">
        <Col class="para_title" :lg="{span:2, offset:4}" :md="{span:3, offset:4}" :sm="{span:3, offset:4}" :xs="{span:4, offset:1}">{{item.title}}</Col>
        <Col class="para_item"
             :lg="{span:18}"
             :md="{span:17}"
             :sm="{span:17}"
             :xs="{span:19}">
          <Row class="para_content" v-for="(it,key) in item.desc" :key="key">
            <Col :lg="4"
                 :md="4"
                 :sm="5"
                 :xs="7">{{key}}</Col>
            <Col :lg="16"
                 :md="16"
                 :sm="15"
                 :xs="16">{{it}}</Col>
          </Row>
        </Col>
      </Row>
    </section>
  </div>
</template>

<script>
export default {
  name: 'parameter',
  data () {
    return {
      para: [{
        title: '主体',
        desc: {
          '系列': '翼5系列',
          '型号': 'A515-51G-56E9（NX.GP5CN.002）',
          '颜色': '黑色',
          '平台': 'Intel'
        }
      }, {
        title: '操作系统',
        desc: {
          '操作系统': 'Windows 10家庭版',
          '操作系统版本': '正版 Microsoft Windows 10 家庭版'
        }
      }]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~styles/mixin.scss"
.parameter
  background: #fff
  .title
    border-bottom: .01rem solid #ccc
    line-height: 2rem
    text-align: center
    font-weight: 700
    font-size: .2rem
    height: 2rem
    color: #000
  .content
    margin-top: .5rem
    .para_list
      padding-bottom: .3rem
      line-height: .4rem
      .para_title
        @include sc(.17rem, #808080)
      .para_item
        @include sc(.17rem, #000)
        .para_content
@media only screen and (max-width: 768px)
  .parameter
    .title
      font-size: .35rem
    .content
      .para_list
        .para_title
          font-size: .25rem
        .para_item
          font-size: .25rem
          .para_content
</style>
