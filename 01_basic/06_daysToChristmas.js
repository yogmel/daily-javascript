const date = new Date ()
const dayToday = date.getDate()
const monthToday = date.getMonth() + 1
const yearToday = date.getFullYear()

var numDias = {
  trintaDias: [4, 6, 9, 11],
  trintaUmDias: [1, 3, 5, 7, 8, 10, 12],
  fevereiro: [2]
}

function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true
  }
  return false
}

function howManyDaysMonth(monthToday) {
  if ( numDias.trintaDias.includes(monthToday) ) {
    return 30
  }
  if ( numDias.trintaUmDias.includes(monthToday) ) {
    return 31
  }
  if ( numDias.fevereiro.includes(monthToday) ) {
    if (leapYear)
      return 29
    return 28
  }
}

function howManyDaysToChristmas(dayToday, monthToday){
  monthDays = howManyDaysMonth(monthToday)
  let totalDays = monthDays - dayToday

  for (let i = 1; i <= 11; i++){
    monthToday++

    if (monthToday == 12)  {
      totalDays += 25
      return totalDays
    }

    totalDays += howManyDaysMonth(monthToday)
  }
}

console.log('Total days to Christmas: ', howManyDaysToChristmas(dayToday, monthToday))