const numbers = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0
})

console.log(evenNumbers)

const largerThan4 = numbers.filter((number) => {
  if (number > 4) return number
})

console.log(largerThan4)

const shorterThan4 = numbers.filter((number) => {
  if (number < 4) return number
})

console.log(shorterThan4)

const palabras = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

const palabrasConE = palabras.filter((palabra) => {
  return palabra.includes('e')
})

console.log(palabrasConE)
