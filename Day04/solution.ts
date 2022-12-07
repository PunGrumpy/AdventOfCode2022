import fs from 'fs'

const data = fs.readFileSync('data.txt', 'utf8').split('\n')

const splitSection = (data: string) => {
  const [firstSection, lastSection] = data.split('-').map(Number)
  return [firstSection, lastSection]
}

const part1 = (data: string[]) => {
  const result = data.filter(pair => {
    const [firstElf, secondElf] = pair.split(',')
    const [firstSection1, lastSection1] = splitSection(firstElf)
    const [firstSection2, lastSection2] = splitSection(secondElf)

    return (
      (firstSection1 <= firstSection2 && lastSection1 >= lastSection2) ||
      (firstSection2 <= firstSection1 && lastSection2 >= lastSection1)
    )
  }).length
  console.log('First part solution:  ', result)
}
part1(data)

const part2 = (data: string[]) => {
  const result = data.filter(pair => {
    const [firstElf, secondElf] = pair.split(',')
    const [firstSection1, lastSection1] = splitSection(firstElf)
    const [firstSection2, lastSection2] = splitSection(secondElf)

    return (
      (firstSection1 >= firstSection2 && firstSection1 <= lastSection2) ||
      (lastSection1 >= firstSection2 && lastSection1 <= lastSection2) ||
      (firstSection2 >= firstSection1 && firstSection2 <= lastSection1) ||
      (lastSection2 >= firstSection1 && lastSection2 <= lastSection1)
    )
  }).length
  console.log('Second part solution: ', result)
}
part2(data)
