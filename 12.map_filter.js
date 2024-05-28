const numbers = [1, 2, 3, 4, 5, 6, 7]

function multAndFilter (numbers) {
  const multNumb = numbers.map((number) => number * 2)
  const filterNumb = multNumb.filter((number) => number < 10)
  
  return filterNumb
}

console.log(multAndFilter(numbers))
