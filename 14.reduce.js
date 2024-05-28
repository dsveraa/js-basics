const numbers = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers = numbers.reduce((acc, curr) => {
  const isEven = curr % 2 === 0
  const doubled = curr * 2
  const isLargerThan5 = doubled > 5

  if (isEven && isLargerThan5) {
    return acc.concat(doubled)
  } else {
    return acc
  }
}, [])

console.log(doubleEvenNumbers)
