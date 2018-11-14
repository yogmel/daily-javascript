(function() {
  const userVariableInput = document.getElementById('userVariable')
  const userForm = document.getElementById('userForm')

  console.log(userVariableInput)

  userForm.addEventListener('click', (e) => {
    e.preventDefault()
    const regex1 = /(\w+)?(\d+)?(\$)?/
    console.log(regex1)
  })

})()