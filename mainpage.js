// var bouton_journal = document.querySelector("#bouton_journal")
// bouton_journal.addEventListener("mouseover", function(){
//     bouton_journal.src = "Images/boutonJournalHover.svg"
// })
// bouton_journal.addEventListener("mouseout", function(){
//     bouton_journal.src = "Images/boutonJournal.svg"
// })

// var bouton_realisations = document.querySelector("#bouton_realisations")
// bouton_realisations.addEventListener("mouseover", function(){
//     bouton_realisations.src = "Images/BoutonrealisationsHover.svg"
// })
// bouton_realisations.addEventListener("mouseout", function(){
//     bouton_realisations.src = "Images/Boutonrealisations.svg"
// })

// var cv = document.querySelector("#bouton_cv")
// bouton_cv.addEventListener("mouseover", function(){
//     bouton_cv.src = "Images/Boutoncvhover.svg"
// })
// bouton_cv.addEventListener("mouseout", function(){
//     bouton_cv.src = "Images/Boutoncv.svg"
// })

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

var boutoncv = document.querySelector("#bouton_cv")

var avatar = document.querySelector("#avatar")

boutoncv.addEventListener("mouseover", function(){
    avatar.classList.remove("avatartransitionout")
    avatar.src = "Images/avatar.png"
    avatar.classList.add("avatartransitionover")
})

boutoncv.addEventListener("mouseout", function(){
    avatar.classList.remove("avatartransitionover")
    avatar.src = "Images/avatar_armsup.png"
    avatar.classList.add("avatartransitionout")
})
