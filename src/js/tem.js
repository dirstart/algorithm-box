class Person {
  constructor(name) {
    this.name = name
  }

  setName(name) {
    this.name = name
    return this
  }

  introduce() {
    console.log(`Hello, I'm ${this.name}`)
    return this
  }

  work() {
    return new Job(this) // 返回 Job 对象以支持链式调用
  }
}

class Job {
  constructor(person) {
    this.person = person
  }

  at(company) {
    console.log(`${this.person.name} works at ${company}`)
    return this.person // 返回 Person 对象以继续链式调用
  }
}

// 使用示例
new Person('Alice')
  .setName('Bob')
  .work() // 进入 Job 链
  .at('Google') // 返回 Person 链
  .introduce() // 输出: Hello, I'm Bob
