const inputFahrenheit = document.getElementById('inputFahrenheit')
const inputCelsius = document.getElementById('inputCelsius')
const warning = document.getElementById('warning')

inputCelsius.value = 0
inputFahrenheit.value = 0

inputCelsius.addEventListener('input', () => {
  if (/^(\-)?\d+$/.test(inputCelsius.value)) {
    warning.innerHTML = ''
    const num = (inputCelsius.value * 1.8) + 32
    return inputFahrenheit.value = (Math.round(num * 100)/100).toFixed(2)
  }
  return warning.innerHTML = 'Please insert a valid number'
})

inputFahrenheit.addEventListener('input', () => {
  if (/^(\-)?\d+$/.test(inputFahrenheit.value)) {
    warning.innerHTML = ''
    const num = (inputFahrenheit.value - 32) / 1.8
    return inputCelsius.value = (Math.round(num * 100)/100).toFixed(2)
  }
  return warning.innerHTML = 'Please insert a valid number'
})


// user experience addons
inputCelsius.addEventListener('focus', () => {
  inputCelsius.value = ''
})

inputCelsius.addEventListener('blur', () => {
  console.log('on blur')
  if (inputCelsius.value == '') {
    inputCelsius.value = 0
  }
})

inputFahrenheit.addEventListener('focus', () => {
  inputFahrenheit.value = ''
})

inputFahrenheit.addEventListener('blur', () => {
  console.log('on blur')
  if (inputFahrenheit.value == '') {
    inputFahrenheit.value = 0
  }
})