const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares)

const names = ['Miguel', 'Juan', 'David', 'Simon', 'Alejandra']
const todosLosNombresSonLargos = names.every(nombre => nombre.length > 3)
console.log(todosLosNombresSonLargos)