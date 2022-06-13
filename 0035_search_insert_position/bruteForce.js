const searchInsert = (nums, target) => {
  let position = 0
  for (let index = 0; index < nums.length; index++) {
    if (target < nums[index]) {
      position = index
      break
    } else if (target === nums[index]) {
      position = index
      break
    }
  }
  if (target > nums[nums.length - 1]) position = nums.length
  return position
}

const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('searchInsert([1, 3, 5, 6], 5)', searchInsert([1, 3, 5, 6], 5), 2)
expect('searchInsert([1, 3, 5, 6], 2)', searchInsert([1, 3, 5, 6], 2), 1)
expect('searchInsert([1, 3, 5, 6], 7)', searchInsert([1, 3, 5, 6], 7), 4)
console.log('all pass')
