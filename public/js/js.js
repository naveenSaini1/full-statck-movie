// imgae slider 
let imageSlider=document.getElementsByClassName('slider-sec-inside')[0];
let count = 0;
function imageSliderFun() {
    count += 155;
    if (imageSlider.scrollWidth < count) {
        count = 0;
    }
    else {
        imageSlider.scrollTo({
            top: 0,
            left: count,
            behavior: 'smooth'

        });3
    }
}
setInterval(imageSliderFun, 1000);

// hem icon medai 
let hem=document.getElementsByClassName('hem')[0];
let navHeight=document.getElementsByClassName('nav-down')[0];
hem.addEventListener('click',(e)=>{
    if(navHeight.style.height=='3rem'){
        navHeight.style.height='23rem';
        
    }
    else{
        navHeight.style.height='3rem';
    }
})


function call(){
    fetch('https://api.countapi.xyz/update/homes/nmovie/?amount=1')
    .then(()=>{

    }).
    catch((e)=>{

    })
}
call();