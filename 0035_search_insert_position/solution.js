const searchInsert = (nums, target) => {
  let lowBound = 0
  let upperBound = nums.length - 1
  console.log(`current nums: ${nums},target: ${target}`)
  while (lowBound <= upperBound) {
    const middle = parseInt((lowBound + upperBound) / 2)
    console.log('比較中')
    console.log(`lowBound: ${lowBound}, upperBound: ${upperBound}, middle: ${middle}`)
    if (nums[middle] === target) {
      console.log('in nums[middle] === target')
      console.log(`lowBound: ${lowBound}, upperBound: ${upperBound}, middle: ${middle}`)
      return middle
    } else if (nums[middle] > target) {
      console.log('in nums[middle] > target')
      upperBound = middle - 1
      console.log(`lowBound: ${lowBound}, upperBound: ${upperBound}, middle: ${middle}`)
    } else {
      console.log('in nums[middle] < target')
      lowBound = middle + 1
      console.log(`lowBound: ${lowBound}, upperBound: ${upperBound}, middle: ${middle}`)
    }
  }
  return lowBound
}

const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('searchInsert([1, 3, 5, 6], 5)', searchInsert([1, 3, 5, 6], 5), 2)
expect('searchInsert([1, 3, 5, 6], 2)', searchInsert([1, 3, 5, 6], 2), 1)
expect('searchInsert([1, 3, 5, 6], 7)', searchInsert([1, 3, 5, 6], 7), 4)
expect('searchInsert([1, 3, 5, 6], 0)', searchInsert([1, 3, 5, 6], 0), 0)
expect('searchInsert([1], 0)', searchInsert([1], 0), 0)
console.log('all pass')
