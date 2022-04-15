const first=document.getElementsByClassName('admin-new-data')[0];
const second=document.getElementsByClassName('admin-all-post')[0];
const third=document.getElementsByClassName('admin-messages')[0];

const btn1=document.getElementsByClassName('new-data')[0];
const btn2=document.getElementsByClassName('all-post')[0];
const btn3=document.getElementsByClassName('messages')[0];

btn1.addEventListener('click',(e)=>{
    second.style.display='none';
        third.style.display='none';
        first.style.display='block';
        btn1.style.backgroundColor='black'
        btn2.style.backgroundColor='purple'
        btn3.style.backgroundColor='purple'

        
})

btn2.addEventListener('click',(e)=>{
    second.style.display='block';
        third.style.display='none';
        first.style.display='none';
        btn1.style.backgroundColor='purple'
        btn2.style.backgroundColor='black'
        btn3.style.backgroundColor='purple'

})

btn3.addEventListener('click',(e)=>{
    second.style.display='none';
        third.style.display='block';
        first.style.display='none';
        btn1.style.backgroundColor='purple'
        btn2.style.backgroundColor='purple'
        btn3.style.backgroundColor='black'

})

let views=document.getElementById('views');
let viewsi=document.getElementById('viewsi');

function call(){
    fetch('https://api.countapi.xyz/update/homes/nmovie/?amount=1')
    .then((res)=>{
     return res.json()
    }).
    then((res)=>{
        views.innerHTML=res.value;
    })
}
call();

function calli(){
    fetch('https://api.countapi.xyz/update/home/download/?amount=1')
    .then((res)=>{
     return res.json()
    }).
    then((res)=>{
        viewsi.innerHTML=res.value;
    })
}
calli();