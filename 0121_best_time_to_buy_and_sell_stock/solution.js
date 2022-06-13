const maxProfit = prices => {
  let min = Number.MAX_SAFE_INTEGER
  let profit = 0
  for (let price of prices) {
    if (price < min) {
      min = price
    }

    let currentProfit = price - min

    if(currentProfit > profit) {
      profit = currentProfit
    }
  }

  return profit
}

const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('maxProfit([7, 1, 5, 3, 6, 4])', maxProfit([7, 1, 5, 3, 6, 4]), 5)
expect('maxProfit([7, 6, 4, 3, 1])', maxProfit([7, 6, 4, 3, 1]), 0)
