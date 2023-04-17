const toggleBtn = document.querySelectorAll(".footer span")

const body = document.querySelector(".big-wrapper")
const overlay = document.querySelector(".overlay")

var dark = false


toggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        overlay.classList.add("show")
        overlay.classList.remove("hide")
        if (!dark) {
            body.classList.remove("light")
            body.classList.add("dark")
            dark = true
        } else {
            body.classList.remove("dark")
            body.classList.add("light")
            dark = false
        }
        overlay.addEventListener("animationend", () => {
            overlay.classList.remove("show")
            overlay.classList.add("hide")
        })
    })
})
console.log(toggleBtn);