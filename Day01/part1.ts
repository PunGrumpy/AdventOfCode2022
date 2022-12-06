import fs from 'fs'

function getCalories() {
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
      const maxCalories = Math.max(...allCalories)
      console.log(maxCalories)
    } catch (err) {
      console.log(err)
    }
  })
}

getCalories()
