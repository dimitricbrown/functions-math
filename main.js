const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}

const multiply = (firstNumber) => {
    return firstNumber * 2
}

let addResult = add(17, 38)
let multiplyResult = multiply(addResult)

console.log(multiplyResult)