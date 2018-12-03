/* Assigment:
show current date as the following form
dd-mm-yyyy
*/

const displayDateContainer = document.getElementById('exercise1')

/* get current date - day, month and year and store in a variable */
const currentDate = new Date()
let currentDay = currentDate.getDate()
let currentMonth = currentDate.getMonth() + 1
let currentYear = currentDate.getFullYear()

/* if number of digits of day or month is lower than 2, then add 0 before them */
if (currentDay.toString.length < 2) {
  currentDay = '0' + currentDay
}

if (currentMonth.toString().length < 2) {
  currentMonth = '0' + currentMonth
}

/* display date */
let displayDate = `${currentDay}/${currentMonth}/${currentYear} `
displayDateContainer.innerHTML = displayDate