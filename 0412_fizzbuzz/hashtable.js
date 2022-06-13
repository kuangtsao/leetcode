const fizzBuzz = n => {
  const fizzBuzzChart = {
    3: 'Fizz',
    5: 'Buzz',
    15: 'FizzBuzz'
  }
  const array = []

  for (let x = 1; x <= n; x++) {
    let output = ''
    for (const key of Object.keys(fizzBuzzChart).reverse()) {
      // console.log(`x:${x} key: ${key}`)
      if (x % key === 0) {
        output = fizzBuzzChart[key]
        break
      } else {
        output = `${x}`
      }
    }
    // console.log(`x:${x} output: ${output}`)
    array.push(output)
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
expect('fizzBuzz(5)', fizzBuzz(5), ['1', '2', 'Fizz', '4', 'Buzz'])
expect('fizzBuzz(5)', fizzBuzz(15), ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'])
console.log('all pass')
