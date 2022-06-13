// [0, 1, 0, 3, 12] => [1, 3, 12, 0, 0]
// [0] => [0]

const moveZeros = nums => {
  const arr = []
  let zeroCounter = 0
  for (let i = 0; i < nums.length; i++) {
    nums[i] !== 0 ? arr.push(nums[i]) : zeroCounter++
  }
  while (zeroCounter--) {
    arr.push(0)
  }
  nums.splice(0, nums.length, ...arr)
  console.log(nums)
}

console.log(moveZeros([0, 1, 0, 3, 12]))
console.log(moveZeros([0]))
