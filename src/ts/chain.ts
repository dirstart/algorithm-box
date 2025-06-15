// const calcResult = calc.add(5).subtract(2).multiply(3).divide(3).value;

export class Calculator {
  public value: number
  constructor() {
    this.value = 0
  }
  add(num: number) {
    this.value += num
    return this
  }
  substract(num: number) {
    this.value -= num
    return this
  }
  multiply(num: number) {
    this.value *= num
    return this
  }
  divide(num: number) {
    this.value /= num
    return this
  }
}

const calcInstance = new Calculator()

const v = calcInstance.add(5).substract(2).multiply(3).divide(3).value
// 5 - 2 = 3 * 3 / 3 = 3
console.log('🍀🍀🍀🍀', v)
