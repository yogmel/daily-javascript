function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    // console.log(`${year} is a leap year`)
    return true
  }
  
  // console.log(`${year} is not a leap year`)
  return false
}

console.log(leapYear(2018))
console.log(leapYear(2017))
console.log(leapYear(2016))
console.log(leapYear(1900))

function isSunday(year){
  const firstYear = 2014
  const lastYear = 2050
  let weekDay = 3
  let weekDayName = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  }

/*
2017
2023
2034
2040
2045
*/

  for (let i = firstYear; i <= lastYear; i++ ){
    // console.log('initial', i, weekDayName[weekDay])
    
    if(weekDay === 0) {
      console.log(`${i} begins with a Sunday`)
    }
    
    if (leapYear(i)) {
      weekDay += 2
      if(weekDay >= 6){
        weekDay = 0
      }
    } else {
      weekDay++
      if(weekDay >= 6){
        weekDay = 0
      }
    }

    // console.log('last', weekDay)
    
  }
}

isSunday()