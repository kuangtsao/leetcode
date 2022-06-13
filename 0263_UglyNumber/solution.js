const isUgly = num => {
  const primeNum = [2, 3, 5]
  primeNum.forEach(prime => {
    while (num && num % prime === 0) {
      num /= prime // number 會被一直取代 不符條件不會執行
    }
  })
  return num === 1 // num 與 1 比較； = 1 就 true 其他為 false
}

const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('isUgly(1)', isUgly(1), true)
expect('isUgly(6)', isUgly(6), true)
expect('isUgly(14)', isUgly(14), false)

console.log('all pass')
