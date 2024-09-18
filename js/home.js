

$(".home").imagesLoaded(function () {

  let parallaxLeft = gsap.timeline();
parallaxLeft.to(".projCatContainer", {
  x: "30vw",
});
ScrollTrigger.create({
  animation: parallaxLeft,
  trigger: ".scrollContainer",
  start: "top 50%",
  end: "bottom -200vw",
  scrub: 1,
});
  setTimeout(() => {
    const CategoriesSlider = new Swiper(".CategoriesSlider", {
      // Optional parameters
      freeMode: true,
      spaceBetween: 64,
      slidesPerView: "auto",
      // And if we need scrollbar
      scrollbar: {
        el: ".CategoriesScrollbar",
      },
    });

    const clientSldier1 = new Swiper(".clientSldier", {
      spaceBetween: 64,
      slidesPerView: "auto",
      loop: true,
      speed: 7000,
      freeMode: true,
      centeredSlides: true,
      autoplay: {
        delay: 0,
        //  pauseOnMouseEnter:true,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".clientpagination",
        clickable: true,
      },
    });

    // $(".clientSldier").hover(
    //   function () {
    //     // clientSldier1
    //   for (let i = 0; i < clientSldier1.length; i++) {
    //     const element = clientSldier1[i];
        
    //       element.autoplay.stop();
          
    //   }
    //   },
    //   function () {
    //     for (let i = 0; i < clientSldier1.length; i++) {
    //         const element = clientSldier1[i];
            
    //           element.autoplay.start();
              
    //       }
    //     // clientSldier1.autoplay.start();
    //   }
    // );
  }, 500);
});


