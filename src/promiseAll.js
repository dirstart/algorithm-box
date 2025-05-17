const promiseOne = new Promise((resolve) => {
  setTimeout(() => {
    console.log('🍀🍀🍀🍀', 'promiseOne')
    resolve('promiseOne')
  }, 1000)
})

const promiseTwo = new Promise((resolve) => {
  setTimeout(() => {
    console.log('🍀🍀🍀🍀', 'promiseTwo')
    resolve('promiseTwo')
  }, 2000)
})


export const promiseAll = (promiseList) => {
  if (!Array.isArray(promiseList)) {
    throw new TypeError('promiseAll must be an array')
  }

  const len = promiseList.length;

  if (!len) {
    return Promise.resolve([])
  }


  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    promiseList.forEach((fn, index) => {
      Promise.resolve(fn).then(res => {
        result[index] = res;
        ++count;
        if (count === len) {
          resolve(result)
        }
      }).catch(e => {
        reject(e)
      })
    })
  })

}

promiseAll([promiseOne, promiseTwo]).then(res => {
  console.log('🍀🍀🍀🍀', res)
})