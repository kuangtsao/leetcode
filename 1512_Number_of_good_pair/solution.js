const numIdenticalPairs = function (nums) {
  const hashTable = {}
  let len = nums.length
  let sum = 0

  while (len !== 0) {
    for (let index = 1; index <= len; index++) {
      if (nums[0] === nums[index]) {
        if (nums[0] in hashTable === false) {
          hashTable[nums[0]] = 1
        } else {
          hashTable[nums[0]] += 1
        }
      }
    }
    nums.shift()
    len--
  }

  for (const key in hashTable) {
    console.log(`${key}: ${hashTable[key]}`)
    sum += hashTable[key]
  }

  return sum
}

const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('numIdenticalPairs([1,2,3,1,1,3])', numIdenticalPairs([1, 2, 3, 1, 1, 3]), 4)
expect('numIdenticalPairs([1,1,1,1])', numIdenticalPairs([1, 1, 1, 1]), 6)
expect('numIdenticalPairs([1,2,3])', numIdenticalPairs([1, 2, 3]), 0)

console.log('all pass')
