const toggleBtn = document.querySelectorAll(".footer span")
const body = document.querySelector(".big-wrapper")
<<<<<<< HEAD
var dark = false
toggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!dark) {
=======

var dark = false
toggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
              if (!dark) {
>>>>>>> 101c074f059dd359fd134f338f61cfdaa3152616
            body.classList.remove("light")
            body.classList.add("dark")
            dark = true
        } else {
            body.classList.remove("dark")
            body.classList.add("light")
            dark = false
        }
<<<<<<< HEAD
    })
})
=======
        
    })
})
>>>>>>> 101c074f059dd359fd134f338f61cfdaa3152616
