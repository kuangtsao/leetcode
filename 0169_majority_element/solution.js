const majorityElement = function (nums) {
  const obj = {}
  const length = nums.length / 2
  for (const num of nums) {
    obj[num] ? obj[num]++ : obj[num] = 1
  }
  console.log(obj)
  for (const key in obj) {
    if (obj[key] > length) return Number(key)
  }
}

// 可以用 map 做做看
const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('majorityElement([3, 2, 3])', majorityElement([3, 2, 3]), 3)
expect('majorityElement([2, 2, 1, 1, 1, 2, 2])', majorityElement([2, 2, 1, 1, 1, 2, 2]), 2)
