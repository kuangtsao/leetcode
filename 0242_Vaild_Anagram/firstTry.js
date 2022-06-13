const isAnagram = (s, t) => {
  // 檢查長度是否相等
  if (s.length !== t.length) {
    return false
  }

  const scoreBoard = {}

  // 將 s 推進到空的 hash table，沒有的初始值為 0，之後 +1
  for (const alphabet of s) {
    if (alphabet in scoreBoard === false) {
      scoreBoard[alphabet] = 1
    } else {
      scoreBoard[alphabet] += 1
    }
  }

  // 將 t 推到 hash table，有的 -1
  for (const alphabet of t) {
    scoreBoard[alphabet] -= 1
  }

  // 檢查所有項目是否為 0，若有不為 0 則跳出

  for (const alphabet in scoreBoard) {
    if (scoreBoard[alphabet] !== 0) {
      return false
    }
  }

  return true
}

const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect("isAnagram('anagram','nagaram')", isAnagram('anagram', 'nagaram'), true)
expect("isAnagram('rat','car')", isAnagram('rat', 'car'), false)

console.log('all pass')
