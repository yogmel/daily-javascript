/* Assigment:
show area of triangle of sides 5, 6 and 7
*/

function triangleAreaSSS(a, b, c){
  const semi = (a + b + c)/2
  const area = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c))
  console.log(area)
}

triangleAreaSSS(5, 6, 7)