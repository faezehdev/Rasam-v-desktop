let OpBtn = document.querySelector('header .Toggles')
let ClBtn = document.querySelector('header .Close')
let Menu = document.querySelector('header')
let IS = false
ClBtn.addEventListener('click',()=>{
    if(!IS){
        Menu.classList.toggle('Open')
        gsap.to('header .Menu-link',{
        opacity:1,
        x:0,
        stagger:.3,
        })
        IS = true
    }
    else{
      
        IS = false
        gsap.to('header .Menu-link',{
            opacity:0,
            x:'100%',
            stagger:.3,
            })
            setTimeout(() => {
                Menu.classList.toggle('Open')
            }, 1000);
    }
})
OpBtn.addEventListener('click',()=>{
    
    if(!IS){
        Menu.classList.toggle('Open')
        gsap.to('header .Menu-link',{
        opacity:1,
        x:0,
        stagger:.3,
        })
        IS = true
    }
    else{
      
        IS = false
        gsap.to('header .Menu-link',{
            opacity:0,
            x:'100%',
            stagger:.3,
            })
            setTimeout(() => {
                Menu.classList.toggle('Open')
            }, 1000);
    }
})
// Enable Scroll

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
let header = document.querySelector('header')
lenis.on('scroll',(args)=>{
    console.log(args);
    if(args.scroll == 0){
        header.classList.remove('GoBottom')
    }
    else{
        header.classList.add('GoBottom')
    }
    
})
let searchIcon = document.querySelector('header .searchIcon')
let input = document.querySelector('.InputBox')
searchIcon.addEventListener('click',()=>{
    input.classList.toggle('OpenS')
    searchIcon.classList.toggle('OpenS')
})