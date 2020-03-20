var owl = $('.promotion-slider');
owl.owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:false
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        },
        1200:{
          items:5,
          nav:false,
          loop:true
        }
    }
});




$('.vdo-slider').owlCarousel({
  loop: true,
  margin: 5,
  nav: false,
  dots: false,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive: {
      0: {
          items: 1
      }
  }
})

var owl = $('.vdo-slider');
owl.owlCarousel();
$('.next-vdo').click(function() {
  owl.trigger('next.owl.carousel');
})
$('.previous-vdo').click(function() {
  owl.trigger('prev.owl.carousel', [300]);
})


jQuery(document).ready(function($) {
    $('.count').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
      $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
      });
      $('#datepicker2').datepicker({
        uiLibrary: 'bootstrap4'
      });
});

$('#mySelect').selectpicker();

$('.icon-link').hover(function() {
  $('.cat-icon').css('background', '#c8102e');
  $('.cat-icon').css('color', '#fff');
}, function() {
  // on mouseout, reset the background colour
  $('.cat-icon').css('background', 'transparent');
  $('.cat-icon').css('color', '#c8102e');
});

setTimeout(function() {
  $('#myModal').modal();
}, 2000);


$('#nationChange').on('change', function() {
  $('#nationImageView').attr('src', this.value);
});

$('.sev_check').click(function() {
  $('.sev_check').not(this).prop('checked', false);
});
$('.sev_check_two').click(function() {
  $('.sev_check_two').not(this).prop('checked', false);
});

$(window).on('load',function(){
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    itemWidth: 100,
    itemMargin: 5,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    sync: "#carousel",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});

// $(".expander").click(function(){
//   $(".edit-numbers").toggle();
// });
$("#changedate").click(function(){
  $("#tochangedate").toggle();
  // $(".edit-numbers").toggle();
});

// rooms 
var x = 0;
$(".value-buttons-rooms input").attr('value', x);
$(".room-value").text(x);

$("#r_inc").click(function(){
  if(x >= 0){
    x = x + 1;
    $(".value-buttons-rooms input").attr('value', x);
    $(".room-value").text(x);
  }
});
$("#r_dec").click(function(){
  if(x > 0){
    x = x - 1;
    $(".value-buttons-rooms input").attr('value', x);
    $(".room-value").text(x);
  }
});
// adults 
var xa = 0;
$(".value-buttons-adults input").attr('value', xa);
$(".adult-value").text(xa);

$("#a_inc").click(function(){
  if(xa >= 0){
    xa = xa + 1;
    $(".value-buttons-adults input").attr('value', xa);
    $('.adult-value').text(xa);
  }
});
$("#a_dec").click(function(){
  if(xa > 0){
    xa = xa - 1;
    $(".value-buttons-adults input").attr('value', xa);
    $('.adult-value').text(xa);
  }
});
// children 
var xc = 0;
$(".value-buttons-children input").attr('value', xc);
$(".children-value").text(xc);

$("#c_inc").click(function(){
  if(xc >= 0){
    xc = xc + 1;
    $(".value-buttons-children input").attr('value', xc);
    $(".children-value").text(xc);
  }
});
$("#c_dec").click(function(){
  if(xc > 0){
    xc = xc - 1;
    $(".value-buttons-children input").attr('value', xc);
    $(".children-value").text(xc);
  }
});

$('.facility-icon-text').popover({ trigger: "hover" });

$('#desc_readmore').on('click',function(){
  $('#about_desc').toggleClass('about-description-full');
  $('#readmore_overlay').toggleClass('toggle-readmore-bg');
});

$(function(){
  $("#desc_readmore").click(function () {
     $(this).text(function(i, text){
         return text === "Read more" ? "Read less" : "Read more";
     })
  });
})