const MENU=document.querySelector('.menu-div')
const menu = document.querySelector(".fa-bars")
const inner = document.querySelector(".menu-inner")
const close = document.querySelector(".fa-xmark")

menu.addEventListener('click',()=>{
    menu.classList.add('hidden')
    close.classList.remove('hidden')
    inner.classList.remove('hidden')
    inner.classList.add('flex')
    inner.classList.add('flex-col')

    
})
close.addEventListener('click',()=>{
    close.classList.add('hidden')
    inner.classList.add('hidden')
    menu.classList.remove('hidden')
})