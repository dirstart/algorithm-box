// 第一种，如果支持 ES6
function load1(url) {
  return import(url).then((module) => {
    return module.default || module
  })
}

load1('./imitateA.js').then((page) => {
  page.render()
})

const loadScript = (url, callback) => {
  const scriptEl = document.createElement('script')
  scriptEl.src = url
  // 成功加载后执行回调
  scriptEl.onload = function () {
    if (callback) {
      callback(null, window.MyModule)
    }
  }
  // 失败的回调
  scriptEl.onerror = function () {
    if (callback) {
      callback(new Error('12'))
    }
  }
  document.head.appendChild(scriptEl)
}

const singlePromise = function (fn) {
  const callback = []
  this.then = function (cb) {
    callback.push(cb)
    return this
  }

  function resolve(value) {
    setTimeout(() => {
      callback.forEach((fn) => {
        fn(value)
      })
    }, 0)
  }

  fn(resolve)
}

// singlePromise()

const x = new singlePromise((resolve) => {
  setTimeout(() => {
    resolve()
  }, 3000)
})
x.then((daa) => {
  console.log('🍀🍀🍀🍀 then 之后得到的data')
})
;(function (modules) {
  function __webpack_require__(moduleId) {
    // 模拟 require 逻辑
  }
  return __webpack_require__(0) // 从入口模块开始执行
})([function (module, exports, __webpack_require__) {}])
