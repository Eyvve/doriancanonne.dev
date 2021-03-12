var bouton_journal = document.querySelector("#bouton_journal")
bouton_journal.addEventListener("mouseover", function(){
    bouton_journal.src = "Images/boutonJournalHover.svg"
})
bouton_journal.addEventListener("mouseout", function(){
    bouton_journal.src = "Images/boutonJournal.svg"
})

var bouton_realisations = document.querySelector("#bouton_realisations")
bouton_realisations.addEventListener("mouseover", function(){
    bouton_realisations.src = "Images/BoutonrealisationsHover.svg"
})
bouton_realisations.addEventListener("mouseout", function(){
    bouton_realisations.src = "Images/Boutonrealisations.svg"
})

var help = document.querySelector("#help")
help.addEventListener("mouseover", function() {
    var helptxt = document.getElementById("helptxt")
    console.log("checkin")
    helptxt.innerHTML = "À propos"
    helptxt.style.color = "#2E4057"
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
    linkedintxt.style.color = "#2E4057"
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
    githubtxt.style.color = "#2E4057"
})
github.addEventListener("mouseout", function() {
    var githubtxt = document.getElementById("githubtxt")
    console.log("checkout")
    githubtxt.innerHTML = ""
})