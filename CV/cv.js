console.log(window.devicePixelRatio)
 

var html = document.getElementsByName("html")


var position = 0

var leftbutton = document.querySelector("#leftbutton")

var rightbutton = document.querySelector("#rightbutton")

var avatar = document.querySelector("#avatar")

var date = document.querySelector("#date")

var startdiv = document.querySelector("#startdiv")

var datetxt = document.querySelector("#datetxt")

var mapslider = document.querySelector("#mapslider")

var mapbackground = document.querySelector("#mapbackground")

var boutonlancer = document.querySelector("#boutonlancer")

var pdf = document.querySelector("#pdf")

var txt0 = document.querySelector("#txt0")
var txt1 = document.querySelector("#txt1")
var txt2 = document.querySelector("#txt2")
var txt3 = document.querySelector("#txt3")
var txt4 = document.querySelector("#txt4")
var txt5 = document.querySelector("#txt5")
var txt6 = document.querySelector("#txt6")

var unlocked = false

function transitionfunction(){
    setTimeout(() => {  console.log("walking"); }, 3000);
}

boutonlancer.addEventListener("click", unlocking, false)

function unlocking(){
    date.style.display = "grid"
    txt0.style.display = "block"
    startdiv.style.display = "none"
    avatar.src = "../Images/avatar_lookup.png"
    unlocked = true
    pdf.style.display = "block"
}

boutonlancer.addEventListener("mouseover", function(){
    boutonlancer.src = "../Images/boutonlancerhover.svg"
})

boutonlancer.addEventListener("mouseout", function(){
    boutonlancer.src = "../Images/boutonlancer.svg"
})

document.onkeydown = checkKey;

function checkKey(e){
    e = e || window.event;

    if (e.keyCode == '37') {
        console.log("left key")
        if (unlocked == true){
            slide_left()
        }
    }
    else if (e.keyCode == '39') {
        console.log("right key")
        if (unlocked == true){
            slide_right()
        }
    }
    else if (e.keyCode == '13') {
        console.log("unlocking")
            unlocking()
    }
}

rightbutton.addEventListener("click", slide_right, false)

var edgecheckleft = true
var edgecheckright = false

function animationclearing(){
    mapslider.classList.remove("Translate0")
    mapbackground.classList.remove("TranslateBG0")
    mapslider.classList.remove("Translate1")
    mapbackground.classList.remove("TranslateBG1")
    mapslider.classList.remove("Translate2")
    mapbackground.classList.remove("TranslateBG2")
    mapslider.classList.remove("Translate3")
    mapbackground.classList.remove("TranslateBG3")
    mapslider.classList.remove("Translate4")
    mapbackground.classList.remove("TranslateBG4")
    mapslider.classList.remove("Translate5")
    mapbackground.classList.remove("TranslateBG5")
    mapslider.classList.remove("Translate6")
    mapbackground.classList.remove("TranslateBG6")
}
    


function slide_right(){
    console.log("go right")
    position = position + 1
    if(position >= 6){
        position = 6
    }
    if(edgecheckright == false){
        if(position == 0){
            edgecheckleft = false
            edgecheckright = false
            mapslider.classList.add("Translate0")
            mapbackground.classList.add("TranslateBG0")
            transitionfunction()
            datetxt.innerHTML = "2015"
            txt0.style.display = "block"
        }
        else if(position == 1){
            edgecheckright = false
            edgecheckleft = false
            avatar.src = "../Images/avatar_animated.gif"
            mapslider.classList.remove("Translate0")
            mapbackground.classList.remove("TranslateBG0")
            transitionfunction()
            mapslider.classList.add("Translate1")
            mapbackground.classList.add("TranslateBG1")
            datetxt.innerHTML = "2015-2018"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt0.style.display = "none"
            txt1.style.display = "block"
        }
        else if(position == 2){
            edgecheckleft = false
            edgecheckright = false
            avatar.src = "../Images/avatar_animated.gif"
            mapslider.classList.remove("Translate1")
            mapbackground.classList.remove("TranslateBG1")
            transitionfunction()
            mapslider.classList.add("Translate2")
            mapbackground.classList.add("TranslateBG2")
            datetxt.innerHTML = "2016-2018"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt1.style.display = "none"
            txt2.style.display = "block"
        }
        else if(position == 3){
            edgecheckleft = false
            edgecheckright = false
            avatar.src = "../Images/avatar_animated.gif"
            mapslider.classList.remove("Translate2")
            mapbackground.classList.remove("TranslateBG2")
            transitionfunction()
            mapslider.classList.add("Translate3")
            mapbackground.classList.add("TranslateBG3")
            datetxt.innerHTML = "2018-2019"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt2.style.display = "none"
            txt3.style.display = "block"
        }
        else if(position == 4){
            edgecheckright = false
            edgecheckleft = false
            avatar.src = "../Images/avatar_animated.gif"
            mapslider.classList.remove("Translate3")
            mapbackground.classList.remove("TranslateBG3")
            transitionfunction()
            mapslider.classList.add("Translate4")
            mapbackground.classList.add("TranslateBG4")
            datetxt.innerHTML = "2019-2020"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt3.style.display = "none"
            txt4.style.display = "block"
        }
        else if(position == 5){
            edgecheckleft = false
            edgecheckright = false
            avatar.src = "../Images/avatar_animated.gif"
            mapslider.classList.remove("Translate4")
            mapbackground.classList.remove("TranslateBG4")
            transitionfunction()
            mapslider.classList.add("Translate5")
            mapbackground.classList.add("TranslateBG5")
            datetxt.innerHTML = "2020"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt4.style.display = "none"
            txt5.style.display = "block"
        }
        else if(position == 6){
            edgecheckright = false
            edgecheckleft = false
            avatar.src = "../Images/avatar_animated.gif"
            mapslider.classList.remove("Translate5")
            mapbackground.classList.remove("TranslateBG5")
            transitionfunction()
            mapslider.classList.add("Translate6")
            mapbackground.classList.add("TranslateBG6")
            datetxt.innerHTML = "2020-2023"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt5.style.display = "none"
            txt6.style.display = "block"
            edgecheckright = true
        }
    }
    else{
        console.log("stuck left")
    }
    console.log(position)
}

