module.exports = function check(str, bracketsConfig) {
  let arrBrackets = str.split('')
  let ind = 0
  while (ind < str.length) {
    bracketsConfig.forEach(el => {
      if (el[1] === arrBrackets[ind] && el[0] === arrBrackets[ind - 1]) {
        arrBrackets.splice(ind - 1, 2)
        ind = 0
      }
    })
    ind++
  }
  return !arrBrackets.length
}
