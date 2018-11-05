const inputOne = document.getElementById("inputOne")
const inputTwo = document.getElementById("inputTwo")

const multiplyBtn = document.getElementById("multiplyBtn")
const divideBtn = document.getElementById("divideBtn")
const result = document.getElementById("result")

multiplyBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const inputOneValue = inputOne.value
  const inputTwoValue = inputTwo.value
  validation(inputOneValue, inputTwoValue, 'multiply')
})

divideBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputOneValue = inputOne.value
  const inputTwoValue = inputTwo.value
  validation(inputOneValue, inputTwoValue, 'divide')
})

function updateInput(a, b) {
  inputOne.value = a
  inputTwo.value = b
}

function validation(a, b, operation){
  if (a === "" && b === "") {
    return result.innerHTML = `Insira um número válido` 
  }

  const numeroUm = a.replace(/\D*/g, "")
  const numeroDois = b.replace(/\D*/g, "")

  updateInput(numeroUm, numeroDois)

  return (operation == 'multiply') ? result.innerHTML = (numeroUm * numeroDois) : result.innerHTML = (numeroUm / numeroDois)
}