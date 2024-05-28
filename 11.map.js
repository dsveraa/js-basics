// crea un nuevo array con la misma longitud del original, pero con sus elementos
// transformados por una función que le pasamos como parámetro.

const numbers = [1,2,3]

const doubleNumbers = numbers.map((number)=>{
  return number * 2
})

console.log(doubleNumbers)

const words = ['hello', 'javascript', 'david', 'programming']

const wordLength = words.map((word)=>{
  return word.length
})

console.log(wordLength)

