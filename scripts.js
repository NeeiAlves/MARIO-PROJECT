
const form = document.querySelector(".form")
const mask = document.querySelector(".mask-form")

function clicky() {
   form.style.left = "50%"
   form.style.transform = "translateX(-50%)"
   mask.style.visibility = "visible"
}

function maskclick() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0%)"
    mask.style.visibility = "hidden"
}











