/* Assigment:
rotate string 'w3resource'
*/

const rotateStringContainer = document.getElementById('exercise3')

function rotateString(str){
  let string = str
  for(let i = 0; i < string.length; i++){
    string = string.slice(-1) + string.slice(0, -1)

    rotateStringContainer.innerHTML += `<p> ${string} </p>`
  }
}

rotateString('w3resource')