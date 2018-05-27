$(document).ready(function() {
  //Conferindo tamanho inicial da página
  if($(window).width() <= 1005){
    $('.menu-list').css('display','none');
  }

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
      $('.dropdown').append("<li><a href='#'>Inicial</a></li> <br>");
      $('.dropdown').append("<li><a href='#'>Quem somos</a></li> <br>");
      $('.dropdown').append("<li><a href='#'>Serviços</a></li> <br>");
      $('.dropdown').append("<li><a href='#'>Clientes</a></li> <br>");
      $('.dropdown').append("<li><a href='#'>Fale conosco</a></li>");
      $('.menu-button').addClass('ativo');
    }
    else {
      $('.dropdown li').remove();
      $('.dropdown br').remove();
      $('.menu-button').removeClass('ativo');
    }
  });

  //Ajustando menu dropdown
  $('.menu-button').on('click',function(){
    if(!$('.menu-button').hasClass('focado')){
      $('.menu-button').addClass('focado');
      $('.menu-button').css('width','90%');
    }
    else {
      $('.menu-button').removeClass('focado');
      $('.menu-button').css('width','25%');
    }
  });
  //Slider Inicial
  $('.folderContent').slick({
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });
  //Slider dos Serviços
  $('.servicesShow').slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 2,
          arrows: true,
          infinite: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidestoShow: 1,
          arrows: true,
          infinite: true
        }
      },
      {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        arrows: true,
        infinite: true
      }
    }
    ]
  });

  //Slides dos clientes
  $('.customersShow').slick({
    slidesToShow: 4,
    infinite: true,
    arrows: true,
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
