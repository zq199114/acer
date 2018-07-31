<template>
<div class="news">
  <Row class="news_list">
    <Col class="news_breadcrumb" :lg="{span: 21, offset: 1}" :md="{span: 9, offset: 1}" :sm="{span: 9, offset: 1}" :xs="{span: 9, offset: 1}">
      <div class="news_breadcrumb_box">
        <span class="bread">首页</span><span class="bread">></span><span class="bread">新闻列表</span>
      </div>
    </Col>
  </Row>
  <Col>
    <Row class="new_news" v-for="(item, index) in newsList" :key="index">
      <Col class="news_area" :lg="{span: 22, offset: 1}" :md="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}" :xs="{span: 22, offset: 1}">
        <Col class="news_img" :lg="{span: index>0 ? 5:9}" :md="{span: index>0 ? 5:9}" :sm="{span: index>0 ? 7:9}" :xs="{span: index>0 ? 9:24}">
          <img :src="item.newsImg" alt="">
        </Col>
        <Col class="news_content" :lg="{span: index>0 ? 18:14, offset: 1}" :md="{span: index>0 ? 18:14, offset: 1}" :sm="{span: index>0 ? 16:14, offset: 1}" :xs="{span: index>0 ? 14:24, offset: index>0 ? 1:0}">
          <div class="content">
            <div class="date">{{item.newsDate}}</div>
            <div class="title">{{item.newsTitle}}</div>
            <p class="desc">{{item.newsDesc}}</p>
            <div class="more" v-if="index === 0">查看详情</div>
          </div>
        </Col>
      </Col>
    </Row>
  </Col>
</div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      newsList: [],
      larg: 0
    }
  },
  computed: {
    col (index) {
      let larg = index > 0 ? 4 : 9
      return larg
    }
  },
  methods: {
    getNews (res) {
      if (res.status === 200) {
        let data = res.data
        this.newsList = data
        console.log(this.newsList)
      }
    }
  },
  mounted () {
    this.$axios.get('/news').then(res => this.getNews(res))
  }
}
</script>

<style lang="sass" scoped type="text/sass">
@import "~styles/mixin"
.news
  .news_list
    margin-bottom: .5rem
    .news_breadcrumb
      width: 90%
      font-size: .16rem
      color: #969696
      border-bottom: .01rem solid #d2d2d2
      padding-bottom: .1rem
      // height: 1rem
      .news_breadcrumb_box
        margin-top: .73rem
        .bread
          margin-right: .05rem
  .new_news
    .news_area
      padding: .2rem 0
      border-bottom: .01rem dashed #d2d2d2
      width: 90%
      .news_img
        img
          width: 100%
      .news_content
        .content
          .date
            border-left: .04rem solid $greenlogo
            padding-left: .08rem
            font-size: .25rem
            color: #000
          .title
            font-size: .19rem
            color: #000
            margin-top: 3%
            // white-space: nowrap
          .desc
            @include Rellipsis
            font-size: .17rem
            color: #969696
            margin-top: 3%
            // height: .4rem
            line-height: .2rem
    &:first-child
      .news_area
        .news_content
          .content
            .date
              color: $greenfont
            .title
              margin-top: 4%
              color: $greenlogo
            .desc
              margin-top: 4%
              color: $greenfont
            .more
              font-size: .19rem
              line-height: .35rem
              color: $greenfont
              padding-right: .3rem
              display: inline-block
              background: url("https://gwcss.acer.com.cn/images/con-more2.png") no-repeat center right
              background-size: .15rem auto
              margin-top: 20%
          @media only screen and (max-width: 768px)
            .content
              padding-bottom: 0
              .more
                margin-top: .1rem
                font-size: .3rem
                background-size: .26rem auto
    &:last-child
      margin-bottom: .4rem
@media only screen and (max-width: 768px)
  .news
    .news_list
      .news_breadcrumb
        .news_breadcrumb_box
          margin-top: .5rem
          .bread
            font-size: .3rem
            margin-right: .15rem
    .new_news
      .news_area
        .news_content
          .content
            padding: .3rem 0
            .date
              font-size: .3rem
            .title
              font-size: .3rem
              line-height: .4rem
            .desc
              display: none
</style>
