$(function(){

//Aplicando menu com ScrollTop.

var link = $('nav li a');
var subir = $('.btn');

$(window).scroll(function(){
    var minhaposicao = $(this).scrollTop();
    if(minhaposicao >= 800){
        subir.fadeIn();
    }else{
        subir.fadeOut();
    }
});

link.on('click', function(){
    var seletor = $(this).attr('href');
    var posicao = $(seletor).offset().top;
    $('html, body').animate({scrollTop: posicao-100},1000);
});

subir.on('click', function(){
    $('html, body').animate({scrollTop: 0},500);
});

//Aplicando menu responsivo

    $('.mobile-menu').click(function(){
        $('.mobile-menu ul').slideToggle();
    });

});