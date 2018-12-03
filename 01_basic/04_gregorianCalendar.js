const leapYearContainer = document.getElementById('exercise4')

function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true
  }
  return false
}

leapYearContainer.innerHTML = `
<h2>Leap Year</h2>
<p> Is 2018 a Leap Year? ${leapYear(2018)} </p>
<p> Is 2017 a Leap Year? ${leapYear(2017)} </p>
<p> Is 2016 a Leap Year? ${leapYear(2016)} </p>
<p> Is 1900 a Leap Year? ${leapYear(1900)} </p>
`

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

leapYearContainer.innerHTML += `<h2>Does the year begin with a Sunday?</h2>`

  for (let i = firstYear; i <= lastYear; i++ ){
    
    function incrementDay() {
      weekDay++
      if(weekDay == 7){
        weekDay = 0
      }
    }

    function checkSunday(){
      if(weekDay === 0) {
        leapYearContainer.innerHTML += `
        <p>${i} begins with a Sunday</p>
        `
      }
    }
    if (leapYear(i)) {
      checkSunday()
      incrementDay()
      incrementDay()
    } else {
      checkSunday()
      incrementDay()
    }
    
  }
}

isSunday()