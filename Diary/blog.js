var help = document.querySelector("#help")
help.addEventListener("mouseover", function() {
    var helptxt = document.getElementById("helptxt")
    console.log("checkin")
    helptxt.innerHTML = "À propos"
    helptxt.style.color = "#FFFFFF"
})
help.addEventListener("mouseout", function() {
    var helptxt = document.getElementById("helptxt")
    console.log("checkout")
    helptxt.innerHTML = ""
})



var linkedin = document.querySelector("#linkedin")
linkedin.addEventListener("mouseover", function() {
    var linkedintxt = document.getElementById("linkedintxt")
    console.log("checkin")
    linkedintxt.innerHTML = "linkedin"
    linkedintxt.style.color = "#FFFFFF"
})
linkedin.addEventListener("mouseout", function() {
    var linkedintxt = document.getElementById("linkedintxt")
    console.log("checkout")
    linkedintxt.innerHTML = ""
})



var github = document.querySelector("#github")
github.addEventListener("mouseover", function() {
    var githubtxt = document.getElementById("githubtxt")
    console.log("checkin")
    githubtxt.innerHTML = "Github"
    githubtxt.style.color = "#FFFFFF"
})
github.addEventListener("mouseout", function() {
    var githubtxt = document.getElementById("githubtxt")
    console.log("checkout")
    githubtxt.innerHTML = ""
})