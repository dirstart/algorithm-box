function F() {}
function S() {}

const f = new F()
F.prototype = new S()

const _instanceof = (ins, cls) => {
  let insProto = ins.__proto__
  while (insProto) {
    if (cls.prototype === insProto) {
      console.log('🍀🍀🍀🍀', true)
      return true
    }
    insProto = insProto.__proto__
  }
  console.log('🍀🍀🍀🍀', false)
  return false
}

_instanceof(f, F)
_instanceof(f, S)

_instanceof(123, Object)
