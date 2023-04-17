const toggleBtn = document.querySelectorAll(".footer span")
const body = document.querySelector(".big-wrapper")

var dark = false
toggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {

        var dark = false
        toggleBtn.forEach(btn => {
            btn.addEventListener("click", () => {
                if (!dark) {
                    body.classList.remove("light")
                    body.classList.add("dark")
                    dark = true
                } else {
                    body.classList.remove("dark")
                    body.classList.add("light")
                    dark = false
                }
            })
        })

    })
})
