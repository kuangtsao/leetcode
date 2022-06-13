function toRoman (num) {
  // 羅馬數字對表
  const romanChart = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  // 將物件的 key 排好，由於我們想要遇到合適的值就減掉，所以要反著排
  // javascript 的 object 不能迭代，所以要用 object.keys 來進行
  const romanChartNums = Object.keys(romanChart).reverse()

  let roman = ''

  while (num !== 0) {
    for (const key of romanChartNums) {
      // 一遇到可以的值，將 num 減掉該值後跳出
      if (num >= Number(key)) {
        num = num - Number(key)
        roman = roman.concat(romanChart[key])
        break
      }
    }
  }
  return roman
}

const expect = (name, value, result) => {
  if (value === result) { return true }

  throw new Error(`${name} failed successfully`)
}

expect('toRoman(1)', toRoman(1), 'I')
expect('toRoman(2)', toRoman(2), 'II')
expect('toRoman(3)', toRoman(3), 'III')
expect('toRoman(4)', toRoman(4), 'IV')
expect('toRoman(5)', toRoman(5), 'V')
expect('toRoman(6)', toRoman(6), 'VI')
expect('toRoman(9)', toRoman(9), 'IX')
expect('toRoman(10)', toRoman(10), 'X')
expect('toRoman(27)', toRoman(27), 'XXVII')
expect('toRoman(48)', toRoman(48), 'XLVIII')
expect('toRoman(59)', toRoman(59), 'LIX')
expect('toRoman(93)', toRoman(93), 'XCIII')
expect('toRoman(141)', toRoman(141), 'CXLI')
expect('toRoman(150)', toRoman(150), 'CL')
expect('toRoman(163)', toRoman(163), 'CLXIII')
expect('toRoman(402)', toRoman(402), 'CDII')
expect('toRoman(575)', toRoman(575), 'DLXXV')
expect('toRoman(911)', toRoman(911), 'CMXI')
expect('toRoman(1024)', toRoman(1024), 'MXXIV')
expect('toRoman(1050)', toRoman(1050), 'ML')
expect('toRoman(1500)', toRoman(1500), 'MD')
expect('toRoman(1505)', toRoman(1505), 'MDV')
expect('toRoman(3000)', toRoman(3000), 'MMM')

console.log('all pass!')
