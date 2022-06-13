function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  if (p[0] === undefined && q[0] === undefined) return true
  if (p.length !== q.length) return false

  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) return false
  }

  return true
}

console.log(isSameTree([1, 2, 3], [1, 2, 3]))
console.log(isSameTree([1, 2], [1, null, 2]))
console.log(isSameTree([1, 2, 1], [1, 1, 2]))
