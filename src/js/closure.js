var a = 1

const result = []
var total = 0

function foo(a) {
  var i = 0
  for (; i < 3; i++) {
    result[i] = function () {
      total += i
      return i + a
    }
  }
}

// 闭包，内部函数可以访问外部函数的变量

result[0]() //
result[1]() //
result[2]()

/**
 * i a total
 */
