const numeros = [5, 10, 2, 25, 7]

numeros.sort((a, b) => {
  // return de un valor negativo -> a va delante de b
  // return de un valor positivo -> b va delante de a
  // return de 0 -> están en la misma posición

  return a - b

  // *  *                  *  *                  *   *                  *   *
  // 5, 10, 2, 25, 7 -> 5, 2, 10, 25, 7 -> 5, 2, 10, 25, 7 -> 5, 2, 10, 7, 25

  // *  *                  *  *                  *  *                  *   *
  // 2, 5, 10, 7, 25 -> 2, 5, 10, 7, 25 -> 2, 5, 7, 10, 25 -> 2, 5, 7, 10, 25
})

console.log(numeros)

const palabras = ['instagram', 'discord', 'youtube', 'facebook']

// palabras.sort((a, b) => {
//   return a.localeCompare(b)
// })

console.log(palabras)

const palabrasOrdenadas = palabras.toSorted((a, b) => {
  return a.localeCompare(b)
})

console.log(palabras)
console.log(palabrasOrdenadas)

// Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto.
// Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.

const numbers = [5, -10, -2, -25, -7]

// numbers.sort((a, b) => {
//   return Math.abs(a) - Math.abs(b)
// })

// console.log(numbers)

function sortAbsoluteNumbers(numbers) {
  numbers.sort((a, b) => {
    return Math.abs(a) - Math.abs(b)
  })
  return numbers
}

console.log(sortAbsoluteNumbers(numbers))