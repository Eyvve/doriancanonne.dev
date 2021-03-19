// boutons navbar /////////////////////////////////////////////


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


// slider //////////////////////////////////////////////////////

var position = 0

var timelineindicator = document.querySelector("#timelineindicator")

var date = document.querySelector("#date")

var ProjectImage = document.querySelector("#ProjectImage")

var projectname = document.querySelector("#projectname")

var projectlanguages = document.querySelector("#projectlanguages")

var rightbutton = document.querySelector("#rightbutton")

var rightbuttonlink = document.querySelector("#rightbuttonlink")

var leftbutton = document.querySelector("#leftbutton")

var leftarrow = document.querySelector("#leftarrow")

var rightarrow = document.querySelector("#rightarrow")

var returnbutton = document.querySelector("#return")

var retourimg = document.querySelector("#return")

var description_logo = document.querySelector("#description_logo")

var description_txt = document.querySelector("#description_txt")

var description_txt1 = document.querySelector("#description_txt1")

var description_txt2 = document.querySelector("#description_txt2")

var description_txt3 = document.querySelector("#description_txt3")

var img1 = document.querySelector("#img1")

var img2 = document.querySelector("#img2")

var img3 = document.querySelector("#img3")

var helpicon = document.querySelector("#helpicon")

var linkedinicon = document.querySelector("#linkedinicon")

var githubicon = document.querySelector("#githubicon")

var clicker1 = false
var clicker2 = false
var clicker3 = false

rightarrow.addEventListener("mouseover", function(){
    rightarrow.src = "../Images/right_arrow_hover.png"
})

rightarrow.addEventListener("mouseout", function(){
    rightarrow.src = "../Images/right_arrow.svg"
})

rightarrow.addEventListener("click", function(){
    console.log("go right")
    position = position + 1
    if(position == 3){
        position = 0
    }
    if(position == 0){
        date.innerHTML = ""
        timelineindicator.classList.remove("horizTranslate2")
        timelineindicator.classList.add("horizTranslate0")
        timelineindicator.style.left = "100px"
        date.innerHTML = "Janvier 2021"
        projectname.innerHTML = "Le Prince Démon (démo)"
        projectlanguages.src = "../Images/prince_demon_language.svg"
        rightbutton.src = "../Images/Play_button.svg"
        rightbuttonlink.href = "https://github.com/Eyvve/Le-prince-demon-DEMO/releases/tag/DEMO-1.4"
        ProjectImage.classList.remove("slide2")
        ProjectImage.classList.add("slide0")
        ProjectImage.style.filter = "blur(0px)"
    }
    else if(position == 1){
        date.innerHTML = ""
        timelineindicator.classList.remove("horizTranslate0")
        timelineindicator.classList.add("horizTranslate1")
        timelineindicator.style.left = "150px"
        date.innerHTML = "Fevrier 2021"
        projectname.innerHTML = "Hetic MiniGames"
        projectlanguages.src = "../Images/HMG_language.svg"
        rightbutton.src = "../Images/Visit_button.svg"
        rightbuttonlink.href = "https://hetic-mini-games.netlify.app/index.html"
        ProjectImage.classList.remove("slide0")
        ProjectImage.classList.add("slide1")
        ProjectImage.style.filter = "blur(0px)"
    }
    else if(position == 2){
        date.innerHTML = ""
        timelineindicator.classList.remove("horizTranslate1")
        timelineindicator.classList.add("horizTranslate2")
        timelineindicator.style.left = "250px"
        date.innerHTML = "Avril 2021"
        projectname.innerHTML = "Magical Mystery Page"
        projectlanguages.src = "../Images/MMP_language.svg"
        rightbutton.src = "../Images/Coming_Soon_button.svg"
        rightbuttonlink.href = ""
        ProjectImage.classList.remove("slide1")
        ProjectImage.classList.add("slide2")
        ProjectImage.style.filter = "blur(0px)"
    }
    console.log(position)
})

leftarrow.addEventListener("mouseover", function(){
    leftarrow.src = "../Images/left_arrow_hover.png"
})

leftarrow.addEventListener("mouseout", function(){
    leftarrow.src = "../Images/left_arrow.svg"
})

leftarrow.addEventListener("click", function(){
    console.log("go left")
    position = position - 1
    if(position == -1){
        position = 2
    }
    if(position == 0){
        date.innerHTML = ""
        timelineindicator.classList.remove("horizTranslate1")
        timelineindicator.classList.add("horizTranslate0")
        timelineindicator.style.left = "100px"
        date.innerHTML = "Janvier 2021"
        projectname.innerHTML = "Le Prince Démon (démo)"
        projectlanguages.src = "../Images/prince_demon_language.svg"
        rightbutton.src = "../Images/Play_button.svg"
        rightbuttonlink.href = "https://github.com/Eyvve/Le-prince-demon-DEMO/releases/tag/DEMO-1.4"
        ProjectImage.classList.remove("slide1")
        ProjectImage.classList.add("slide0")
        ProjectImage.style.filter = "blur(0px)"
    }
    else if(position == 1){
        date.innerHTML = ""
        timelineindicator.classList.remove("horizTranslate2")
        timelineindicator.classList.add("horizTranslate1")
        timelineindicator.style.left = "150px"
        date.innerHTML = "Février 2021"
        projectname.innerHTML = "Hetic MiniGames"
        projectlanguages.src = "../Images/HMG_language.svg"
        rightbutton.src = "../Images/Visit_button.svg"
        rightbuttonlink.href = "https://hetic-mini-games.netlify.app/index.html"
        ProjectImage.classList.remove("slide2")
        ProjectImage.classList.add("slide1")
        ProjectImage.style.filter = "blur(0px)"
    }
    else if(position == 2){
        date.innerHTML = ""
        timelineindicator.classList.remove("horizTranslate0")
        timelineindicator.classList.add("horizTranslate2")
        timelineindicator.style.left = "250px"
        date.innerHTML = "Avril 2021"
        projectname.innerHTML = "Magical Mystery Page"
        projectlanguages.src = "../Images/MMP_language.svg"
        rightbutton.src = "../Images/Coming_Soon_button.svg"
        rightbuttonlink.href = ""
        ProjectImage.classList.remove("slide0")
        ProjectImage.classList.add("slide2")
        ProjectImage.style.filter = "blur(0px)"
    }
    console.log(position)
})

