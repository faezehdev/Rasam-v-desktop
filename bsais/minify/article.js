let GallerySlider=new Swiper(".Section-5 .swiper-gallery",{speed:1e3,slidesPerView:1,spaceBetween:30,grabCursor:!0,pagination:{el:".Section-5 .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"><span class="line"></span></span>'}},navigation:{nextEl:".Section-5 .swiper-button-next",prevEl:".Section-5 .swiper-button-prev"}}),RelatedProduct=new Swiper(".swiper-products",{speed:1e3,slidesPerView:3,spaceBetween:30,grabCursor:!0}),RelatedProject=new Swiper(".swiper-projects",{speed:1e3,slidesPerView:3,spaceBetween:30,grabCursor:!0}),url=window.location.href,linkdin=document.querySelector(".ShareBox .linkdin a"),whatsapp=document.querySelector(".ShareBox .whatsapp a"),instagram=document.querySelector(".ShareBox .instagram a"),aparat=document.querySelector(".ShareBox .aparat a"),pinterest=document.querySelector(".ShareBox .pinterest a"),ArLink=document.querySelector(".ShareBox").getAttribute("data-link");linkdin.setAttribute("href",`https://www.linkedin.com/shareArticle?mini=true&summary=${ArLink}`),whatsapp.setAttribute("href",`https://api.whatsapp.com/send?text=${url}/${ArLink}`),instagram.setAttribute("href",`https://www.instagram.com/?url=${url}/${ArLink}`),pinterest.setAttribute("href",`http://pinterest.com/pinthis?url=${ArLink}`);