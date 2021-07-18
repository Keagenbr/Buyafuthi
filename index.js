// remove and add nav on scroll

const body = document.body;

let lastScroll = 0;

window.addEventListener('scroll', () => {

    const currntScroll = window.pageYOffset;

    if(currntScroll <= 0){
        body.classList.remove("scroll-up")
    }

    if(currntScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if(currntScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.add("scroll-up")
        body.classList.remove("scroll-down")
    }

    lastScroll = currntScroll;

})

//add and remove "to top" button

const topBtn = document.getElementById('topBtn');

// console.log(topBtn);

    //scroll down 20px to show btn

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn.classList.add("topBtn-add");
    }else{
        topBtn.classList.remove("topBtn-add");
    }
}

function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}