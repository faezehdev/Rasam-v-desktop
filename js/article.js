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