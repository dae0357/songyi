$(document).ready(function(){
    $('.left_menu>li>a,.drop_box').hover(function(){
        $('.drop_box').stop().slideToggle(600);
    });

    $('.click').click(function(){
        $('.pop').show();
    
    });
    $('.pop button').click(function(){
        $('.pop').hide();
    });
});
