const searchMatrix = function (matrix, target) {
  let firstLowBound = 0
  let firstUpperBound = matrix.length - 1
  let firstArraynum = 0
  console.log(`target: ${target}`)
  console.log('first compare')
  while (firstLowBound <= firstUpperBound) {
    const middle = parseInt((firstLowBound + firstUpperBound) / 2)
    console.log(`middle: ${middle}`)
    if (matrix[middle][0] === target) {
      return true
    } else if (matrix[middle][0] > target) {
      console.log('大於 target')
      console.log(`matrix[${middle}][0]`)
      firstUpperBound = middle - 1
    } else {
      console.log('小於 target')
      console.log(`matrix[${middle}][0]`)
      firstLowBound = middle + 1
    }
    firstArraynum = middle
  }

  if (firstLowBound === firstUpperBound) {
    firstArraynum = firstLowBound - 1
  }

  console.log(`firstArraynum: ${firstArraynum}`)
  let secondLowBound = 0
  let secondUpperBound = matrix[firstArraynum].length - 1
  console.log('second compare')
  while (secondLowBound <= secondUpperBound) {
    const middle = parseInt((secondLowBound + secondUpperBound) / 2)
    if (matrix[firstArraynum][middle] === target) {
      return true
    } else if (matrix[firstArraynum][middle] > target) {
      console.log('大於 target')
      console.log(`matrix[${firstArraynum}][${middle}]`)
      secondUpperBound = middle - 1
    } else {
      console.log('小於 target')
      console.log(`matrix[${firstArraynum}][${middle}]`)
      secondLowBound = middle + 1
    }
  }
  return false
}

const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)', searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3), true)
expect('searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)', searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13), false)
expect('searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 11)', searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 11), true)
console.log('test case success')
