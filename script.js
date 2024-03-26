let body = document.querySelector("body")
let modalBtn = document.querySelector(".modalBtn")
let clickMeBtn = document.querySelector(".clickMe")

clickMeBtn.addEventListener("click", function(){
    body.classList.add("active")
})

modalBtn.addEventListener("click", function(){
    body.classList.remove("active")
})