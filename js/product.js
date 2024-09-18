let ProIMG =document.querySelector('.Gallery-Container img')
let FullScreenBtn = document.querySelector('.fullScreen')
let ZoomBtn = document.querySelector('.zoom')
let DownloadBtn = document.querySelector('.download')

FullScreenBtn.addEventListener('click',()=>{
    fullscreen()
})
DownloadBtn.addEventListener('click',()=>{
    downloadIMG()
})
ZoomBtn.addEventListener('click',()=>{
    zoom()
})
 //fullscreen image
     // zoom
     function zoom(){
        let currWidth = ProIMG.clientWidth;
        let currHeight = ProIMG.clientHeight;
        ProIMG.style.width = (currWidth + 100) + "px";
        ProIMG.style.height = (currHeight + 100) + "px";
      }
      function zoomout(){
        let currWidth = ProIMG.clientWidth;
        let currHeight = ProIMG.clientHeight; 
        ProIMG.style.width = (currWidth - 100) + "px";
        ProIMG.style.height = (currHeight -100) + "px";
        console.log('naturalwidth',ProIMG.naturalWidth);
        console.log('width',ProIMG.style.width);
  
        if(ProIMG.style.width < ProIMG.naturalWidth+'px'){
            ProIMG.style.width = ProIMG.naturalWidth+'px' 
            ProIMG.style.height = ProIMG.naturalHeight+'px' 
        }
      }
      function fullscreen(){
      //fullscreen image
      let fullIMG =ProIMG
      let imgSRC = fullIMG.getAttribute('src')
      window.open(imgSRC);
      }
      function downloadIMG(){
      let fullIMG =ProIMG
      let imgSRC = fullIMG.getAttribute('src')
      DownloadBtn2.setAttribute('href',`http://oph110.undertest.ir${imgSRC}`)
      }
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: '.FixedNav',
        start: 'top 12%',
        endTrigger: ".contentScroll",
        end: "bottom top",
        pin: true,
        pinSpacing:false,
      })



let btns = document.querySelectorAll('.FixedNav a');
let btnLink= document.querySelectorAll('.FixedNav a');
let sections = document.querySelectorAll('.sec')
btns.forEach(btn=>{         

   btn.addEventListener('click',(e)=>{
    e.preventDefault();
    btn.classList.remove('active');
    var target = $(e.currentTarget).attr('href');
    lenis.scrollTo(`${target}`,{offset:-110})
  console.log(target);
  
  });
  })
      lenis.on('scroll', (args) => {
        let scrTop = args.scroll
        let secTop = document.querySelector('#Section-0')
        let topHeight = secTop.offsetHeight
        sections.forEach(sec =>{          
          let top = scrTop;
          let offset = sec.offsetTop-110;
          let height= sec.offsetHeight;
          let id =sec.getAttribute('id')
          if(top>= offset && top < offset + height){
          btns.forEach(btn=>{         
          btn.classList.remove('active');
          if(document.querySelector('.FixedNav a[href*='+id + ']') == null){
            return;
          }
          let parent = document.querySelector('.FixedNav a[href*='+id + ']')
          parent.classList.add('active')
         document.querySelector(`.sec#${id} `).classList.add('active')
         console.log( document.querySelector(`.sec#${id} `));
         console.log(id);

          })
        }
      })
        if (scrTop > topHeight) {
  
        }
  },)

  //Gallery slider
let GallerySlider = new Swiper('.swiper-gallery',{
    speed: 1000,
    slidesPerView:1,
    spaceBetween: 30,
    grabCursor:true,
    pagination: {
        el: '.Section-2 .Gallery-Container .swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
          },
      },
      navigation: {
        nextEl: ".Section-2 .Gallery-Container .swiper-button-next",
        prevEl: ".Section-2 .Gallery-Container .swiper-button-prev",
      },
   
  })

//   Zoom Gallery
let gallerySlides = document.querySelectorAll('.swiper-gallery .swiper-slide')

