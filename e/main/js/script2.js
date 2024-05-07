$(document).ready(function(){
    $('.left_menu>li>a,.drop_box').hover(function(){
        $('.drop_box').stop().slideToggle(600);
    });
});