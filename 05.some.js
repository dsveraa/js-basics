const emojis = ['✨', '🥑', '😍']
const tieneCorazon = emojis.some(emoji => emoji === '😍')
console.log(tieneCorazon) // -> true

const names = ['Leo', 'Isa', 'Ian', 'Lea']
const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo)