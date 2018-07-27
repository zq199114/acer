<template>
  <div class="fixed_side">
    <ul class="fixed_side_list">
      <li class="fixed_side_item" @click="handleShowPlace" @mouseover="handleShowPlace" @mouseout="handleShowPlace">
        <Icon class="icon" type="android-cart"></Icon>
        <i>购买</i>
        <ul class="place_list" v-show="showplace">
          <li class="place_item" v-for="(item, index) in hoverItem.hoverImg" :key="index">
            <img :src="item.img" alt="">
          </li>
        </ul>
      </li>
      <li class="fixed_side_item" @click="handleShowContact" @mouseover="handleShowContact" @mouseout="handleShowContact">
        <Icon class="icon" type="android-call"></Icon>
        <i>电话</i>
        <ul class="contact_list" v-show="showContact">
          <li class="contact_item" v-for="(item, index) in hoverItem.contact" :key="index">
            <h5 class="title">{{item.title}}:</h5>
            <h4 class="phone">{{item.phone}}</h4>
            <p class="time">{{item.time}}</p>
          </li>
        </ul>
      </li>
      <li class="fixed_side_item">
        <Icon class="icon" type="compose"></Icon>
        <i>留言</i>
      </li>
      <li class="fixed_backtop">
        <BackTop :bottom="-55" :right="0">
           <div class="top"><Icon class="top_arrow" type="arrow-up-a"></Icon></div>
        </BackTop>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'fixedSide',
  data () {
    return {
      hoverItem: {
        hoverImg: [{
          img: 'https://www.acer.com.cn/web/images/to-acer.png'
        }, {
          img: 'https://www.acer.com.cn/web/images/to-tmall.png'
        }, {
          img: 'https://www.acer.com.cn/web/images/to-jd.png'
        }],
        contact: [{
          title: 'Acer客户服务热线',
          phone: '400-700-1000',
          time: '(周一至周五 9:00-18:00)'
        }, {
          title: '售前商用',
          phone: '400-810-0118',
          time: '(周一至周五 9:00-18:00)'
        }, {
          title: 'Acer大客户服务热线',
          phone: '400-770-2000',
          time: '(周一至周五 9:00-18:00)'
        }]
      },
      showplace: false,
      showContact: false
    }
  },
  methods: {
    handleShowPlace () {
      this.showplace = !this.showplace
    },
    handleShowContact () {
      this.showContact = !this.showContact
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~styles/mixin.scss"
.fixed_side
  position: fixed
  z-index: 99
  right: 2%
  top: 50%
  transform: translateY(-50%)
  width: .55rem
  .fixed_side_list
    color: #fff
    // font-size: .25rem
    .fixed_side_item
      position: relative
      box-sizing: border-box
      padding: .07rem 0
      text-align: center
      font-size: .1rem
      @include borderRadius(0.05rem)
      width: 100%
      background: $greenlogo
      margin-bottom: 0.03rem
      height: .55rem
      .icon
        margin-bottom: .16rem
        display: block
        height: .15rem
        font-size: .28rem
      .place_list
        position: absolute
        right: 120%
        width: 100%
        top: 0
        background: $greenlogo
        .place_item
          height: .55rem
          border-bottom: 0.01rem dashed #649c21
          img
            margin: .12rem auto
      .contact_list
        position: absolute
        top: 0
        right: 120%
        width: 1.8rem
        background: $greenlogo
        .contact_item
          width: 100%
          text-align: left
          padding-left: 5%
          border-bottom: 0.01rem dashed #649c21
          .title
            font-size: .12rem
            line-height: .3rem
            color: rgba(255, 255, 255, .7)
          .phone
            font-size: .16rem
            font-weight: 700
            line-height: .2rem
          .time
            font-size: .12rem
            line-height: .25rem
            color: rgba(255, 255, 255, .8)
    .fixed_backtop
      .top
        width: .55rem
        height: .55rem
        background: #fff
        @include borderRadius(0.05rem)
        .top_arrow
          display: block
          text-align: center
          padding-top: .08rem
          color: $greenlogo
          font-size: .4rem
@media only screen and (max-width: 768px)
  .fixed_side
    position: fixed
    z-index: 99
    right: 2%
    top: 50%
    transform: translateY(-50%)
    width: .75rem
    .fixed_side_list
      color: #fff
      // font-size: .25rem
      .fixed_side_item
        position: relative
        box-sizing: border-box
        padding: .07rem 0
        text-align: center
        font-size: .1rem
        @include borderRadius(0.05rem)
        width: 100%
        background: $greenlogo
        margin-bottom: 0.03rem
        height: .75rem
        .icon
          margin-bottom: .16rem
          display: block
          // height: .15rem
          font-size: .55rem
        i
          display: none
        .place_list
          position: absolute
          right: 130%
          width: 120%
          top: 0
          background: $greenlogo
          .place_item
            height: .75rem
            border-bottom: 0.01rem dashed #649c21
            // width: 100%
            padding: 0 .1rem
            box-sizing: content-box
            img
              width: 100%
              margin: .13rem auto
        .contact_list
          position: absolute
          top: 0
          right: 120%
          width: 3.4rem
          background: $greenlogo
          .contact_item
            width: 100%
            text-align: left
            padding-left: 5%
            border-bottom: 0.01rem dashed #649c21
            .title
              font-size: .22rem
              line-height: .5rem
              color: rgba(255, 255, 255, .7)
            .phone
              font-size: .269rem
              font-weight: 700
              line-height: .3rem
            .time
              font-size: .22rem
              line-height: .5rem
              color: rgba(255, 255, 255, .8)
      .fixed_backtop
        .top
          width: .75rem
          height: .75rem
          background: #fff
          @include borderRadius(0.05rem)
          .top_arrow
            display: block
            text-align: center
            padding-top: .15rem
            color: $greenlogo
            font-size: .4rem
</style>
