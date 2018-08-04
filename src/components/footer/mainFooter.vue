<template>
  <footer class="footer">
    <Row class="footer-top">
      <Col class="list" :lg="{span: 3, offset: 1}" :mg="{span: 3, offset: 1}" :sm="{span: 3, offset: 1}" :xs="0" v-for="(list, index) of footList" :key="index">
        <ul>
          <li class="item" v-for="(item, key) of list" :key="key">{{item.desc}}</li>
        </ul>
      </Col>
      <Col class="m_list" :lg="0" :mg="0" :sm="0" :xs="24" v-for="(item, key, index) of footList" :key="index">
        <!--slice返回指定区域的数组-->
        <div class="m_list_item" @click="showBottomItem(key)">
          {{item[0].desc}}
          <Icon class="down" type="chevron-down"></Icon>
          <div class="m_list_item_children" v-show="showBotlist === key">
            <div class="m_list_item_children_list" v-for="(ite, key) in item.slice(1)" :key="key">{{ite.desc}}</div>
          </div>
        </div>
      </Col>
      <Col class="subscribe" :lg="{span: 6, offset: 1}" :mg="{span: 6, offset: 1}" :sm="{span: 6, offset: 1}" :xs="{span: 24}">
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
        <Col class="bot-item" :lg="{span: 21, offset: 1}" :md="24" :sm="24" :xs="0">此网页最好使用IE9 浏览器、谷歌浏览器、苹果浏览器和其他新式浏览器进行浏览。</Col>
        <Col class="bot-item" :lg="{span: 6, push: 1}" :md="{span: 8, push: 3}" :sm="{span: 9, push: 1}">沪ICP备09096122号&nbsp;|</Col>
        <Col class="bot-item" :lg="{span: 9, push: 1}" :md="{span: 8, push: 1}" :sm="{span: 9}"><img src="https://www.acer.com.cn/web/images/record.png" alt="">&nbsp;沪公网安备 31011202006996号</Col>
        <Col class="bot-item" :lg="{span: 9, push: 1}" :md="{span: 8, pull: 1}" :sm="{span: 6, pull: 1}" :xs="0">站长统计</Col>
      </Col>
      <Col class="footer-right" :lg="12" :md="24">
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
  components: {
  },
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
      },
      showBotlist: ''
    }
  },
  methods: {
    showBottomItem (flag) {
      if (flag === this.showBotlist) {
        this.showBotlist = ''
        return
      }
      this.showBotlist = flag
    }
  }
}
</script>

<style lang="sass" scoped type="text/sass">
@import '~styles/mixin.scss'
.footer
  // margin-top: 100%
  background: #272727
  .footer-top
    padding-bottom: 0.2rem
    border-bottom: 0.01rem solid #3e3e3e
    .list, .subscribe
      .item
        margin-left: 0.1rem
        color: #b2b2b2
        font-size: 0.15rem
        line-height: 0.30rem
        &:first-child
          font-size: 0.17rem
          color: #fff
          font-weight: 700
          line-height: 0.5rem
      .title
        font-size: 0.17rem
        font-weight: 200
        color: #fff
        line-height: 0.5rem
      .login
        font-size: .15rem
        white-space: nowrap
        width: 100%
        box-sizing: content-box
        input
          width: 60%
          line-height: 0.4rem
          border: 0.01rem solid #666
          background: #272727
          height: 0.4rem // 要给定高度否者，box-sizing不生效
          display: inline-block
          color: #999
          padding-left: 0.1rem
          font-size: 0.15rem
          &::placeholder
            font-family: $font-fm
        button
          display: inline-block
          line-height: 0.4rem
          width: 0.6rem
          background: $greenfont
          color: #fff
          font-family: $font-fm
          border-radius: 0 0.05rem 0.05rem 0
          font-size: .15rem
      .tips
        color: #999
        line-height: 0.4rem
        font-size: .15rem
      .qr-code
        height: auto
        width: 30%
        .qr-img
          border: 0.03rem solid #fff
          width: 100%
        i
          white-space: nowrap
          color: #b2b2b2
          line-height: 0.15rem
          font-size: .15rem
  .m_list
    line-height: 0.58rem
    // height: 58px
    padding: 0 5%
    border-bottom: 0.01rem solid #3b393a
    color: #fff
    .m_list_item
      color: #acacac
      font-size: .3rem
      line-height: 1rem
      .down
        float: right
        margin-top: 0.35rem
        color: #474747
      .m_list_item_children
        border-top: 0.01rem solid #3b393a
        .m_list_item_children_list
          line-height: 1rem
          font-size: .29rem
          font-weight: 200
  .footer-bottom
    // overflow: hidden
    .footer-left
      font-size: .14rem
      .bot-item
        text-align: left
        color: #b2b2b2
        line-height: 0.3rem
        white-space: nowrap
    .footer-right
      text-align: center
      // height: .88rem
      line-height: 0.888rem
      color: #b2b2b2
      .share
        font-size: .14rem
        margin: 0 auto
        .sh-img
          margin-right: 0.2rem
@media only screen and (max-width: 768px)
  .footer
    .footer-top
      .subscribe
        .item, .title, .login, .tips
          width: 100%
          padding-left: 5%
        .title
          color: #acacac
          font-size: .3rem
          line-height: 1rem
          font-weight: 500
        .login
          input
            width: 75%
            height: .8rem
            &::placeholder
              font-size: .28rem
          button
            height: .8rem
            width: 1rem
            font-size: .28rem
        .tips
          font-size: .28rem
          line-height: .8rem
        .qr-code
          margin: 0 auto
          i
            display: block
            width: 100%
            font-size: .28rem
            line-height: .4rem
            text-align: center
@media only screen and (max-width: 1200px)
  .footer
    .footer-bottom
      .footer-left
        font-size: .2rem
        .bot-item
          text-align: center
      .footer-right
        .share
          font-size: .2rem
</style>
