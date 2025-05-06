function PromiseA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('A')
    }, 2000)
  })
}

function PromiseB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('B')
    }, 300)
  })
}

export const promiseAll = (list) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(list)) {
      return reject(new TypeError('参数需要是个数组'))
    }
    if (!list?.length) {
      resolve([])
    }
    let result = []
    let count = list.length
    list.forEach((fn, index) => {
      Promise.resolve(fn)
        .then((singleValue) => {
          result[index] = singleValue
          --count
          if (count === 0) {
            resolve(result)
          }
        })
        .catch((e) => {
          reject(e)
        })
    })
  })
}
