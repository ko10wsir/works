const styleSwitcherToggle = document.querySelector(".style_switcher_toggler");
styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".style_switcher").classList.toggle("open");
})
window.addEventListener("scroll", () =>{
if(document.querySelector(".style_switcher").classList.contains("open")){
    document.querySelector(".style_switcher").classList.remove("open");
}
})
// color assine part
const alternateStyles = document.querySelectorAll(".alternate_style");
const disabled = document.querySelectorAll(".disabled");
let colors = document.querySelectorAll(".colors");
function setActiveStyle(color){

    alternateStyles.forEach((style) => {
        if(color == style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })

}
// moon==========
const dayNight = document.querySelector(".day_night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-moon");  
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
