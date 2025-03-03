const MENU=document.querySelector('.menu-div')
const menu = document.querySelector(".fa-bars")
const close = document.querySelector(".fa-xmark")
MENU.style.display='none'
menu.addEventListener("click", ()=>{
MENU.style.display='block'
menu.style.display='none';
close.style.display='block';
})
close.addEventListener("click", ()=>{
    close.style.display='none';
    menu.style.display='block';
    })