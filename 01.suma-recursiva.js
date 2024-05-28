// Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva.
// Por ejemplo: suma(3) -> 1 + 2 + 3 = 6

function sumaRecursiva(n) {
  if (n === 0) {
    return 0
  }

  return n + sumaRecursiva(n - 1)
}

const resultado = sumaRecursiva(5) // 15
console.log(resultado)

/* 

return 0
1 + suma(1-1) <- caso base
2 + suma(2-1)
3 + suma(3-1)
4 + suma(4-1)
5 + suma(5-1)

*/
