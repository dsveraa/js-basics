// Recibes dos parámetros: una lista de palabras words y una palabra word. 
// Primero, busca el índice de la palabra en la lista. Después, usa ese índice (que será un número) 
// y devuelve todas las palabras de words que sean más largas (length) que el número del índice.

const words = ['david', 'alejandra', 'simon', 'daniel', 'a']
const word = 'simon'

function buscaPalabras(words, word) {
  const index = words.indexOf(word)
  const result = words.filter(word => word.length < index)
  return result
}
console.log(buscaPalabras(words, word))
