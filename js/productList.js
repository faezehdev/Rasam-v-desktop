// FILTER DROPDOWNS
let filterMenu = document.querySelector('.Filter-S .Menus')
let navBtns = document.querySelectorAll('.Filter-S .Menus .Menu-Item .toggle')
let subToggles = document.querySelectorAll('.Filter-S .Menus .subtoggle')
console.log(subToggles);

navBtns[0].setAttribute('IS-OP',true)
navBtns[0].children[1].classList.add('Open')
for(let i=0 ; i<navBtns.length ; i++){
  navBtns[i].setAttribute('IS-OP',false)
}
for(let j=0 ; j<subToggles.length ; j++){
  subToggles[j].setAttribute('IS-OP',false)

}
let collaps = document.querySelectorAll('.Menu-Item .parent')
collaps.forEach(p=>[
    p.classList.add('collapse')
])
navBtns.forEach(nav=>{
    let IsOpen = false;
  nav.addEventListener('click',(e)=>{
    IsOpen =Boolean(`${e.currentTarget.getAttribute('IS-OP')}`) 
  //  console.log(e.currentTarget.getAttribute('IS-OP'));
  if(e.currentTarget.getAttribute('IS-OP') == 'false'){

    // console.log(e.currentTarget.parentElement.children[0].children[1]);
    e.currentTarget.parentElement.children[1].children[0].classList.add('Open')
    e.currentTarget.parentElement.querySelector('svg.in').classList.add('hide')
    e.currentTarget.parentElement.querySelector('svg.out').classList.add('show')
    IsOpen =false;
    e.currentTarget.setAttribute('IS-OP',true)
  }
  else{
    console.log( e.currentTarget.parentElement.querySelector('svg.in'));
    e.currentTarget.parentElement.children[1].children[0].classList.remove('Open')
    e.currentTarget.parentElement.querySelector('svg.in').classList.remove('hide')
    e.currentTarget.parentElement.querySelector('svg.out').classList.remove('show')
    e.currentTarget.setAttribute('IS-OP',false)
    IsOpen =true;
  }
      })
  })
  subToggles.forEach(nav=>{
    let IsOpen = false;
  nav.addEventListener('click',(e)=>{
    IsOpen =Boolean(`${e.currentTarget.getAttribute('IS-OP')}`) 
  //  console.log(e.currentTarget.getAttribute('IS-OP'));
  if(e.currentTarget.getAttribute('IS-OP') == 'false'){
    e.currentTarget.nextElementSibling.children[0].classList.add('Open')
    e.currentTarget.querySelector('svg.in').classList.add('hide')
    e.currentTarget.querySelector('svg.out').classList.add('show')
    IsOpen =false;
    e.currentTarget.setAttribute('IS-OP',true)
  }
  else{
        console.log( e.currentTarget.querySelector('svg.in'));
    e.currentTarget.nextElementSibling.children[0].classList.remove('Open')
    e.currentTarget.querySelector('svg.in').classList.remove('hide')
    e.currentTarget.querySelector('svg.out').classList.remove('show')
    e.currentTarget.setAttribute('IS-OP',false)
    IsOpen =true;
  }
      })
  })


  let btnF = document.querySelectorAll('.Bottom-S .Drop-Item')
  let catid
  btnF.forEach(b=>{
    b.addEventListener('click',(e)=>{
    catid = e.currentTarget.getAttribute('data-catid')
    var url = `/load-Product.inc?catid=${catid}`;
    $(".ProductLists").load(url);
    })
  })