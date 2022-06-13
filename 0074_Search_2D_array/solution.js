const searchMatrix = function (matrix, target) {
  const height = matrix.length
  const width = matrix[0].length
  let lowBound = 0
  let upperBound = (height * width) - 1
  while (lowBound <= upperBound) {
    const middle = parseInt((lowBound + upperBound) / 2)
    const row = parseInt(middle / width)
    const col = middle % width
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      upperBound = middle - 1
    } else {
      lowBound = middle + 1
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
