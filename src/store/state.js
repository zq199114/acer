import { getStore } from '../config/mUtils'

const state = {
  mainHh: 0, // 头部导航栏高度
  screenWw: 0, // 记录浏览器宽度
  gamePullList: [] // 记录下辣条信息
}
state.mainHh = getStore('mainHh')
state.screenWw = getStore('screenWw')
state.gamePullList = getStore('gamePullList')

export default {
  state
}
