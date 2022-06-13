const searchMatrix = function (matrix, target) {
  let row = 0
  let col = matrix[0].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      col--
    } else {
      row++
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
