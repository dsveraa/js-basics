const factorial = (n) => {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

const resultado = factorial(5) // 120
console.log(resultado)

/*

return 1                
return 2 * factorial (2-1) <-- caso base
return 3 * factorial (3-1)
return 4 * factorial (4-1)
return 5 * factorial (5-1)

*/