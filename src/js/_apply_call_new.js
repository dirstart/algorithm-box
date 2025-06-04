const obj = {
    a: 1,
    name: 'chp',
    age: 18
}

const fn = function (extraOne = 'one', extraTwo = 'two', extraThree = 'three') {
    console.log(this.name + extraOne + extraTwo + extraThree)
}


Function.prototype.selfCall = function (context, ...args) {
    const fnKey = Symbol()
    context = context ? Object(context) : context;
    context[fnKey] = this;

    const result = context[fnKey](...args)
    delete context[fnKey]
    return result;
}

Function.prototype.selfApply = function (context, args = []) {
    const fnKey = Symbol()
    context = context ? Object(context) : context;
    args = Array.isArray(args) ? args : [];
    context[fnKey] = this;

    const result = context[fnKey](...args)
    delete context[fnKey]
    return result;
}

fn.selfApply(obj)
fn.selfApply(obj, ['a', 'b', 'c'])

fn.selfCall(obj);
fn.selfCall(obj, 'a', 'b', 'c')


Function.prototype.selfBind = function (context) {
    const fn = this;
    if (context === null || context === undefined) {
        context = window
    }
    return function(...args) {
        const fnKey = Symbol()
        context[fnKey] = fn;
        const result = context[fnKey](...args)
        delete context[fnKey];
        return result
    }
}

const hh = fn.selfBind(obj)
hh();
hh('a', 'b', 'c')

const selfNew = function(constructorFn, ...args) {
    // 创建一个新对象
    const obj = {};
    // 将新对象的原型只想构造函数的原型
    obj.__proto__ = constructorFn.prototype;
    // 执行构造函数
    constructorFn.apply(obj, args)
    // 返回对象
    return obj;
}

function F(name) {
    this.name = name
}

const f = selfNew(F, 'chp')

console.log('🍀🍀🍀🍀', f)