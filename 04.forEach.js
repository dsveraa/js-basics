let frutas = ['manzana', 'plátano', 'frutilla']

frutas.forEach(function (fruta, index, originalArray) {
  console.log(index, fruta, originalArray)
})

frutas.forEach((fruta) => {
  console.log(fruta)
})

frutas.forEach((fruta, index) => {
  if (index % 2 !== 0) console.log(fruta)
})

frutas.forEach((fruta, index) => {
  if (index % 2 === 0) console.log(fruta)
})

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumarPares(numeros) {
  let suma = 0
  numeros.forEach((numero) => {
    if (numero % 2 === 0) {
      suma += numero
    }
  })
  return suma
}

resultado = sumarPares(array)
console.log(resultado)

const array2 = [1,2,3,4,5,6,7]

array2.forEach((number)=>{
  if (number > 4)
  console.log(number)
})