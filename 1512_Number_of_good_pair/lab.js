const arr = [1, 2, 3, 1, 1, 3]
const hashTable = {}
let len = arr.length
let sum = 0

while (len !== 0) {
  for (let index = 1; index <= len; index++) {
    if (arr[0] === arr[index]) {
      if (arr[0] in hashTable === false) {
        hashTable[arr[0]] = 1
      } else {
        hashTable[arr[0]] += 1
      }
    }
  }
  arr.shift()
  len--
}

for (const key in hashTable) {
  console.log(`${key}: ${hashTable[key]}`)
  sum += hashTable[key]
}

console.log(sum)
