$(document).ready(function() {
  //Conferindo tamanho inicial da página
  if($(window).width() <= 1005){
    $('.menu-list').css('display','none');
  }

  $(document).scroll(function(){
    if($(document).scrollTop() > 150){
      $('.navContent').css('background-color','rgba(20,20,20,0.8)');
    }
    else if($(document).scrollTop() <= 150){
      $('.navContent').css('background-color', 'transparent');
    }
  });

  $("#inicial").click(function() {
    $('html, body').animate({
        scrollTop: $("#inicialNow").offset().top
    }, 1000);
  });
  $("#quemsomos").click(function() {
    $('html, body').animate({
        scrollTop: $("#whoweare").offset().top
    }, 1000);
  });
  $("#services").click(function() {
    $('html, body').animate({
        scrollTop: $("#servicesarea").offset().top
    }, 1000);
  });
  $("#clientes").click(function() {
    $('html, body').animate({
        scrollTop: $("#customers").offset().top
    }, 1000);
  });
  $("#talktous").click(function() {
    $('html, body').animate({
        scrollTop: $("#faleconosco").offset().top
    }, 1000);
  });

  $(window).resize(function(){
    if($(window).width() <= 1005){
      $('.menu-list').css('display','none');
    }
    else {
      $('.menu-list').css('display','inline-block');
    }
  });

  //Criando menu dropdown
  $('.menu-button').on('click',function(){
    if(!$('.menu-button').hasClass('ativo')){
      $('.dropdown').fadeIn();
      $('.dropdown').append("<li><a href='#' id='inicial'>Inicial</a></li> <br>");
      $('.dropdown').append("<li><a href='#' id='quemsomos'>Quem somos</a></li> <br>");
      $('.dropdown').append("<li><a href='#' id='services'>Serviços</a></li> <br>");
      $('.dropdown').append("<li><a href='#' id='clientes'>Clientes</a></li> <br>");
      $('.dropdown').append("<li><a href='#' id='talktous'>Fale conosco</a></li>");
      $('.menu-button').addClass('ativo');
    }
    else {
      $('.dropdown li').remove();
      $('.dropdown br').remove();
      $('.menu-button').removeClass('ativo');
      $('dropdown').fadeOut();
    }
  });

  //Ajustando menu dropdown
  $('.menu-button').on('click',function(){
    if(!$('.menu-button').hasClass('focado')){
      $('.menu-button').addClass('focado');
      $('.dropdown').css('display','block');
      $('.dropdown').css('width','100%');
    }
    else {
      $('.menu-button').removeClass('focado');
      $('.menu-button').css('width','25%');
      $('.dropdown').css('display','none');
      $('.dropdown').css('width','30%');
    }
  });
  //Slider Inicial
  $('.folderContent').slick({
    prevArrow: "<div style='font-size: 3em' class='leftArrow'><i class='fas fa-angle-left'></i></div>",
    nextArrow: "<div style='font-size: 3em' class='rightArrow'><i class='fas fa-angle-right'></i></div>",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          arrows: false,
          dots: true,
          customPaging: function(slider,i){
            return "<input type='radio' name='radioDot' class='my-dot'/>";
          }
        }
      }
    ]
  });
  //Slider dos Serviços
  $('.servicesShow').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 1,
          infinite: true,
          prevArrow: "<div style='font-size: 3em; color: #F27234' class='leftArrow'><i class='fas fa-angle-left'></i></div>",
          nextArrow: "<div style='font-size: 3em; color: #F27234' class='rightArrow'><i class='fas fa-angle-right'></i></div>",
        }
      }
    ]
  });

  //Slides dos clientes
  $('.customersShow').slick({
    prevArrow: "<div style='font-size: 3em; color: #456EB5' class='leftArrow'><i class='fas fa-angle-left'></i></div>",
    nextArrow: "<div style='font-size: 3em; color: #456EB5' class='rightArrow'><i class='fas fa-angle-right'></i></div>",
    slidesToShow: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1005,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});