leftbutton.addEventListener("click", slide_left, false)

function slide_left(){
    console.log("go left")
    position = position - 1
    if(position <= 0){
        position = 0
    }
    if(edgecheckleft == false){
        if(position == 6){
            edgecheckleft = false
            edgecheckright = false
            avatar.src = "../Images/avatar_animated_reversed.gif"
            mapslider.classList.remove("Translate5")
            mapbackground.classList.remove("TranslateBG5")
            transitionfunction()
            mapslider.classList.add("Translate6")
            mapbackground.classList.add("TranslateBG6")
            datetxt.innerHTML = "2020-2023"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt5.style.display = "none"
            txt6.style.display = "block"
        }
        else if(position == 5){
            edgecheckright = false
            edgecheckleft = false
            avatar.src = "../Images/avatar_animated_reversed.gif"
            mapslider.classList.remove("Translate6")
            mapbackground.classList.remove("TranslateBG6")
            transitionfunction()
            mapslider.classList.add("Translate5")
            mapbackground.classList.add("TranslateBG5")
            datetxt.innerHTML = "2020"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt6.style.display = "none"
            txt5.style.display = "block"
        }
        else if(position == 4){
            edgecheckright = false
            edgecheckleft = false
            avatar.src = "../Images/avatar_animated_reversed.gif"
            mapslider.classList.remove("Translate5")
            mapbackground.classList.remove("TranslateBG5")
            transitionfunction()
            mapslider.classList.add("Translate4")
            mapbackground.classList.add("TranslateBG4")
            datetxt.innerHTML = "2019-2020"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt5.style.display = "none"
            txt4.style.display = "block"
        }
        else if(position == 3){
            edgecheckright = false
            edgecheckleft = false
            avatar.src = "../Images/avatar_animated_reversed.gif"
            mapslider.classList.remove("Translate4")
            mapbackground.classList.remove("TranslateBG4")
            transitionfunction()
            mapslider.classList.add("Translate3")
            mapbackground.classList.add("TranslateBG3")
            datetxt.innerHTML = "2018-2019"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt4.style.display = "none"
            txt3.style.display = "block"
        }
        else if(position == 2){
            edgecheckright = false
            edgecheckleft = false
            avatar.src = "../Images/avatar_animated_reversed.gif"
            mapslider.classList.remove("Translate3")
            mapbackground.classList.remove("TranslateBG3")
            transitionfunction()
            mapslider.classList.add("Translate2")
            mapbackground.classList.add("TranslateBG2")
            datetxt.innerHTML = "2016-2018"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt3.style.display = "none"
            txt2.style.display = "block"
        }
        else if(position == 1){
            edgecheckright = false
            edgecheckleft = false
            avatar.src = "../Images/avatar_animated_reversed.gif"
            mapslider.classList.remove("Translate2")
            mapbackground.classList.remove("TranslateBG2")
            transitionfunction()
            mapslider.classList.add("Translate1")
            mapbackground.classList.add("TranslateBG1")
            datetxt.innerHTML = "2015-2018"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt2.style.display = "none"
            txt1.style.display = "block"
        }
        else if(position == 0){
            avatar.src = "../Images/avatar_animated_reversed.gif"
            mapslider.classList.remove("Translate1")
            mapbackground.classList.remove("TranslateBG1")
            transitionfunction()
            mapslider.classList.add("Translate0")
            mapbackground.classList.add("TranslateBG0")
            datetxt.innerHTML = "2015"
            setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
            txt1.style.display = "none"
            txt0.style.display = "block"
            edgecheckleft = true
        }
    }
    else{
        console.log("stuck left")
    }
    console.log(position)
}

var txt1 = document.querySelector("#txt1")
var txt2 = document.querySelector("#txt2")
var txt3 = document.querySelector("#txt3")
var txt4 = document.querySelector("#txt4")
var txt5 = document.querySelector("#txt5")
var txt6 = document.querySelector("#txt6")