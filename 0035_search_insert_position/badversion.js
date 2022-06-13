const searchInsert = (nums, target) => {
  let lowBound = 0
  let upperBound = nums.length - 1
  let middle = Math.round((lowBound + upperBound) / 2)
  let position = 0
  console.log(`current nums: ${nums},target: ${target}`)
  while (true) {
    console.log('in while')
    console.log(`lowBound: ${lowBound}, upperBound: ${upperBound}, middle: ${middle}`)
    if (lowBound === upperBound) {
      if (target > nums[lowBound]) {
        position = lowBound + 1
      } else {
        position = lowBound
      }
      break
    } else if (nums[middle] > target) {
      console.log('in nums[middle] > target')
      upperBound = middle - 1
      middle = (lowBound + upperBound) / 2
      console.log(`lowBound: ${lowBound}, upperBound: ${upperBound}`)
    } else if (nums[middle] < target) {
      console.log('in nums[middle] < target')
      lowBound = middle + 1
      middle = (lowBound + upperBound) / 2
      console.log(`lowBound: ${lowBound}, upperBound: ${upperBound}`)
    } else if (nums[middle] === target) {
      console.log('in nums[middle] === target')
      position = middle
      console.log(`lowBound: ${lowBound}, upperBound: ${upperBound}, position: ${position}`)
      break
    } else if (upperBound === lowBound + 1) {
      // 當 upperBound 與 lowBound 兩者交錯
      console.log('in upperBound === lowBound + 1')
      if (target > nums[lowBound] && target < nums[upperBound]) {
        position = upperBound
      } else {
        position = lowBound
      }
      console.log(`lowBound: ${lowBound}, upperBound: ${upperBound}, position: ${position}`)
      break
    } else if (lowBound > upperBound) {
      // 當 target 大於所有陣列元素的值
      console.log('in lowBound > upperBound')
      position = nums.length
      console.log(`lowBound: ${lowBound}, upperBound: ${upperBound}, position: ${position}`)
      break
    }
  }
  return position
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
