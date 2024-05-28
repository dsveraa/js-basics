const numbers = [13, 27, 44, -10, 81]
const firstNegativeIndex = numbers.findIndex(number => number < 0)
console.log(firstNegativeIndex)

console.log(numbers[firstNegativeIndex])

const mayorACien = numbers.findIndex(number => number > 100)

console.log(mayorACien) // no existe, asi que devuelve -1

const arr = ['a', 'abeja', 'araña']
const acabanEnA = arr.every(palabra => palabra.endsWith('a'))
console.log(acabanEnA)