
const removeDuplicates = nums => {
  const obj = {}
  const arr = []
  for (const num of nums) {
    obj[num] ? obj[num]++ : obj[num] = 1
  }

  for (const key of Object.keys(obj)) {
    arr.push(Number(key))
  }
  nums.splice(0, nums.length, ...arr)

  console.log(obj)
  console.log(Object.keys(obj))
  console.log(Object.keys(obj).length)
  console.log(nums)
  // return Object.keys(obj).length
}

removeDuplicates([1, 1, 2])
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
removeDuplicates([-1, 0, 0, 0, 3, 3])
