$(document).ready(function(){
   $('#header_menu>li>a,#drop_box').hover(function(){
       $('#drop_box').stop().slideToggle(600);
   });
   $('.p>a>.icon,#drop_box').click(function(){
    $('#drop_box').stop().slideToggle(600);
   });
});

setInterval(function(){
    $('.slide').animate({
        marginTop : '-30px'
    },'slow', function(){
        $('.slide li:first-child').appendTo('.slide');
        $('.slide').css('margin-top','0');
        return false;
    })
},3000);










