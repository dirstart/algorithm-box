let fooObject = {
  name: 'god',
}

const weakMap = new WeakMap()
const map = new Map()

map.set(fooObject, 'foo')
map.set(1, 1)
weakMap.set(fooObject, 'foo')

fooObject = null

console.log('🍀🍀🍀🍀', map.get(fooObject))

// console.log('🍀🍀🍀🍀', weakMap.get(fooObject))

console.log('🍀🍀🍀🍀', [...map.keys()])

console.log('🍀🍀🍀🍀', weakMap.has(fooObject))
