const tablero = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'O', 'X'],
]

// Verifica las líneas horizontales
for (let i = 0; i < 3; i++) {
  if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) {
    console.log(`El ganador es: ${tablero[i][0]}`)
  }
}

//Verifica las líneas verticales
for (let i = 0; i < 3; i++) {
  if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) {
    console.log(`El ganador es: ${tablero[0][i]}`)
  }
}

// Verifica las diagonal de arriba izquierda a derecha abajo
if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) {
  console.log(`El ganador es: ${tablero[0][0]}`)
}

// Verifica las diagonal de arriba derecha a izquierda abajo
if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) {
  console.log(`El ganador es: ${tablero[0][2]}`)
}
