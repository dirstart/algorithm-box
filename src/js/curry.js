const makeCurry = (operate, initalValue) => {
  let list = []

  const fn = (...args) => {
    if (args.length > 0) {
      list.push(...args)
      return fn
    } else {
      return fn.ouput()
    }
  }

  fn.ouput = function () {
    if (list.length === 0) {
      return initalValue
    }

    const val = list.reduce(operate, initalValue)
    console.log('🍀🍀🍀🍀', val)
    list = []
    return val
  }

  return fn
}

const addCurry = makeCurry((a, b) => {
  return a + b
}, 0)

const multiCurry = makeCurry((a, b) => {
  return a * b
}, 1)

addCurry(3)(4).ouput() // 7
addCurry(3)(4)(5).ouput() // 12
multiCurry(3)(4).ouput() // 12
multiCurry(3, 4).ouput() // 12
multiCurry(3)(4)(5).ouput() // 60
