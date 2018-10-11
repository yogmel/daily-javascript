/* Assigment:
rotate string 'w3resource'
*/

function rotateString(str){
  let string = str
  console.log(string)
  for(let i = 0; i < string.length; i++){
    string = string.slice(-1) + string.slice(0, -1)

    console.log(string)
  }
}

rotateString('w3resource')