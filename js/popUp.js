
let gallery = document.querySelectorAll('.swiper-slidep')
let popUp = document.querySelector('.Photo_PopUP')
let closeIcon = document.querySelector('.popClose')
let previewIMG = document.querySelector('.lightBox img')
let url = window.location.href 

  for(let i =0; i< gallery.length ; i++){
    let newIndex = i  //passing i value to new Index
    function start(){
    let selectedIMGurl = gallery[newIndex].querySelector('img') //get user clicked img url
      previewIMG.setAttribute('src',selectedIMGurl.getAttribute('src'))
    }
gallery[i].onclick=()=>{
  function preview(){
  let selectedIMGurl = gallery[newIndex].querySelector('img') //get user clicked img url
  previewIMG.setAttribute('src',selectedIMGurl.getAttribute('src'))
  }
  preview()
  popUp.classList.add('show')
  // previos next btn
  let nextBtn = document.querySelector('#next')
  let prevBtn =document.querySelector('#prev')
  nextBtn.onclick=()=>{
  newIndex++
  if(newIndex == gallery.length){
   nextBtn.classList.add('disabled')
   prevBtn.classList.remove('disabled')
  }
else{
preview() //call aboce function to update image
}
}
prevBtn.onclick=()=>{
newIndex--
if(newIndex < 0){
prevBtn.classList.add('disabled')
nextBtn.classList.remove('disabled')
}
else{
preview() //call aboce function to update image
}
 }
closeIcon.onclick = ()=>{
popUp.classList.remove('show')
}
 // zoom
function zoom(){
  let currWidth = document.querySelector('.lightBox img').clientWidth;
  let currHeight = document.querySelector('.lightBox img').clientHeight;
  document.querySelector('.lightBox img').style.width = (currWidth + 100) + "px";
  document.querySelector('.lightBox img').style.height = (currHeight + 100) + "px";
}
function zoomout(){
  let currWidth = document.querySelector('.lightBox img').clientWidth;
  let currHeight = document.querySelector('.lightBox img').clientHeight; 
  document.querySelector('.lightBox img').style.width = (currWidth - 100) + "px";
  document.querySelector('.lightBox img').style.height = (currHeight -100) + "px";
  console.log('naturalwidth',document.querySelector('.lightBox img').naturalWidth);
  console.log('width',document.querySelector('.lightBox img').style.width);

  if(document.querySelector('.lightBox img').style.width < document.querySelector('.lightBox img').naturalWidth+'px'){
    document.querySelector('.lightBox img').style.width = document.querySelector('.lightBox img').naturalWidth+'px' 
    document.querySelector('.lightBox img').style.height = document.querySelector('.lightBox img').naturalHeight+'px' 
  }
}
function fullscreen(){
//fullscreen image
let fullIMG =document.querySelector('.lightBox img')
let imgSRC = fullIMG.getAttribute('src')
window.open(imgSRC);
}
function downloadIMG(){
let fullIMG =document.querySelector('.lightBox img')
let imgSRC = fullIMG.getAttribute('src')
document.querySelector('.download a').setAttribute('href',`http://b121l115.undertest.ir/${imgSRC}`)
}
function ShareIMG(){
  let fullIMG =document.querySelector('.lightBox img')
  let imgSRC = fullIMG.getAttribute('src')
  let telegram = document.querySelector('.shareBox1 .tele')
  let whatsapp = document.querySelector('.shareBox1 .whatsapp')
  let insta = document.querySelector('.shareBox1 .insta')
  telegram.setAttribute('href',`https://t.me/share/url?http://b121l115.undertest.ir//${imgSRC}`)
  whatsapp.setAttribute('href',`https://api.whatsapp.com/send?text=http://b121l115.undertest.ir//${imgSRC}`)
  insta.setAttribute('href',`https://www.instagram.com/?url=http://b121l115.undertest.ir/${imgSRC}`)
}
let fUllBtn = document.querySelector('.fullscreen')
fUllBtn.addEventListener('click',()=>{
fullscreen()
})
let zoomBtn = document.querySelector('.zoomIn')
zoomBtn.addEventListener('click',()=>{ 
  zoom()
})
let zoomOutBtn = document.querySelector('.zoomout')
zoomOutBtn.addEventListener('click',()=>{ 
  zoomout()
})
 // download
let downBtn = document.querySelector('.download')
downBtn.addEventListener('click',()=>{
downloadIMG()
})


}}