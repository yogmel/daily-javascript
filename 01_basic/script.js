const navBtn = document.getElementById('navBtn')
navBtn.addEventListener("click", toggleVisible, false)

function toggleVisible(e) {
  if(e.target !== e.currentTarget) {
    // get last digit from the button id
    const exId = e.target.id.slice(-1)

    // make other containers invisible
    for (let i = 0; i <= 100; i++) {
      let exercise = document.getElementById('exercise' + i)
      if(exercise)
        exercise.classList.remove('active')
    }

    // make only selected exercise active
    document.getElementById('exercise' + exId).classList.toggle('active')
  }
  e.stopPropagation()
}