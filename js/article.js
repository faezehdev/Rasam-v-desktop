  //Gallery slider
  let GallerySlider = new Swiper('.Section-5 .swiper-gallery',{
    speed: 1000,
    slidesPerView:1,
    spaceBetween: 30,
    grabCursor:true,
    pagination: {
        el: '.Section-5 .swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
          },
      },
      navigation: {
        nextEl: ".Section-5 .swiper-button-next",
        prevEl: ".Section-5 .swiper-button-prev",
      },
   
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
  
  // share article
  let url = window.location.href 
  let linkdin = document.querySelector('.ShareBox .linkdin a')
  let whatsapp = document.querySelector('.ShareBox .whatsapp a')
  let instagram = document.querySelector('.ShareBox .instagram a')
  let aparat = document.querySelector('.ShareBox .aparat a')
  let pinterest = document.querySelector('.ShareBox .pinterest a')
  let ArLink = document.querySelector('.ShareBox').getAttribute('data-link')
 
  linkdin.setAttribute('href',`https://www.linkedin.com/shareArticle?mini=true&summary=${ArLink}`)
  whatsapp.setAttribute('href',`https://api.whatsapp.com/send?text=${url}/${ArLink}`)
  instagram.setAttribute('href',`https://www.instagram.com/?url=${url}/${ArLink}`)
  pinterest.setAttribute('href',`http://pinterest.com/pinthis?url=${ArLink}`)
