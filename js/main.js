$(function() {
$('.slider__inner, .description__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn  slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn  slick-prev"></button>',
    infinite:false,
    
    
   
    
    
    

});

$('.news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn  slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn  slick-prev"></button>',
    infinite:true,
    autoplay:true,
    autoplaySpeed: 5000,
    speed:500 

});



$('.blog-news-slider__inner').slick({
   dots: true,
   slidesToShow: 4,
   slidesToScroll: 4,
   nextArrow: false,
   prevArrow: false
});



$('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
});

});