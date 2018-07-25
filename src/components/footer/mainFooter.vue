<template>
  <footer class="footer">
    <Row class="footer-top">
      <Col class="list" :lg="{span: 3, offset: 1}" :mg="{span: 3, offset: 1}" :sm="{span: 3, offset: 1}" :xs="0" v-for="(list, index) in footList" :key="index">
        <ul>
          <li class="item" v-for="(item, key) of list" :key="key">{{item.desc}}</li>
        </ul>
      </Col>
      <Col class="subscribe" :lg="{span: 6, offset: 1}" :mg="{span: 6, offset: 1}" :sm="{span: 6, offset: 1}" :xs="{span: 22, offset:2}">
        <div class="title">订阅电子简报</div>
        <div class="login">
          <input type="text" placeholder="用电子邮件登陆···"><button>注册</button>
        </div>
        <p class="tips">注册即表明我接受 Acer 宏碁隐私政策的条款</p>
        <div class="qr-code">
          <img class="qr-img" src="https://gwimages.acer.com.cn/uploads/whole/4cf0b869a39551c5cdb5b821b18f1b18.png" alt="">
          <i>Acer宏碁官方</i>
        </div>
      </Col>
    </Row>
    <Row class="footer-bottom">
      <Col class="footer-left" :lg="12">
        <Col class="bot-item" :lg="{span: 5, offset: 1}">© 2017 Acer Inc.</Col>
        <Col class="bot-item" :lg="{span: 21, pull: 1, offset: 1}" :md="24" :sm="24" :xs="0">此网页最好使用IE9 浏览器、谷歌浏览器、苹果浏览器和其他新式浏览器进行浏览。</Col>
        <Col class="bot-item" :lg="{span: 6, push: 1}" :md="{span: 8, push: 3}" :sm="{span: 9, push: 3}">沪ICP备09096122号&nbsp;|</Col>
        <Col class="bot-item" :lg="{span: 9, push: 1}" :md="{span: 8}" :sm="{span: 9}"><img src="https://www.acer.com.cn/web/images/record.png" alt="">&nbsp;沪公网安备 31011202006996号</Col>
        <Col class="bot-item" :lg="{span: 9, pull: 2}" :md="{span: 8, pull: 4}" :sm="{span: 6, pull: 3}" :xs="0">站长统计</Col>
      </Col>
      <Col class="footer-right" :lg="12">
        <Col class="share">
          分享到：<img class="sh-img" src="https://gwcss.acer.com.cn/images/sh-wechat.png" alt="微信">
          <img class="sh-img" src="https://gwcss.acer.com.cn/images/sh-sina.png" alt="微博">
          <img class="sh-img" src="https://gwcss.acer.com.cn/images/sh-qq.png" alt="QQ">
        </Col>
      </Col>
    </Row>
  </footer>
</template>

<script>
export default {
  name: 'mainFooter',
  data () {
    return {
      footList: {
        about: [{
          id: '1',
          desc: '关于宏碁'
        }, {
          id: '2',
          desc: '联系我们'
        }, {
          id: '3',
          desc: '新闻'
        }, {
          id: '4',
          desc: '招兵买马'
        }, {
          id: '5',
          desc: '社会责任'
        }],
        service: [{
          id: '1',
          desc: '服务支持'
        }, {
          id: '2',
          desc: '重要信息公告'
        }, {
          id: '3',
          desc: '驱动程序和使用手册'
        }, {
          id: '4',
          desc: 'Acer Care Center'
        }],
        resource: [{
          id: '1',
          desc: '资源'
        }, {
          id: '2',
          desc: '40TH ANNIVERSARY'
        }, {
          id: '3',
          desc: 'Next@Ace'
        }, {
          id: '4',
          desc: '如何购买'
        }],
        declaration: [{
          id: '1',
          desc: '法律声明'
        }, {
          id: '2',
          desc: '隐私权规范'
        }, {
          id: '3',
          desc: '法律声明'
        }]
      }
    }
  }
}
</script>

<style lang="sass" scoped type="text/sass">
@import '~styles/mixin.scss'
.footer
  background: #272727
  .footer-top
    padding-bottom: 20px
    border-bottom: 1px solid #3e3e3e
    .list, .subscribe
      .item
        margin-left: 10px
        color: #b2b2b2
        font-size: 15px
        line-height: 30px
        &:first-child
          font-size: 17px
          color: #fff
          font-weight: 700
          line-height: 50px
      .title
        font-size: 17px
        font-weight: 200
        color: #fff
        line-height: 50px
      .login
        white-space: nowrap
        width: 100%
        box-sizing: content-box
        input
          width: 60%
          line-height: 40px
          border: 1px solid #666
          background: #272727
          height: 40px // 要给定高度否者，box-sizing不生效
          display: inline-block
          color: #999
          padding-left: 10px
          font-size: 15px
          &::placeholder
            font-family: $font-fm
        button
          display: inline-block
          line-height: 40px
          width: 60px
          background: $greenfont
          color: #fff
          font-family: $font-fm
          border-radius: 0 5px 5px 0
      .tips
        color: #999
        line-height: 40px
      .qr-code
        height: auto
        margin: 0 auto
        // width: 87px
        width: 35%
        .qr-img
          border: 3px solid #fff
          width: 100%
        i
          white-space: nowrap
          color: #b2b2b2
          line-height: 25px
  .footer-bottom
    .footer-left
      .bot-item
        text-align: center
        color: #b2b2b2
        line-height: 30px
    .footer-right
      text-align: center
      line-height: 88.8px
      color: #b2b2b2
      .sh-img
        margin-right: 20px
</style>
