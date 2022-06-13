const fizzBuzz = n => {
  const array = []
  for (let x = 1; x <= n; x++) {
    if (x % 15 === 0) {
      array.push('FizzBuzz')
    } else if (x % 3 === 0) {
      array.push('Fizz')
    } else if (x % 5 === 0) {
      array.push('Buzz')
    } else {
      array.push(`${x}`)
    }
  }
  return array
}

function arrayEquals (a, b) {
  return Array.isArray(a) &&
         Array.isArray(b) &&
         a.length === b.length &&
         a.every((value, index) => value === b[index])
}
const expect = (name, value, result) => {
  if (arrayEquals(value, result)) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('fizzBuzz(3)', fizzBuzz(3), ['1', '2', 'Fizz'])
expect('fizzBuzz(3)', fizzBuzz(5), ['1', '2', 'Fizz', '4', 'Buzz'])
expect('fizzBuzz(3)', fizzBuzz(15), ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'])
console.log('all pass')
