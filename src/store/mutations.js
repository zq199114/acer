import * as type from './mutation-types'

export default {
  [type.STORE_HEIGHT] (state, mh) {
    state.mainHh = mh
  },
  [type.STORE_C_WIDTH] (state, cw) {
    state.screenWw = cw
  }
}
