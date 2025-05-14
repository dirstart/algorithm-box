class Parent {
  static name = 'ParentClass'

  constructor() {
    this.name = 'ParentInstance'
    this.method = () => console.log(this.name)
  }

  static staticMethod() {
    console.log(this.name)
  }

  protoMethod() {
    console.log(this.name)
  }
}

class Child extends Parent {
  static name = 'ChildClass'

  constructor() {
    super()
    this.name = 'ChildInstance'
  }
}

const child = new Child()

child.method() // ChildInstance
child.protoMethod() // ChildInstance
Child.staticMethod() // ChildClass

const extractedMethod = child.method
extractedMethod() // ChildInstance
