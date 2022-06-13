const twoSum = (nums, target) => {
  const answerTable = {}
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index]
    if (diff in answerTable) {
      return [answerTable[diff], index]
    } else {
      answerTable[nums[index]] = index
    }
  }
  return [-1, -1]
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

expect('twoSums([2,7,11,15],9)', twoSum([2, 7, 11, 15], 9), [0, 1])
expect('twoSum([3, 2, 4], 6))', twoSum([3, 2, 4], 6), [1, 2])
expect('twoSum([3, 3], 6)', twoSum([3, 3], 6), [0, 1])
console.log('all pass')
