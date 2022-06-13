// 由第 0 項開始，向後找元素相加
// [0, 1], [0, 2]
// [1, 2]
// 由於[1, 0]在這裡相等為[0, 1] 故忽略不找
// n * n - 1 => O(n^2)
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        const answer = [i, j]
        return answer
      }
    }
  }
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
