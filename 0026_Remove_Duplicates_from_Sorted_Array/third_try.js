
const removeDuplicates = nums => {
  for (let i = 0; i < nums.length; i++) {
    console.log(`nums[${i}]:${nums[i]}`)
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      // splice 後元素範圍會改動，但不會影響外層迴圈的中止條件
      i--
      console.log(nums)
    }
  }
}

// removeDuplicates([1, 1, 2])
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
// removeDuplicates([-1, 0, 0, 0, 3, 3])
