var winScroll = 0;
$(window).scroll(function(){
    winScroll = $(window).scrollTop();
    if(winScroll > 320) {
        $('.Page_Contents_Image1').css({
            'opacity':1,
            'transition':'1s'
        });
    }
    if(winScroll > 820) {
        $('.Page_Contents_Image2').css({
            'opacity':1,
            'transition':'1s'
        });
    }
    if(winScroll > 1320) {
        $('.Page_Contents_Image3').css({
            'opacity':1,
            'transition':'1s'
        });
    }
    if(winScroll > 1820) {
        $('.Page_Contents_Image4').css({
            'opacity':1,
            'transition':'1s'
        });
    }
});

var winH = window.innerHeight;

$('.MainVis_Wrap').css({
    'height':winH
})



var winW = window.innerWidth;

if(winW > 500) {
    $('document').ready(function() {
    	var options = { videoId: 'qD_jkq19lwE'};
    	$('.Movie').tubular(options);
    });
} else {
    $('.MainVis_Wrap').html('<h1 class="MainVis_Title">Kimura Tomoki</h1>');
}


// youtube埋め込み
// $('document').ready(function() {
// 	var options = { videoId: 'qD_jkq19lwE'};
// 	$('.Movie').tubular(options);
// });
