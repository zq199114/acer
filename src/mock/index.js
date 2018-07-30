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
const newsList = function () {
  let list = []
  let mock = {
    newsDate: '2018-06-09',
    newsImg: 'https://gwimages.acer.com.cn/uploads/news/4bbfe88af07f3020dfce84577ee51dff.jpg',
    newsTitle: '宏碁新品火力全开 尖端黑科技炫爆新品发布会',
    newsDesc: '宏碁 “不止未来”2017年中国新品发布会在众多行业媒体人、意见领袖及合作伙伴的共同见证下隆重举办。宏碁最新超薄掠夺者游戏本、炫色蜂鸟轻薄本、水冷散热一体机、专业电竞显示器、投影机以及MR产品等尖端黑科技新品震撼发布，为与会者带来一场科技创新视觉盛宴，向行业展示出宏碁进军新兴领域、布局未来无限可能的蓬勃发展态势。'
  }
  for (let i = 0; i < 6; i++) {
    list.push(mock)
  }
  return list
}
Mock.mock('/product/all', 'post', allProduct)
Mock.mock('/news', 'get', newsList)
