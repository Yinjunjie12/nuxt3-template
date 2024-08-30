;(function (window) {
  var doc = window.document,
    docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = (function fn() {
    console.log(21312);
    
    var deviceWidth = document.documentElement.clientWidth
    if (deviceWidth > 750) {
      docEl.style.fontSize = deviceWidth / 19.2 + 'px'
    } else {
      docEl.style.fontSize = deviceWidth / 7.5 + 'px'
    }
    return fn
  })()
  if (!doc.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
})(window)
