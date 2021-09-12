const style = document.querySelector('#style');
const theme1 = document.querySelector(".boll-one")
const theme2 = document.querySelector(".boll-two")
const theme3 = document.querySelector(".boll-three")
theme1.addEventListener("click", function(){
    style.setAttribute("href", "style.css")
    this.classList.remove("hide")
    theme2.classList.add("hide")
    theme3.classList.add("hide")
})
theme2.addEventListener("click", function(){
    style.setAttribute("href", "style2.css")
    theme1.classList.add("hide")
    this.classList.remove("hide")
    theme3.classList.add("hide")
})
theme3.addEventListener("click", function(){
    style.setAttribute("href", "style3.css")
    theme1.classList.add("hide")
    theme2.classList.add("hide")
    this.classList.remove("hide")
})