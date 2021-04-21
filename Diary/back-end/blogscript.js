var menu = document.getElementById("menu")
var navbar = document.getElementById("navbar")
var opened = false
menu.addEventListener("click", function(){
    if (opened == false){
        navbar.style.display = "block"
        opened = true
        console.log(opened)
    }
    else if(opened == true){
        navbar.style.display = "none"
        opened = false
        console.log(opened)
    }

})


var help = document.querySelector("#help")
help.addEventListener("mouseover", function() {
    var helptxt = document.getElementById("helptxt")
    helptxt.classList.add("smoothtransition")
    console.log("checkin")
    helptxt.innerHTML = "À propos"
    helptxt.style.color = "#2E4057"
})
help.addEventListener("mouseout", function() {
    var helptxt = document.getElementById("helptxt")
    helptxt.classList.remove("smoothtransition")
    console.log("checkout")
    helptxt.innerHTML = ""
})





var linkedin = document.querySelector("#linkedin")
linkedin.addEventListener("mouseover", function() {
    var linkedintxt = document.getElementById("linkedintxt")
    linkedintxt.classList.add("smoothtransition")
    console.log("checkin")
    linkedintxt.innerHTML = "linkedin"
    linkedintxt.style.color = "#2E4057"
})
linkedin.addEventListener("mouseout", function() {
    var linkedintxt = document.getElementById("linkedintxt")
    linkedintxt.classList.remove("smoothtransition")
    console.log("checkout")
    linkedintxt.innerHTML = ""
})



var github = document.querySelector("#github")
github.addEventListener("mouseover", function() {
    var githubtxt = document.getElementById("githubtxt")
    githubtxt.classList.add("smoothtransition")
    console.log("checkin")
    githubtxt.innerHTML = "Github"
    githubtxt.style.color = "#2E4057"
})
github.addEventListener("mouseout", function() {
    var githubtxt = document.getElementById("githubtxt")
    githubtxt.classList.remove("smoothtransition")
    console.log("checkout")
    githubtxt.innerHTML = ""
})