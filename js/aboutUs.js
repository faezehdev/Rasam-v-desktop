 //Gallery slider
 let GallerySlider = new Swiper('.Section-6 .swiper-gallery',{
    speed: 1000,
    slidesPerView:5,
    spaceBetween: 30,
    grabCursor:true,
    centeredSlides: true,
    loop:true,
    pagination: {
        el: '.Section-6 .swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
          },
      },
 
  })