let ProIMG =document.querySelector('.Gallery-Container img')
let FullScreenBtn = document.querySelector('.fullScreen')
let ZoomBtn = document.querySelector('.zoom')
let DownloadBtn = document.querySelector('.download')
let url = window.location.href 
FullScreenBtn.addEventListener('click',()=>{
    fullscreen()
})
DownloadBtn.addEventListener('click',()=>{
    downloadIMG()
})

 //fullscreen image
     // zoom
      function fullscreen(){
      //fullscreen image
      let fullIMG =ProIMG
      let imgSRC = fullIMG.getAttribute('src')
      window.open(imgSRC);
      }
      function downloadIMG(){
      let fullIMG =ProIMG
      let imgSRC = fullIMG.getAttribute('src')
      DownloadBtn.setAttribute('href',`${url}${imgSRC}`)
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
// btns.forEach(btn=>{         

//    btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     btn.classList.remove('active');
//     var target = $(e.currentTarget).attr('href');
//     window.scrollTo(`${target}`,{offset:-110})
  
//   });
//   })

  window.addEventListener('scroll',(args)=>{
    let scrTop = window.pageYOffset
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
    //  console.log( document.querySelector(`.sec#${id} `));
    //  console.log(id);

      })
    }
  })
    if (scrTop > topHeight) {

    }
  })
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
      on:{
        init(e){
          console.log('iniit');
          
          // let link = e.slides[GallerySlider.activeIndex].querySelector('.ToolsContainer').getAttribute('data-link')
          let slidesLength = e.slides.length
          console.log(e.slides.length);
          let linkdinIMG = document.querySelector('.swiper-gallery .swiper-slide-active .linkdin a')
          let whatsappIMG = document.querySelector('.swiper-gallery .swiper-slide-active .whatsapp a')
          let instagramIMG = document.querySelector('.swiper-gallery .swiper-slide-active .instagram a')
          let aparatIMG = document.querySelector('.swiper-gallery .swiper-slide-active .aparat a')
          let pinterestIMG = document.querySelector('.swiper-gallery .swiper-slide-active .pinterest a')
          let IMG
          for(let i = 0 ; i< slidesLength ; i++){
            linkdinIMG = e.slides[i].querySelector('.linkdin a')
            whatsappIMG = e.slides[i].querySelector('.whatsapp a')
            instagramIMG = e.slides[i].querySelector('.instagram a')
            pinterestIMG = e.slides[i].querySelector('.pinterest a')
            IMG = e.slides[i].querySelector('img').getAttribute('src')
            linkdinIMG.setAttribute('href',`https://www.linkedin.com/shareArticle?mini=true&summary=${IMG}`)
            whatsappIMG.setAttribute('href',`https://api.whatsapp.com/send?text=${url}/${IMG}`)
            instagramIMG.setAttribute('href',`https://www.instagram.com/?url=${url}/${IMG}`)
            pinterestIMG.setAttribute('href',`http://pinterest.com/pinthis?url=${IMG}`)
          }
        
          
        },
      }
   
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
let FullScreenBtn2 = document.querySelectorAll('.Section-2 .fullScreen')
let DownloadBtn2 = document.querySelectorAll('.Section-2 .download')
FullScreenBtn2.forEach(f=>{
  f.addEventListener('click',(e)=>{
    //fullscreen image
    GIMG =e.currentTarget.parentElement.parentElement.children[0].children[0].children[0].children[1]
     let fullIMG =GIMG
    let imgSRC = fullIMG.getAttribute('src')
    window.open(imgSRC);
    console.log(fullIMG);
    
   
    
})
})
DownloadBtn2.forEach(d=>{
  d.addEventListener('click',(e)=>{
    GIMG =e.currentTarget.parentElement.parentElement.children[0].children[0].children[0].children[1]
    console.log(GIMG);
    
    let fullIMG =GIMG
    let imgSRC = fullIMG.getAttribute('src')
    d.setAttribute('href',`${imgSRC}`)
})
})

let shares = document.querySelectorAll('.Section-2 .Share')
shares.forEach(a=>{
  a.addEventListener('click',(e)=>{
  e.currentTarget.children[1].classList.toggle('Open')
  })
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

  // share product
  let linkdin = document.querySelector('.Section-0 .linkdin a')
  let whatsapp = document.querySelector('.Section-0 .whatsapp a')
  let instagram = document.querySelector('.Section-0 .instagram a')
  let aparat = document.querySelector('.Section-0 .aparat a')
  let pinterest = document.querySelector('.Section-0 .pinterest a')
  let proLink = document.querySelector('.SocialBox').getAttribute('data-link')
 
  linkdin.setAttribute('href',`https://www.linkedin.com/shareArticle?mini=true&summary=${proLink}`)
  whatsapp.setAttribute('href',`https://api.whatsapp.com/send?text=${url}/${proLink}`)
  instagram.setAttribute('href',`https://www.instagram.com/?url=${url}/${proLink}`)
  pinterest.setAttribute('href',`http://pinterest.com/pinthis?url=${proLink}`)


 