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


var slideWidth= document.querySelector('.slider').clientWidth
var slideLength=document.querySelectorAll('.slider li').length
var mySlideWidth=slideWidth*slideLength
var slideUl=document.querySelector('.slider ul')

slideUl.style.width=mySlideWidth+'px'
var next= document.querySelector('.slider .next')
var prev= document.querySelector('.slider .prev')
var c=0

next.onclick=function(){
    clearInterval(stopInterval)
    siruz()
    setInterval(() => {
        siruz()
    }, 5000);
}

function siruz(){
    c++;
    if(c==slideLength){
        c=0
    }
    slideUl.style.left= -c*(slideWidth) + 'px'
}

var stopInterval=setInterval(() => {
    siruz()
}, 6000);