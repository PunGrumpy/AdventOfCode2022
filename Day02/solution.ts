import fs from 'fs'

const data = fs.readFileSync('data.txt', 'utf8').toString().trim().split('\r\n')

// First column
// A: rock, B: paper, C: scissors
// Second column
// X: rock, Y: paper, Z: scissors

const part1 = function (data: string[]) {
  const map: any = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6
  }

  const result: any = []
  data.forEach(index => result.push(map[index]))
  const sum = result.reduce((a: number, b: number) => a + b, 0)
  return sum
}
console.log(`Part 1: ${part1(data)}`)

const part2 = function (data: string[]) {
  const map: any = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7
  }

  const result: any = []
  data.forEach(index => result.push(map[index]))
  const sum = result.reduce((a: number, b: number) => a + b, 0)
  return sum
}
console.log(`Part 2: ${part2(data)}`)
