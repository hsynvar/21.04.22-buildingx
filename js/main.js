// responsive header 
let navicon = document.querySelector(".navIcon")
let headmenu = document.querySelector(".menu")
navicon.addEventListener("click", function () {
    headmenu.classList.toggle("navActive")
})




// ALINMAYAN SLIDER 

// var slideWidth= document.querySelector('.constSlide').clientWidth
// var slideLength=document.querySelectorAll('.constSlide img').length
// // var mySlideWidth=slideWidth*slideLength
// var slideUl=document.querySelector('.constSlide .slideShow')

// // slideUl.style.width=mySlideWidth+'px'
// var next= document.querySelector('.slideShow .next')
// var prev= document.querySelector('.slideShow .prev')
// var c=0

// next.onclick=function(){
//     clearInterval(stopInterval)
//     sliding()
//     setInterval(() => {
//         sliding()
//     }, 5000);
// }

// function sliding(){
//     c++
//     if(c==slideLength){
//         c=0
//     }
//     slideUl.style.left= -c*(slideWidth) + 'px'
// }
// var stopInterval=setInterval(() => {
//     sliding()
// }, 3000);

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.querySelectorAll(".slideShow");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none"; 
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1} 
//   slides[slideIndex-1].style.display = "block"; 
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// ALINAN SLIDER 

var slideWidth = document.querySelector('.slider').clientWidth
var slideLength = document.querySelectorAll('.slider li').length
var mySlideWidth = slideWidth * slideLength
var slideUl = document.querySelector('.slider ul')

slideUl.style.width = mySlideWidth + 'px'
var next = document.querySelector('.slider .next')
var prev = document.querySelector('.slider .prev')
var c = 0

next.onclick = function () {
    clearInterval(stopInterval)
    slideConst()
    setInterval(() => {
        slideConst()
    }, 5000);
}

function slideConst() {
    c++;
    if (c == slideLength) {
        c = 0
    }
    slideUl.style.left = -c * (slideWidth) + 'px'
}

var stopInterval = setInterval(() => {
    slideConst()
}, 6000);