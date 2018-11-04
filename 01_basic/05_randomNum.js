const inputUser = document.getElementById('inputUser')
const feedbackMessage = document.getElementById('feedbackMessage')
const formNum = document.getElementById('formNum')

const randomNum = Math.floor(Math.random() * 10) + 1

formNum.addEventListener('submit', (e) => {
  e.preventDefault
  inputUser.value == randomNum ? feedbackMessage.innerHTML = 'Good Work!' : feedbackMessage.innerHTML = 'Not matched'
})

