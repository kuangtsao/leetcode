const isPowerOfTwo = function (n) {
  if (n === 1) return true
  return Number.isInteger(Math.log2(n))
}

// const isPowerOfTwo = function (n) {
//   if (n === 1) return true
//   return n % 2
// }

const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('isPowerOfTwo(1)', isPowerOfTwo(1), true)
expect('isPowerOfTwo(3)', isPowerOfTwo(3), false)
expect('isPowerOfTwo(16)', isPowerOfTwo(16), true)

console.log('all pass')
