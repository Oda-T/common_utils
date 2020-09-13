;(function () {
  var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
  function a() {
    var b = document.documentElement.clientWidth || document.body.clientWidth
    b = b > 750 ? 750 : b
    var c = (b / 750) * 100
    document.querySelector('html').style.fontSize = c + 'px'
  }
  // 增加了html完全加载、手机横屏事件的监听
  window.addEventListener(resizeEvent, a, false)
  document.addEventListener('DOMContentLoaded', a, false)
})()
