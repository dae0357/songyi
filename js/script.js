// $(".menu li a").click(function(){
//     var id = $($(this).attr("href"));
//     var loca = id.offset().top;
//     console.log(loca);
//     $("html, body").animate({
//         scrollTop : loca
//     }, "slow");
// });

// defer

$('#top ul li a').click(function(){
    var id = $($(this).attr("href"));
        var loca = id.offset().top;
        console.log(loca);
        $("html, body").animate({
            scrollTop : loca
        }, "slow");


   
});

function showpop(){
    $('.pop').show();
}