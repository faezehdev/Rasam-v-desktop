let gridItems = document.querySelectorAll('.GridItem')
let Banner = document.querySelector('.BannerImg img')
gridItems.forEach(grid=>{
    grid.addEventListener('mouseenter',(event)=>{
    for(let i =0 ; i< gridItems.length ; i++){
      gridItems[i].classList.remove('show')
      let img = grid.getAttribute('data-IMG')
      Banner.setAttribute('src',img)
    }
    console.log(event.currentTarget);
    
    event.currentTarget.classList.toggle('show')
    })
    grid.addEventListener('mouseleave',(event)=>{
        for(let i =0 ; i< gridItems.length ; i++){
          gridItems[i].classList.remove('show')
          let img = grid.getAttribute('data-IMG')
          Banner.setAttribute('src',img)
        }
        console.log(event.currentTarget);
        
        event.currentTarget.classList.toggle('show')
        })
})