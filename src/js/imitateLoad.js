// 带缓存的实现
const moduleCache = new Map()

function load(modulePath) {
  // 检查缓存
  if (moduleCache.has(modulePath)) {
    return Promise.resolve(moduleCache.get(modulePath))
  }

  // 浏览器环境使用import，Node环境使用require
  const loader =
    typeof window !== 'undefined'
      ? import(modulePath)
      : new Promise((resolve, reject) => {
          try {
            resolve(require(modulePath))
          } catch (err) {
            reject(err)
          }
        })

  return loader.then((module) => {
    if (typeof module.render !== 'function') {
      throw new Error('Module does not have a render method')
    }
    // 缓存模块
    moduleCache.set(modulePath, module)
    return module
  })
}

// 使用示例
load('./bundle.js')
  .then((mod) => {
    console.log('模块加载成功')
    return mod.render()
  })
  .catch((err) => console.error('加载失败:', err))
