import fs from 'fs'

const data = fs.readFileSync('data.txt', 'utf8').toString().split('\r\n')

// Lowercase item types a through z have priorities 1 through 26
// Uppercase item types A through Z have priorities 27 through 52
const valueOfItem = (item: string) => {
  return item.charCodeAt(0) - (item === item.toLowerCase() ? 96 : 38)
}

const part1 = (data: any) => {
  let result = 0
  data.map((item: string) => {
    let isAdd = false
    const component1 = item.slice(0, item.length / 2 + 1)
    const component2 = item.slice(item.length / 2)

    component1.split('').map((char: string) => {
      if (component2.includes(char) && !isAdd) {
        result += valueOfItem(char)
        isAdd = true
      }
    })
  })
  return result
}
console.log(`Part 1: ${part1(data)}`)

const part2 = (data: any) => {
  let result = 0
  for (let i = 0; i < data.length; i += 3) {
    let isAdd = false
    let tmp = data[i].split('')
    tmp.forEach((char: string) => {
      if (data[i + 1].includes(char) && data[i + 2].includes(char) && !isAdd) {
        result += valueOfItem(char)
        isAdd = true
      }
    })
  }
  return result
}
console.log(`Part 2: ${part2(data)}`)
