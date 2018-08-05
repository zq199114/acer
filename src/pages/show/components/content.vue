<template>
<div class="content">
  <Row class="c_row">
    <Col class="c_col" v-for="(item, index) of listImg" :key="index">
      <Col class="c_video" v-if="item.video" :lg="{span: 12}" :md="12" :sm="12" :xs="24">
        <div class="c_video_cont">
          <video class="c_video_s" :src="item.video" controls poster="https://gwimages.acer.com.cn/uploads/pdetail/84a2801e6a8fa8f50111bf6c564db064.jpg">
            抱歉，您的浏览器不支持内嵌视频，不过不用担心，你可以 <a href="videofile.ogg">下载</a>
            并用你喜欢的播放器观看!
          </video>
        </div>
      </Col>
      <!--下面的class判断是否隐藏pc或移动端的描述图片-->
      <Col class="c_img" :id="item.title"
           :class="{'p_none': item.title === 'servicepc', 'm_none': item.title === 'servicem'}"
           :lg="{span:item.video?12:24}" :md="item.video?12:24" :sm="item.video?12:24" :xs="24">
        <div class="c_img_cont">
          <img class="c_img_item" :src="item.imgUrl" alt="">
        </div>
      </Col>
    </Col>
  </Row>
</div>
</template>

<script>
export default {
  name: 'showContent',
  props: {
    listImg: Array
  },
  data () {
    return {
      screenWidth: 0 // 屏幕宽度
    }
  },
  mounted () {
    this.screenWidth = this.screenWw
  }
}
</script>

<style lang="sass" scoped>
.content
  .c_row
    .c_col
      height: auto
      .c_video
        .c_video_cont
          width: 100%
          height: 0
          padding-bottom: 84.35%
          background: #000
          .c_video_s
            margin-top: 14%
            background: #000
            width: 100%
      .c_img
        .c_img_cont
          width: 100%
          .c_img_item
            width: 100%
      .m_none
        display: none
@media only screen and (max-width: 768px)
  .content
    .c_row
      .c_col
        .c_video
          .c_video_cont
            padding: 0
            height: auto
            .c_video_s
              margin: 0
        .c_img
          .c_img_cont
            width: 100%
            .c_img_item
              width: 100%
        .p_none
          display: none
          visibility: hidden
        .m_none
          display: block
</style>
