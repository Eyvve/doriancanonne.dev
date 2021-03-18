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

var boutonlancer = document.querySelector("#boutonlancer")

var txt0 = document.querySelector("#txt0")
var txt1 = document.querySelector("#txt1")
var txt2 = document.querySelector("#txt2")
var txt3 = document.querySelector("#txt3")
var txt4 = document.querySelector("#txt4")
var txt5 = document.querySelector("#txt5")
var txt6 = document.querySelector("#txt6")

function transitionfunction(){
    setTimeout(() => {  console.log("walking"); }, 3000);
}

boutonlancer.addEventListener("click", function(){
    date.style.display = "grid"
    txt0.style.display = "block"
    startdiv.style.display = "none"
    avatar.src = "../Images/avatar_lookup.png"
})

boutonlancer.addEventListener("mouseover", function(){
    boutonlancer.src = "../Images/boutonlancerhover.svg"
})

boutonlancer.addEventListener("mouseout", function(){
    boutonlancer.src = "../Images/boutonlancer.svg"
})

rightbutton.addEventListener("click", function(){
    console.log("go right")
    position = position + 1
    if(position >= 6){
        position = 6
    }
    if(position == 0){
        mapslider.classList.add("Translate0")

        transitionfunction()
        datetxt.innerHTML = "2015"
        txt0.style.display = "block"
    }
    else if(position == 1){
        avatar.src = "../Images/avatar_animated.gif"
        mapslider.classList.remove("Translate0")
        transitionfunction()
        mapslider.classList.add("Translate1")
        datetxt.innerHTML = "2015-2018"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt0.style.display = "none"
        txt1.style.display = "block"
    }
    else if(position == 2){
        avatar.src = "../Images/avatar_animated.gif"
        mapslider.classList.remove("Translate1")
        transitionfunction()
        mapslider.classList.add("Translate2")
        datetxt.innerHTML = "2016-2018"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt1.style.display = "none"
        txt2.style.display = "block"
    }
    else if(position == 3){
        avatar.src = "../Images/avatar_animated.gif"
        mapslider.classList.remove("Translate2")
        transitionfunction()
        mapslider.classList.add("Translate3")
        datetxt.innerHTML = "2018-2019"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt2.style.display = "none"
        txt3.style.display = "block"
    }
    else if(position == 4){
        avatar.src = "../Images/avatar_animated.gif"
        mapslider.classList.remove("Translate3")
        transitionfunction()
        mapslider.classList.add("Translate4")
        datetxt.innerHTML = "2019-2020"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt3.style.display = "none"
        txt4.style.display = "block"
    }
    else if(position == 5){
        avatar.src = "../Images/avatar_animated.gif"
        mapslider.classList.remove("Translate4")
        transitionfunction()
        mapslider.classList.add("Translate5")
        datetxt.innerHTML = "2020"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt4.style.display = "none"
        txt5.style.display = "block"
    }
    else if(position == 6){
        avatar.src = "../Images/avatar_animated.gif"
        mapslider.classList.remove("Translate5")
        transitionfunction()
        mapslider.classList.add("Translate6")
        datetxt.innerHTML = "2020-2023"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt5.style.display = "none"
        txt6.style.display = "block"
    }
    console.log(position)
})

leftbutton.addEventListener("click", function(){
    console.log("go left")
    position = position - 1
    if(position <= 0){
        position = 0
    }
    if(position == 6){
        avatar.src = "../Images/avatar_animated_reversed.gif"
        mapslider.classList.remove("Translate5")
        transitionfunction()
        mapslider.classList.add("Translate6")
        datetxt.innerHTML = "2020-2023"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt5.style.display = "none"
        txt6.style.display = "block"
    }
    else if(position == 5){
        avatar.src = "../Images/avatar_animated_reversed.gif"
        mapslider.classList.remove("Translate6")
        transitionfunction()
        mapslider.classList.add("Translate5")
        datetxt.innerHTML = "2020"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt6.style.display = "none"
        txt5.style.display = "block"
    }
    else if(position == 4){
        avatar.src = "../Images/avatar_animated_reversed.gif"
        mapslider.classList.remove("Translate5")
        transitionfunction()
        mapslider.classList.add("Translate4")
        datetxt.innerHTML = "2019-2020"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt5.style.display = "none"
        txt4.style.display = "block"
    }
    else if(position == 3){
        avatar.src = "../Images/avatar_animated_reversed.gif"
        mapslider.classList.remove("Translate4")
        transitionfunction()
        mapslider.classList.add("Translate3")
        datetxt.innerHTML = "2018-2019"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt4.style.display = "none"
        txt3.style.display = "block"
    }
    else if(position == 2){
        avatar.src = "../Images/avatar_animated_reversed.gif"
        mapslider.classList.remove("Translate3")
        transitionfunction()
        mapslider.classList.add("Translate2")
        datetxt.innerHTML = "2016-2018"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt3.style.display = "none"
        txt2.style.display = "block"
    }
    else if(position == 1){
        avatar.src = "../Images/avatar_animated_reversed.gif"
        mapslider.classList.remove("Translate2")
        transitionfunction()
        mapslider.classList.add("Translate1")
        datetxt.innerHTML = "2015-2018"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt2.style.display = "none"
        txt1.style.display = "block"
    }
    else if(position == 0){
        avatar.src = "../Images/avatar_animated_reversed.gif"
        mapslider.classList.remove("Translate1")
        transitionfunction()
        mapslider.classList.add("Translate0")
        datetxt.innerHTML = "2015"
        setTimeout(() => {  avatar.src = "../Images/avatar_lookup.png" }, 3000)
        txt1.style.display = "none"
        txt0.style.display = "block"
    }
    console.log(position)
})

var txt1 = document.querySelector("#txt1")
var txt2 = document.querySelector("#txt2")
var txt3 = document.querySelector("#txt3")
var txt4 = document.querySelector("#txt4")
var txt5 = document.querySelector("#txt5")
var txt6 = document.querySelector("#txt6")