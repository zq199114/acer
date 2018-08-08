import * as type from './mutation-types'
import { setStore } from '../config/mUtils'

export default {
  [type.STORE_HEIGHT] (state, mh) {
    state.mainHh = mh
    setStore('mainHh', mh)
  },
  [type.STORE_C_WIDTH] (state, cw) {
    state.screenWw = cw
    setStore('screenWw', cw)
  },
  [type.STORE_PULL_LIST] (state, gpl) {
    state.gamePullList = gpl
    setStore('gamePullList', gpl)
  }
}
