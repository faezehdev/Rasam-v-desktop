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
// let pFooter = document.querySelectorAll('footer .Address p')
// pFooter.forEach(p=>{
//     if(p.innerHTML == ''){
//         p.style.display = 'none'
//     }
// })