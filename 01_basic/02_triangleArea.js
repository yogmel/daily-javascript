/* Assigment:
show area of triangle of sides 5, 6 and 7
*/
const triangleAreaContainer = document.getElementById('exercise2')

function triangleAreaSSS(a, b, c){
  const semi = (a + b + c)/2
  const area = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c))
  return area
}

triangleAreaContainer.innerHTML = triangleAreaSSS(5, 6, 7)