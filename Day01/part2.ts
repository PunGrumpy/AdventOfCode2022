import fs from 'fs'

const getTopThreeCalories = () => {
  fs.readFile('./data.txt', (_, data) => {
    try {
      let elfCalories: number = 0
      const allCalories: number[] = []
      const calories: number[] = data
        .toString()
        .split(/\r?\n/)
        .map(calorie => +calorie)
      for (let calorie of calories) {
        if (calorie !== 0) {
          elfCalories += +calorie
        } else {
          allCalories.push(elfCalories)
          elfCalories = 0
        }
      }
      const topThreeCalories = allCalories.sort((a, b) => b - a).slice(0, 3)
      const totalTopThreeCalories = topThreeCalories.reduce((sum, calorie) => sum + calorie, 0)
      console.log(totalTopThreeCalories)
    } catch (err) {
      console.log(err)
    }
  })
}

getTopThreeCalories()
