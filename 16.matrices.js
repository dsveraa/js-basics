const matriz = [
  [1, 2, 3],
  [4, 5, 6],
]

let numero = matriz[1][2]
console.log(numero)

// iteración
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j])
  }
}

matriz.forEach((fila, filaIndex) => {
  fila.forEach((elemento, columnaIndex) => {
    console.log('Fila' + filaIndex)
    console.log('Columna' + columnaIndex)
    console.log('Elemento', elemento)
    console.log('')
  })
})

console.log(matriz)
