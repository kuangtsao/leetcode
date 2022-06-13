
const removeDuplicates = nums => {
  if (nums.length < 2) return nums.length

  let head = 0
  let tail = 1
  let counter = 0
  while (tail < nums.length) {
    console.log(`head: ${head}, tail: ${tail}`)
    if (nums[tail] === nums[head]) {
      tail++
    } else {
      counter++
      head++
      nums[head] = nums[tail]
      tail++
    }
  }

  if (counter === 0) {
    return nums.length()
  } else if (counter === 1) {
    nums.pop()
  } else {
    counter++
    while (counter--) {
      nums.pop()
    }
  }
  console.log(counter)
  console.log(nums)
  console.log(nums.length)

  // return nums.length
}

removeDuplicates([1, 1, 2])
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
removeDuplicates([-1, 0, 0, 0, 3, 3])
