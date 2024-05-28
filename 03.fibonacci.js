// Escribe una función que calcule la sucesión de Fibonacci de forma recursiva.
// La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores.
// Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)

const fibonacci = (n) => {
  if (n === 0) return 0 // Caso base 1
  if (n === 1) return 1 // Caso base 2
  return fibonacci(n - 1) + fibonacci(n - 2) // Caso recursivo
}

const resultado = fibonacci(5)
console.log(resultado) 

/* 





fibonacci(5-1) + fibonacci(5-2)

*/