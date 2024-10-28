$(function(){
    var current = window.location.search;
   if( current.includes("pageno")){
    $('.Paginations a').each(function(){
        var $this = $(this);
        let  str = current.split("pageno=")[1];
        let result = str.substr(0,1);
        if($this.attr('id') == result){
            $this.addClass('active');
            $this.siblings().removeClass( 'active' );
        }      
    })
}
else{
    $('#1').addClass('active');
}
})
var elements = document.querySelectorAll('div.articleBox');
var gallery = document.querySelector('.ArticleLists')

var groupSize = 3;
var groupCount = Math.ceil(elements.length / groupSize);

for (var i = 0; i < groupCount; i++) {
var startIndex = i * groupSize;
var endIndex = startIndex + groupSize;

var groupElements = Array.from(elements).slice(startIndex, endIndex);

var groupDiv = document.createElement('div');
groupDiv.className = 'Row';

groupElements.forEach(function (element) {
groupDiv.appendChild(element);

});

gallery.appendChild(groupDiv);
}
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0){
      document.querySelector('header').classList.add('GoBottom')
    }
  else{
    document.querySelector('header').classList.remove('GoBottom')
  }
  })