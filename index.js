let slideOne = document.querySelector('.slide1')
let slideImg = document.querySelector('.slide-img')
let slideInfo = document.querySelector('.slide-img-info')
let leftArrow = document.querySelector('.left-arrow')
let rightArrow = document.querySelector('.right-arrow')
let main = document.querySelector('main');
let hamburgerMenu = document.querySelector('.hamburger');
let navBar = document.querySelector('.navbar')
let ul = document.querySelector('.hamburg-menu')
let writeup = ["Develop Strategies for your business","Brand Your Business","Boost Your Social Accounts"]
let count = 0;



hamburgerMenu.addEventListener('click',()=>{
    ul.classList.toggle('block')
})




// setInterval(()=>{
//       next()
// },7000)
main.addEventListener('click',(e)=>{
    if(e.target.classList.contains('right-arrow')){
          next()
    } else if(e.target.classList.contains('left-arrow')){
        prev();
    }
})

function next(){
    count++;
    if(count >= writeup.length){
        count = 0;
        slideInfo.innerHTML = `<h2> ${writeup[count]}</h2>`
    }else{
        slideInfo.innerHTML = `<h2> ${writeup[count]}</h2>`
    }
}

function prev(){
    count--;
    if(count < 0){
        count = writeup.length -1;
        slideInfo.innerHTML = `<h2> ${writeup[count]}</h2>`
    }else{
        slideInfo.innerHTML = `<h2> ${writeup[count]}</h2>`
    }
}