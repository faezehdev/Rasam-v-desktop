

       
// SEARCH
let searchIcon23 = document.querySelector('.Search-Container .searchIcon2')
searchIcon23.addEventListener('click',()=>{
  console.log('clicked');
  let input = document.querySelector('input#search2')
  if(input.value != ' ' || input.value != ''){
    console.log('val',input.value);
  var url = `/load.inc?q=${input.value}`;
  $(".loaded").load(url);
  setTimeout(()=>{
    let RelatedProduct = new Swiper('.swiper-products',{
      speed: 1000,
      slidesPerView:3,
      spaceBetween: 30,
      grabCursor:true,
    
    })
    let RelatedBlogs = new Swiper('.swiper-Blogs',{
      speed: 1000,
      slidesPerView:3,
      spaceBetween: 30,
      grabCursor:true,
    
    })
    let RelatedProject = new Swiper('.swiper-projects',{
      speed: 1000,
      slidesPerView:3,
      spaceBetween: 30,
      grabCursor:true,
    
    })
  },100)
  }

})
let RelatedProduct = new Swiper('.swiper-products',{
  speed: 1000,
  slidesPerView:3,
  spaceBetween: 30,
  grabCursor:true,

})
let RelatedBlogs = new Swiper('.swiper-Blogs',{
  speed: 1000,
  slidesPerView:3,
  spaceBetween: 30,
  grabCursor:true,

})
let RelatedProject = new Swiper('.swiper-projects',{
  speed: 1000,
  slidesPerView:3,
  spaceBetween: 30,
  grabCursor:true,

})