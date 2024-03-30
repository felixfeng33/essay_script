function generateRandomNumber(min, max) {
  var num1 = Math.floor(Math.random() * (max - min + 1)) + min
  var num2 = num1 + Math.floor(Math.random() * 11) // 添加一个较小的随机数，范围为 0 到 10

  if (num2 > max) {
    num2 = max
  }

  return [num1, num2]
}

const tbodyEle = document
  .getElementsByClassName("result-table-list")[0]
  .getElementsByTagName("tbody")[0]
const trList = tbodyEle.getElementsByTagName("tr")

let str = ""

function normalizeName(str) {
  var arr = str.split(";") // 将字符串按照分隔符分割成数组
  return arr.join("，") // 将数组的所有元素用指定的分隔符连接成一个字符串
}

Array.from(trList).forEach((tr, index) => {
  const tdList = tr.getElementsByTagName("td")

  const res = generateRandomNumber(6, 30)
  const start = res[0]
  const end = res[1]
  const page = `${start}-${end}`

  let essayName = ""
  let author = ""
  let source = ""
  let date = ""
  let type = "J"

  Array.from(tdList).forEach((td) => {
    const tdClassNamet = td.className
    const value = td.innerText

    if (tdClassNamet.includes("name")) essayName = value
    if (tdClassNamet.includes("author")) author = normalizeName(value)
    if (tdClassNamet.includes("source")) source = value
    if (tdClassNamet.includes("date")) date = value
    if (tdClassNamet.includes("data")) {
      switch (value) {
        case "期刊":
          type = "J"
          break
        case "硕士":
          type = "D"
          break
        case "图书":
          type = "M"
          break
      }
    }
  })

  str += `[${
    index + 1
  }] ${author}. ${essayName}[${type}]. ${source}，${date}, ${page}.\n`
})
console.log(str)