leftbutton.addEventListener("mouseover", function(){
    leftbutton.src = "../Images/Description_button_hover.svg"
})

leftbutton.addEventListener("mouseout", function(){
    leftbutton.src = "../Images/Description_button.svg"
})

rightbutton.addEventListener("mouseover", function(){
    if(position == 0){
        rightbutton.src = "../Images/Play_button_hover.svg"
    }
    else if(position == 1){
        rightbutton.src = "../Images/Visit_button_hover.svg"
    }
    else if(position == 2){
        rightbutton.src = "../Images/Coming_Soon_button.svg"
    }
})

rightbutton.addEventListener("mouseout", function(){
    if(position == 0){
        rightbutton.src = "../Images/Play_button.svg"
    }
    else if(position == 1){
        rightbutton.src = "../Images/Visit_button.svg"
    }
    else if(position == 2){
        rightbutton.src = "../Images/Coming_Soon_button.svg"
    }
    
})

returnbutton.addEventListener("mouseover", function(){
    console.log("check in")
    returnbutton.src = "../Images/retour_hover.svg"
})

returnbutton.addEventListener("mouseout", function(){
    console.log("check out")
    returnbutton.src = "../Images/retour.svg"
})

leftbutton.addEventListener("click", function(){
    console.log("slide down")
    githubicon.src = "../Images/github_white.svg"
    githubtxt.style.color = "#DED9D4"
    linkedinicon.src = "../Images/linkedin_white.svg"
    linkedintxt.style.color = "#DED9D4"
    helpicon.src = "../Images/question_white.svg"
    helptxt.style.color = "#DED9D4"
    if(position == 0){
        description_logo.src = "../Images/prince_demon_white_png.png"
        description_txt1.style.display = "block"
        description_txt2.style.display = "none"
        description_txt3.style.display = "none"
        img1.src = "../Images/LPD_S1.png"
        img2.src = "../Images/LPD_S2.png"
        img3.src = "../Images/LPD_S3.png"
    }
    if(position == 1){
        description_logo.src = "../Images/HMG_png.png"
        description_txt1.style.display = "none"
        description_txt2.style.display = "block"
        description_txt3.style.display = "none"
        img1.src = "../Images/HMG_S1.png"
        img2.src = "../Images/HMG_S2.png"
        img3.src = "../Images/HMG_S3.png"
    }
    if(position == 2){
        description_logo.src = "../Images/MMP_png.png"
        description_txt1.style.display = "none"
        description_txt2.style.display = "none"
        description_txt3.style.display = "block"
        img1.src = ""
        img2.src = ""
        img3.src = ""
        // waiting for screens to show
        img1.style.display = "none"
        img2.style.display = "none"
        img3.style.display = "none"
    }
    setTimeout(() => {  window.location.href = "#anchordescription"; }, 0);
    
    
})

returnbutton.addEventListener("click", function(){
    console.log("slide up")
    githubicon.src = "../Images/mark-github-24.svg"
    githubtxt.style.color = "#2E4057"
    linkedinicon.src = "../Images/linkedin.svg"
    linkedintxt.style.color = "#2E4057"
    helpicon.src = "../Images/question.svg"
    helptxt.style.color = "#2E4057"
})




img1.addEventListener("click", function(){
    console.log("imgzoom click")
    if (clicker1 == false){
        img1.classList.add("imgdesctransition")
        clicker1 = true
        console.log("zoom ",clicker1)
    }
    else if (clicker1 == true){
        img1.classList.remove("imgdesctransition")
        clicker1 = false
        console.log("zoom ",clicker1)
    }
})

img2.addEventListener("click", function(){
    console.log("imgzoom click")
    if (clicker2 == false){
        img2.classList.add("imgdesctransition")
        clicker2 = true
        console.log("zoom ",clicker2)
    }
    else if (clicker2 == true){
        img2.classList.remove("imgdesctransition")
        clicker2 = false
        console.log("zoom ",clicker2)
    }
})

img3.addEventListener("click", function(){
    console.log("imgzoom click")
    if (clicker3 == false){
        img3.classList.add("imgdesctransition")
        clicker3 = true
        console.log("zoom ",clicker3)
    }
    else if (clicker3 == true){
        img3.classList.remove("imgdesctransition")
        clicker3 = false
        console.log("zoom ",clicker3)
    }
})