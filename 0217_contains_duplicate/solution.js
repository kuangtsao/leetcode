const containsDuplicate = function(nums) {
  const obj = {}
  for (const num of nums) {
    obj[num] ? obj[num]++ : obj[num] = 1
  }
  console.log(obj)
  for (const key in obj) {
    if (obj[key] > 1) return true
  }
  return false
}
// 可以用 map 做做看
const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('containsDuplicate([1, 2, 3, 1])', containsDuplicate([1, 2, 3, 1]), true)
expect('containsDuplicate([1, 2, 3, 4])', containsDuplicate([1, 2, 3, 4]), false)
expect('containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])', containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)

console.log('all pass')
