console.log(a)

var a = 10

foo()

function foo() {
  console.log('Hello')
}

// 函数表达式不会变量提升
bar()

var bar = function () {
  console.log('Hello')
}
