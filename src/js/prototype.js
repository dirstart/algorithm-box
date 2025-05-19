function Person() {
  this.name = 'chp'
  this.age = 18
  this.say = () => {
    console.log('🍀🍀🍀🍀', this.name)
  }
}

const p = new Person()

p.say()
