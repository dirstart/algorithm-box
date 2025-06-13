class Animal {
  name: string

  constructor(name: string = 'Animal') {
    this.name = name
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof!')
  }

  constructor(name: string = 'Dog') {
    super(name)
  }
}

// 测试协变行为
let animals: Animal[] = [new Animal()]
let dogs: Dog[] = [new Dog()]

// 协变行为：Dog[] 可以赋值给 Animal[]
animals = dogs // 合法，因为 Dog extends Animal

// 使用数组
animals.forEach((animal) => {
  console.log(animal.name) // 可以安全访问 Animal 的属性
  // animal.bark(); // 错误: Animal 上没有 bark 方法
})
