self.addEventListener('message', function (event) {
  const count = event.data
  this.self.postMessage(fab(count))
  this.self.close()
})

function fab(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fab(n - 1) + fab(n - 2)
}
