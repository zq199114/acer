(function (doc, win) {
  let docEl = doc.documentElement
  // orientationchange事件在设备的纵横方向改变时触发。
  // 文档视图调整大小时会触发 resize 事件。
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 764) {
      docEl.style.fontSize = '100px'
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 764) + 'px'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
