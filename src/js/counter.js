const createCounter = () => {
    let total = 0;
    function counter(value) {
        if (typeof value === 'number') {
            total += value;
            return counter;
        }
        console.log('🍀🍀🍀🍀', total)
        return total;
    }

    return counter;
}

counter = createCounter();


counter(10)(11)(33)

counter(100)

counter() // 154