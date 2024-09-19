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