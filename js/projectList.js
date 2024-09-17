let filterBtn = document.querySelectorAll(".filterBtn")
filterBtn[0].classList.add("activeFilterBtn")
filterBtn.forEach(element => {
    element.addEventListener("click" , function(params) {
        $(".filterBtn").removeClass("activeFilterBtn")
        element.classList.add("activeFilterBtn")
    })
});

$(document).ready(function () {
  $(".filterBtn").click(function (e) {
      var url4 = $(this).attr("data-project");
      $(".projectsList").load(url4);
  });
});




const lenis = new Lenis()
  
  
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)