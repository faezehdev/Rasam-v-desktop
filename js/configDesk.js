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
let searchIcon = document.querySelector('header .searchIconHeader')
let input = document.querySelector('.InputBox')
searchIcon.addEventListener('click',()=>{
    input.classList.toggle('OpenS')
    searchIcon.classList.toggle('OpenS')
    if(searchIcon.classList.contains('OpenS')){
        let inputt = document.querySelector('header input#search')
        console.log('val',inputt.value);
        if(inputt.value == ''){
            return
             }
           else{
               console.log('val',input.value);
               setTimeout(()=>{
              window.location.href = `/search.bc?q=${input.value}`
               },1000)}
    }
    else{
        let inputt = document.querySelector('header input#search')
        console.log('val',inputt.value);
        if(inputt.value == ''){
            return
             }
           else{
               console.log('val',inputt.value);
               setTimeout(()=>{
              window.location.href = `/search.bc?q=${inputt.value}`
               },1000)}
    }
})
let pro = document.querySelector('.innerPro')
let innerPro = document.querySelector('header .Innerr')
pro.addEventListener('mouseenter',()=>{
    innerPro.classList.add('show')
})
document.querySelector('header ul').addEventListener('mouseleave',()=>{
    innerPro.classList.remove('show')
})
let inputt = document.querySelector('header input#search')
inputt.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      if(inputt.value != ''){
        event.preventDefault();
      console.log('clicked');
  console.log('val',inputt );
  console.log('val',input.value);
    window.location.href = `/search.bc?q=${inputف.value}`
  setTimeout(() => {
   
  }, 1000);
      }
  
  
    }
  });