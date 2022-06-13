const solution = function (isBadVersion) {
  /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
  return function (n) {
    let lowBound = 1
    let upperBound = n
    while (lowBound <= upperBound) {
      const middle = parseInt((lowBound + upperBound) / 2)
      if (isBadVersion(middle)) {
        // 如果 isBadVersion(middle) 為 false，而前一板(isBadVersion(middle-1))不是的話，那就直接回傳 middle 就好
        if (middle === 1 || !(isBadVersion(middle - 1))) {
          return middle
        }
        // 由於確認 middle 不是 badVersion 了，就排除 middle 本身
        upperBound = middle - 1
      } else {
        lowBound = middle + 1
      }
    }
    return 'there is no badversion'
  }
}