let mainIMG
let mainResult
let is = true
for(let g=0 ; g<gallerySlides.length;g++){
    gallerySlides[g].setAttribute('data-iss',false)
}
gallerySlides.forEach(slide=>{
  
    slide.addEventListener('mouseenter',(e)=>{
    let IsOnce =e.currentTarget.getAttribute('data-iss')
    console.log('elem',e.currentTarget);  
    mainIMG = e.currentTarget.querySelector('.MainImg')
    mainResult = e.currentTarget.querySelector('.img-zoom-result')
    console.log(mainIMG);
    console.log(mainResult);
    slide.querySelector('.img').addEventListener('mouseenter',(e)=>{
        mainResult.style.opacity =1;
    })
    var img, lens, result, cx, cy;
    img = mainIMG;
    result = mainResult;
    if(IsOnce != "true"){
        console.log('enterrrr',IsOnce);
        e.currentTarget.setAttribute('data-iss',true)
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        /*insert lens:*/
        img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    console.log("result.offsetWidth  >>>>>", result.offsetWidth ,"lens.offsetWidth>>>>>>>>>>>",lens.offsetWidth);
    cx = 300 / lens.offsetWidth;
    console.log("result.offsetHeight>>>>>",result.offsetHeight ,"llens.offsetHeighth>>>>>>>>>>>",lens.offsetHeight);
    cy = 300 / lens.offsetHeight;
        /*set background properties for the result DIV:*/
        result.style.backgroundImage = "url('" + img.srcset + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        /*and also for touch screens:*/
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
       // img.addEventListener("mouseenter", bigImg);  
    }
    else{
     return
    } 
    function bigImg(x) {
  
  
      console.log("onmouseenter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  }
  
  function normalImg(x) {
  // result.style.display ="none";
       console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>onmousLEAVE");
  }
  
    function moveLens(e) {
    
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
    // console.log("x" , x , "and Y " , y); 
      /*prevent the lens from being positioned outside the image:*/
      
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;  } //else{img.addEventListener("mouseenter", bigImg);  }
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight; img.addEventListener("mouseleave",  normalImg);}//else{img.addEventListener("mouseenter", bigImg);  }
      if (y < 0) {y = 0;}
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      //console.log("------------------A  left" ,  a ); 
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }





    })
    slide.addEventListener('mouseleave',(e)=>{
        mainResult = e.currentTarget.querySelector('.img-zoom-result')
    })
    slide.querySelector('.img').addEventListener('mouseleave',(e)=>{
        mainResult.style.opacity =0;

    })

})
let GIMG 
let FullScreenBtn2 = document.querySelector('.Section-2 .fullScreen')
let ZoomBtn2 = document.querySelector('.Section-2 .zoom')
let DownloadBtn2 = document.querySelector('.Section-2 .download')

FullScreenBtn2.addEventListener('click',()=>{
    //fullscreen image
    GIMG =document.querySelector('.Section-2 .swiper-slide-active img')
     let fullIMG =GIMG
    let imgSRC = fullIMG.getAttribute('src')
    window.open(imgSRC);
    console.log(GIMG);
    
})
DownloadBtn2.addEventListener('click',()=>{
    GIMG =document.querySelector('.Section-2 .swiper-slide-active img')
    let fullIMG =GIMG
    let imgSRC = fullIMG.getAttribute('src')
    DownloadBtn2.setAttribute('href',`http://oph110.undertest.ir${imgSRC}`)
})
ZoomBtn2.addEventListener('click',()=>{
    GIMG =document.querySelector('.Section-2 .swiper-slide-active img')
    let currWidth = GIMG.clientWidth;
        let currHeight = GIMG.clientHeight;
        GIMG.style.width = (currWidth + 100) + "px";
        GIMG.style.height = (currHeight + 100) + "px";
})
document.querySelector('.Section-2 .Share').addEventListener('click',()=>{
    document.querySelector('.Section-2 .ShareBox').classList.toggle('Open')
})

let RelatedProduct = new Swiper('.swiper-products',{
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
  let RelatedBlogs = new Swiper('.swiper-Blogs',{
    speed: 1000,
    slidesPerView:3,
    spaceBetween: 30,
    grabCursor:true,
  
  })