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

$('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
});

});