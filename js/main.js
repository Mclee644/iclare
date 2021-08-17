const zoom =document.getElementById('zoom');
const img = document.querySelector('#zoom img');

//carousel declarations 
const carousel =document.getElementById('carousel');
const imgs = document.querySelectorAll('#carousel img')
//xxxx carousel dec
//header stuff
const header= document.getElementById('header');
const toggle= document.getElementById('toggle');
const navBar= document.getElementById('navBar');

//header stuff xxxxxxxxxxxxxxxxx
//zoom effect
zoom.addEventListener('mousemove',(e)=>{
    const x=e.clientX-e.target.offsetLeft;
    const y=e.clientY-e.target.offsetTop;
console.log(`${x}px ${y}px`)
    img.style.transformOrigin=`${x}px ${y}px`;
    img.style.transform='scale(2)';

});


zoom.addEventListener('mouseleave',()=>{
    img.style.transformOrigin='center center'
    img.style.transform='scale(1)'
})
//xxx zoom effect
//carousel 
i=0;

function caro(){
    i++;
    if(i>imgs.length-1){
        i=0;
    }
    carousel.style.transform=`translateX(${-i*350}px)`;
}
setInterval(caro,5000);
//header stuffs 
document.addEventListener('click', (e)=>{
    if(e.target.id !='header'&& e.target.id !='toggle' && e.target.id != 'navbar'){
        toggle.classList.remove('active');
       navBar.classList.remove('active');
    }
})
toggle.onclick= function(){
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
}
//xxxxxxxxxxxxxxxxxxxxxxxxxheader stuffs 