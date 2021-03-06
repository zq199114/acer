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
    newsImg: 'https://gwimages.acer.com.cn/uploads/news/b31d0139a6d8b9ac11728bb51900a337.png',
    newsTitle: '宏碁新品火力全开 尖端黑科技炫爆新品发布会',
    newsDesc: '宏碁 “不止未来”2017年中国新品发布会在众多行业媒体人、意见领袖及合作伙伴的共同见证下隆重举办。宏碁最新超薄掠夺者游戏本、炫色蜂鸟轻薄本、水冷散热一体机、专业电竞显示器、投影机以及MR产品等尖端黑科技新品震撼发布，为与会者带来一场科技创新视觉盛宴，向行业展示出宏碁进军新兴领域、布局未来无限可能的蓬勃发展态势。'
  }
  for (let i = 0; i < 6; i++) {
    list.push(mock)
  }
  return list
}
const shopList = function () {
  let list2 = [{
    name: '蜂鸟Swift 5 SF514-52T',
    title: '轻薄、时尚',
    desc: '宏碁（Acer） 蜂鸟Swift-5  轻奢触控本',
    price: '7499.00',
    proImg: 'https://gwimages.acer.com.cn/uploads/product/f3a8f74e31432236efd300588433b241.png'
  }, {
    name: '炫6 A615-51G',
    desc: '宏碁（Acer）炫6A615 15.6英寸金属轻薄笔记本电脑',
    price: '6298.00',
    proImg: 'https://gwimages.acer.com.cn/uploads/product/13937c4418860a2111ad9ceb69b3de94.png'
  }, {
    name: '蜂鸟Swift3 SF314-54G',
    desc: '宏碁（Acer）蜂鸟C24-700S 23.8英寸纤薄一体机台式电脑',
    price: '5499.00',
    proImg: 'https://gwimages.acer.com.cn/uploads/product/97f9a00c11a6224135c68886b15af0a7.png'
  }, {
    name: 'C24-700S',
    desc: '宏碁（Acer）蜂鸟Swift3微边框炫薄本',
    price: '5199.00',
    proImg: 'https://gwimages.acer.com.cn/uploads/product/71af94f22a9dcdbd672dcdf0bfeafcef.png'
  }]
  let list = [{
    name: '暗影骑士3进阶版',
    title: '游戏本, 发烧友',
    desc: '宏碁(Acer)暗影骑士3进阶版AN515-52 15.6英寸游戏笔记本',
    price: '6300.00',
    proImg: 'https://gwimages.acer.com.cn/uploads/product/a265df879a62b610e4a097b66dad51fb.png'
  }, {
    name: '翼5 A515-51G',
    title: '主流',
    desc: '宏碁(Acer)翼5A5 15.6英寸轻薄便携笔记本电脑',
    price: '5499.00',
    proImg: 'https://gwimages.acer.com.cn/uploads/product/c406f9585a72f21956646aa20e5e764a.png'
  }, {
    name: 'Triton 700',
    title: '电竞、轻薄，高性能',
    desc: '掠夺者 Predator Triton 700 15.6英寸',
    price: '14999.00',
    proImg: 'https://gwimages.acer.com.cn/uploads/product/b02c9aa9e9cb1a6702e4b14b2b112664.png'
  }]
  let list3 = {
    name: '威武781',
    title: '威武781',
    desc: '宏碁（Acer）威武781台式游戏电脑主机',
    price: '6999.00',
    proImg: 'https://gwimages.acer.com.cn/uploads/product/36dd8ade4e46592211f6fcb3d1a8cc20.png'
  }
  return {list, list2, list3}
}
const sContent = function () {
  let T700 = {
    imgList: [{
      title: 'video',
      video: 'https://gwimages.acer.com.cn/FTP_file/media_File/20171228231834.mp4',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/pdetail/321acee5a750df84c5e9e771627fa1d2.jpg'
      // video: 'https://gwimages.acer.com.cn/uploads/pdetail/321acee5a750df84c5e9e771627fa1d2.jpg'
    }, {
      title: 'innovate',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/pdetail/c3fe521689f1da6233df8131dcd775f4.jpg'
    }, {
      title: 'experience',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/pdetail/bfd996689748bf4e5dac2d467b8588c1.jpg'
    }, {
      title: 'performance',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/pdetail/b59f473ff1210ae9ff796c81380f832c.jpg'
    }, {
      title: 'servicepc',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/pdetail/c09a8bbd0fb02f2b8c6590758a93b664.jpg'
    }, {
      title: 'servicem',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/pdetail/07f4437518fdeda5ffd26e9a9acfbe25.jpg'
    }],
    para: [{
      title: '主体',
      desc: {
        '型号': 'PT715-51-79D2（NH.Q2LCN.001)',
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
  return T700
}
const gameList = function () {
  let swiperImg = [{
    id: '1',
    imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180108223254.png'
  }, {
    id: '2',
    imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180108223334.png'
  }, {
    id: '3',
    imgUrl: 'https://gwimages.acer.com.cn/FTP_file/media_File/20180322194111.png'
  }]
  let list = [{
    title: '笔记本',
    titleImg: 'https://gwimages.acer.com.cn/uploads/ptype/36462173fd3100481a38b1a34daf1ef5.png',
    children: [{
      model: 'Helios 300 PH315-51(White)',
      name: '掠夺者（Predator）15.6英寸游戏笔记本电脑',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/bbed9ef0a3ba562d4a2742c015fb41d2.png',
      url: '/show'
    }, {
      model: 'Helios 300 PH315-51',
      name: '掠夺者（Predator）15.6英寸游戏笔记本电脑',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/ec0305cb411c2663fa413518d2f36ca6.png'
    }, {
      model: 'Helios 300 PH317-52',
      name: '掠夺者（Predator）17.3英寸游戏笔记本电脑',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/2cdf342f4e50cb0c7503f627bfc50d83.png'
    }, {
      model: 'Helios 500 PH517-51',
      name: '掠夺者（Predator）17.3英寸游戏笔记本电脑',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/dd568cb692629074ca8d2da0c0773445.png'
    }, {
      model: 'Helios 300 PH317-51',
      name: '掠夺者（Predator）HELIOS300PH317GTX106017.3英寸游戏笔记本电脑',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/3d635d10c653d1e4d112e745b6e6cb50.png'
    }, {
      model: 'Helios 300 G3-573',
      name: '掠夺者（Predator）G3GTX106015.6英寸游戏笔记本',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/fb5c81ed3a220004b71069645f112867.png'
    }, {
      model: 'Triton 700',
      name: '掠夺者 Predator Triton 700 15.6英寸',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/b02c9aa9e9cb1a6702e4b14b2b112664.png'
    }]
  }, {
    title: '台式机',
    titleImg: 'https://gwimages.acer.com.cn/uploads/ptype/9966f9645e5f9bd9fa8f362344f9967a.png',
    children: [{
      model: 'Orion 9000',
      name: '掠夺者（Predator）Orion9000电竞台式机',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/a420eaa9931f8053b7ca2fd5f8b44bb6.png'
    }, {
      model: 'Orion 5000',
      name: 'Orion 5000高性能电竞主机',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/8abecc54476e253de0a2f33598e9dc99.png'
    }, {
      model: 'Orion 3000',
      name: 'Orion 3000高性能电竞主机',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/1a97873d88eef7746a465adf8d33f2ac.png'
    }]
  }, {
    title: '显示器',
    titleImg: 'https://gwimages.acer.com.cn/uploads/ptype/fb02814493db30c339fe9ad51071aeaf.png',
    children: [{
      model: 'XB271HU',
      name: '宏碁（Acer）掠夺者XB271HU27英寸IPS窄边框2K屏',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/09dd8c2662b96ce14928333f055c5580.png'
    }, {
      model: 'X34P',
      name: '宏碁（Acer）掠夺者X3434英寸IPS电竞G-Sync技术100Hz',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/8266e4bfeda1bd42d8f9794eb4ea0a13.png'
    }, {
      model: 'Z35P',
      name: '宏碁（Acer）掠夺者Z35P35英寸1800R曲率电竞',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/f19c9085129709ee14d013be869df69b.png'
    }, {
      model: 'Z271U bmiphzx',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/598946e8a5aec257780f0cd032ebed2b.png'
    }]
  }, {
    title: '投影机',
    titleImg: 'https://gwimages.acer.com.cn/uploads/ptype/cf9489b7a1239e435380eee4e2e6ae59.png',
    children: [{
      model: 'Z650',
      name: '宏碁（acer）掠夺者Z650全高清1080P电竞投影仪',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/9eb9cd58b9ea5e04c890326b5c1f471f.png'
    }]
  }, {
    title: '外设',
    titleImg: 'https://gwimages.acer.com.cn/uploads/ptype/7b4004582960234cd0b85e687be60a47.png',
    children: [{
      model: 'PMW510',
      name: 'PMW510',
      imgUrl: 'https://gwimages.acer.com.cn/uploads/product/c738c396daa768ab1f83afaf65365817.png'
    }]
  }]
  return {list, swiperImg}
}
Mock.mock('/showcontent', 'get', sContent)
Mock.mock('/product/all', 'post', allProduct)
Mock.mock('/news', 'get', newsList)
Mock.mock('/prolist', 'get', shopList)
Mock.mock('/gameList', 'post', gameList)
