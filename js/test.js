let images12 = document.querySelectorAll('.Section-0 .myimage')
let results12 = document.querySelectorAll('.Section-0 .myresult')
for(let i=0;i<images12.length;i++){
    imageZoom12(images12[i],results12[i]);
}

function imageZoom12(imgClass, resultClass) {
  var img, lens, result, cx, cy;
  img = imgClass;
  result = resultClass;
    document.querySelector('.Section-0 .img-zoom-container').addEventListener('mouseenter',()=>{
    result.style.opacity =1;
    document.querySelector('.Section-0 .img-zoom-lens').style.opacity =1;
})
document.querySelector('.Section-0 .img-zoom-container').addEventListener('mouseleave',()=>{
    result.style.opacity =0;
    document.querySelector('.Section-0 .img-zoom-lens').style.opacity =0;
})
  /*create lens:*/
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
  console.log('width',img.naturalWidth);
  console.log('height',img.naturalHeight);
  
  result.style.backgroundImage = "url('" + img.srcset + "')";
  result.style.backgroundSize = (508 * cx) + "px " + (334 * cy) + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens12);
  img.addEventListener("mousemove", moveLens12);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens12);
  img.addEventListener("touchmove", moveLens12);
 // img.addEventListener("mouseenter", bigImg);  
 
  
  
  function bigImg12(x) {


    console.log("onmouseenter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
}

function normalImg12(x) {
// result.style.display ="none";
     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>onmousLEAVE");
}


  
  function moveLens12(e) {
  
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos12(e);
    /*calculate the position of the lens:*/
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
  // console.log("x" , x , "and Y " , y); 
    /*prevent the lens from being positioned outside the image:*/
    
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;  } //else{img.addEventListener("mouseenter", bigImg);  }
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;
      console.log(img);
      
       img.addEventListener("mouseleave",  normalImg12);}//else{img.addEventListener("mouseenter", bigImg);  }
    if (y < 0) {y = 0;}
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos12(e) {
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
  
}

function hideme12(x) {
    // x.style.display = "none";
   
}
function showme12(x) {
    // x.style.display = "block";
   
}


