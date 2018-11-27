(function() {
  const userVariableInput = document.getElementById('userVariable')
  const userForm = document.getElementById('userForm')
  let output = document.getElementById('output')
  let warning = document.getElementById('warning')

  userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = userVariableInput.value
    const regex1 = /^[\D|\$|\_](\S+)$/

    if(regex1.test(value)) {
      warning.innerHTML = ''
      userVariableInput.value = ''
      return output.innerHTML += '<p>' + value + '</p>'
    } else {
      warning.innerHTML = 'Variáveis não podem iniciar com números e não podem haver espaços.'
    }
  })

})()