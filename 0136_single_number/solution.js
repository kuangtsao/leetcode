const singleNumber = function (nums) {
  const obj = {}
  for (const num of nums) {
    obj[num] ? obj[num]++ : obj[num] = 1
  }
  for (const key in obj) {
    if (obj[key] === 1) return Number(key)
  }
}
// Map
const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}
expect('singleNumber([2,2,1])', singleNumber([2, 2, 1]), 1)
expect('singleNumber([4,1,2,1,2])', singleNumber([4, 1, 2, 1, 2]), 4)
expect('singleNumber([1])', singleNumber([1]), 1)

console.log('all pass')
