import Mock from 'mockjs'
// const Random = Mock.Random
// mock一组数据
// const produceNewsData = function () {
//   let articles = []
//   for (let i = 0; i < 100; i++) {
//     let newArticleObject = {
//       title: Random.csentence(5, 30), //  Random.csentence( min, max )
//       thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//       author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//       date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//     }
//     articles.push(newArticleObject)
//   }
//
//   return {
//     articles: articles
//   }
// }
// Mock.mock( url, post/get , 返回的数据)；
const allProduct = function () {
  let allPro = []
  let mock = {
    title: '个人&家用产品',
    titlesmall: [
      {
        title: '笔记本',
        items: [
          {item: '暗隐其实游戏本'},
          {item: '一体机'},
          {item: '家庭影院'},
          {item: 'xb1'}
        ]
      }, {
        title: '笔记本',
        items: [
          {item: '暗隐其实游戏本'},
          {item: '暗隐其实游戏本'},
          {item: '暗隐其实游戏本'},
          {item: '一体机'},
          {item: '家庭影院'},
          {item: 'xb1'}
        ]
      }, {
        title: '笔记本',
        items: [
          {item: '暗隐其实游戏本'},
          {item: '暗隐其实游戏本'},
          {item: '暗隐其实游戏本'},
          {item: '一体机'},
          {item: '家庭影院'},
          {item: 'xb1'}
        ]
      }, {
        title: '笔记本',
        items: [
          {item: '暗隐其实游戏本'},
          {item: '一体机'},
          {item: '家庭影院'},
          {item: 'xb1'}
        ]
      }
    ]
  }
  for (let i = 0; i < 6; i++) {
    allPro.push(mock)
  }
  return allPro
}
Mock.mock('/product/all', 'post', allProduct)
